"""Validate generated SEO metadata, crawl policy and visible FAQ/schema consistency."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.meta = {}
        self.canonicals = []
        self.schemas = []
        self.text = []
        self.ids = set()
        self.main_count = 0
        self.script = None
        self.script_text = []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta":
            key = attrs.get("name", attrs.get("property"))
            self.meta.setdefault(key, []).append(attrs.get("content", ""))
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs["href"])
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "main":
            self.main_count += 1
        if tag == "script":
            self.script = attrs.get("type", "script")
            self.script_text = []

    def handle_data(self, data):
        if self.script:
            self.script_text.append(data)
        else:
            self.text.append(data)

    def handle_endtag(self, tag):
        if tag == "script":
            if self.script == "application/ld+json":
                self.schemas.append(json.loads("".join(self.script_text)))
            self.script = None


root = Path("dist")
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
urls = [loc.text for sitemap in root.glob("sitemap-*.xml")
        for loc in ElementTree.parse(sitemap).findall("s:url/s:loc", ns)]
assert urls, "Build the site before running this check"
assert len(urls) == len(set(urls)), "Duplicate sitemap URLs"
descriptions = set()
faq_count = 0
for url in urls:
    path = urlparse(url).path
    assert not re.match(r"/(?:demo/|(?:dashboards|inventarios|saas|404)(?:/|\.|$))", path), url
    page = Page((root / path.lstrip("/") / "index.html").read_text())
    assert page.canonicals == [url], f"Canonical/sitemap mismatch: {url}"
    assert page.main_count == 1, f"Expected one main landmark: {url}"
    for key in ["description", "robots", "og:title", "og:description", "og:url", "og:image",
                "twitter:card", "twitter:title", "twitter:description", "twitter:image"]:
        assert len(page.meta.get(key, [])) == 1 and page.meta[key][0], f"Missing/duplicate {key}: {url}"
    assert "noindex" not in page.meta["robots"][0], url
    assert page.meta["description"][0] not in descriptions, f"Duplicate description: {url}"
    descriptions.add(page.meta["description"][0])
    assert page.meta["og:url"] == [url], url
    image = urlparse(page.meta["og:image"][0]).path.lstrip("/")
    assert image.endswith(".png") and (root / image).exists(), f"Missing social image: {url}"
    graph = [node for schema in page.schemas for node in schema.get("@graph", [])]
    types = {node["@type"] for node in graph}
    assert {"Organization", "WebSite"} <= types, url
    declared_ids = {node["@id"] for node in graph}
    for node in graph:
        for key in ["publisher", "provider", "isPartOf", "about", "breadcrumb", "mainEntityOfPage"]:
            if key in node:
                assert node[key]["@id"] in declared_ids, f"Broken schema reference {key}: {url}"
    text = " ".join(" ".join(page.text).split())
    for node in graph:
        if node["@type"] != "FAQPage":
            continue
        for question in node["mainEntity"]:
            assert question["@id"].split("#")[1] in page.ids, url
            assert " ".join(question["name"].split()) in text, f"FAQ question not rendered: {url}"
            assert " ".join(question["acceptedAnswer"]["text"].split()) in text, f"FAQ answer not rendered: {url}"
            faq_count += 1
for demo in (root / "demo").glob("*/index.html"):
    assert "noindex" in Page(demo.read_text()).meta["robots"][0], str(demo)
assert "noindex" in Page((root / "404.html").read_text()).meta["robots"][0]
for legacy in ["dashboards", "inventarios", "saas"]:
    assert "noindex" in Page((root / legacy / "index.html").read_text()).meta["robots"][0]
robots = (root / "robots.txt").read_text()
assert "Sitemap: https://getzenith.dev/sitemap-index.xml" in robots
assert "Disallow: /" not in robots
assert faq_count == 17, f"Expected home and specialty FAQs, found {faq_count}"
print(f"SEO OK: {len(urls)} indexable URLs, {faq_count} matching FAQ answers; canonical, metadata, schema references, images and noindex validated.")
