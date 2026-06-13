import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://serdyuchenko.com',
  redirects: {
    '/cv': '/',
  },
  integrations: [sitemap()],
});
