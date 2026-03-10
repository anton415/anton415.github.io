import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://serdyuchenko.com',
  redirects: {
    '/posts': '/blog',
    '/posts/[slug]': '/blog/[slug]',
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light',
    },
  },
  integrations: [mdx(), sitemap()],
});
