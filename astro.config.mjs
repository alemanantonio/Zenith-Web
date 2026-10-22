import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://getzenith.dev',
  integrations: [sitemap({
    filter: (page) => !/^\/(?:demo(?:\/|$)|(?:dashboards|inventarios|saas|404)(?:\/|\.|$))/.test(new URL(page).pathname),
  })],
});
