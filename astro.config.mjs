import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://serdyuchenko.com',
  redirects: {
    '/cv': '/',
  },
  integrations: [sitemap()],
  vite: {
    build: {
      // Emit component <script> as an external same-origin module instead of
      // inlining it, so the CSP in BaseLayout.astro can stay `script-src 'self'`
      // without `'unsafe-inline'`. See docs/decisions.md (security headers).
      assetsInlineLimit: 0,
    },
  },
});
