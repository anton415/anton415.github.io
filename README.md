# serdyuchenko.com

Personal site built with [Astro](https://astro.build/) and Markdown content
collections.

## Content workflow

New posts and projects live in `src/content/`. See
[`docs/content-workflow.md`](docs/content-workflow.md) for frontmatter examples,
tag conventions, and image guidance.

## Available scripts

In the project directory, you can run:

### `npm install`

Rebuild node_modules.

### `npm run dev`

Starts the Astro dev server.<br>
Open [http://localhost:4321](http://localhost:4321) to view it in the browser.

### `npm run build`

Builds the production site to `dist/`.

### `npm run preview`

Preview the production build locally.

### `npm run deploy`

Deploy to GitHub Pages (legacy, local).

## Publish checklist

- New content lives in `src/content/posts/` or `src/content/projects/`.
- Post frontmatter includes `title`, `date`, `tags`, `description`, and
  `draft: false` when ready to publish.
- Project frontmatter includes `title`, `role`, and at least one `outcomes`
  entry.
- Images are stored in `public/` and referenced with `/images/...` paths.
- Optional: run `npm run build` before pushing.

## GitHub Pages (Actions)

This repo deploys to GitHub Pages via Actions on every push to `main`.

Repo settings:
- Settings → Pages → Source: GitHub Actions
- Custom domain: `serdyuchenko.com`
- Enforce HTTPS: enabled (after DNS is verified)

DNS (if needed):
- A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- CNAME for `www` → `serdyuchenko.com`

## Learn More

- [Astro documentation](https://docs.astro.build/).
- [GitHub Pages](https://pages.github.com/).
