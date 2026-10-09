import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zenith.antonioaleman.dev',
  integrations: [sitemap()],
});
