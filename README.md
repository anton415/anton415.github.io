# serdyuchenko.com

Personal website for hobby.

This website is built with [Astro](https://astro.build/) and MDX.

## Available Scripts

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
