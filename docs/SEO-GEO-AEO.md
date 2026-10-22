# SEO, GEO y AEO

Auditoría e implementación: 21 de octubre de 2026.

## Lo que ya existía

- HTML estático con títulos, descripciones, Open Graph y canonical en el layout principal.
- robots.txt abierto al rastreo y sitemap automático.
- Organization y Service básicos en JSON-LD.
- Precios, contacto, proceso y servicios descritos en las páginas.

## Cambios

- `Seo.astro` centraliza metadatos y un grafo JSON-LD con Organization, WebSite, WebPage/FAQPage/AboutPage, BreadcrumbList y Service cuando corresponde. Zenith usa el mismo identificador en todas las páginas, con correo y perfiles oficiales existentes.
- Canonical y sitemap usan las mismas URLs con barra final. La página legal comparte los metadatos. Las demos usan `noindex, follow`; el sitemap excluye demos y redirecciones antiguas. robots.txt permite rastrearlas para que se lea el noindex.
- Open Graph y Twitter incluyen títulos, descripciones, imágenes PNG y textos alternativos. `pnpm og` genera las vistas previas desde los SVG originales.
- Preguntas frecuentes visibles en inicio y especialidades. El HTML y FAQPage usan los mismos datos de `src/data/faqs.ts`; los precios se toman de las especialidades para evitar discrepancias. Las micro apps conservan su estado «Próximamente».
- Las páginas de inicio, especialidades y organización tienen un landmark principal `main`.
- Las respuestas ya vienen en el HTML estático, sin depender de JavaScript. El selector ES/EN también actualiza los metadatos sociales del layout principal.

## Verificación

```sh
pnpm og        # al editar las imágenes fuente
pnpm check
pnpm build
python3 scripts/check-seo.py
```

El control del HTML compilado valida canonical contra sitemap, descripciones únicas, metadatos sociales, imágenes existentes, referencias entre entidades JSON-LD, respuestas FAQ presentes en el HTML y la política noindex de demos/redirecciones/404.

## Alcance y seguimiento

Esta implementación no publica el sitio ni envía URLs a buscadores. Después de desplegar, enviar `https://getzenith.dev/sitemap-index.xml` en Google Search Console y Bing Webmaster Tools y revisar indexación, resultados y citas. No hay credenciales de estas cuentas en este trabajo.

El idioma indexable principal es español. El selector inglés comparte URL; no se declaran alternativos hreflang sin páginas traducidas con URLs propias. La indexación independiente en inglés requiere esas rutas y enlaces entre versiones.

GEO/AEO se apoyan en contenido claro, original, rastreable y consistente. Los datos estructurados describen el contenido real; no garantizan posiciones, citas en IA ni resultados enriquecidos. No se añadieron direcciones físicas, reseñas, cifras o disponibilidad de productos no confirmadas.

Fuentes oficiales consultadas:

- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- https://docs.astro.build/en/guides/integrations-guide/sitemap/
