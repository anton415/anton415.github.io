# serdyuchenko.com

Personal website for hobby.

This website uses [Vite.js](https://github.com/vitejs/vite).
It includes `@mui/material` and its peer dependencies, including [Emotion](https://emotion.sh/docs/introduction), the default style engine in Material UI v5.

## Available Scripts

In the project directory, you can run:

### `npm install`

Rebuild node_modules.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:3000) to view it in the browser.

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

- [React documentation](https://reactjs.org/).
- [Material UI React](https://mui.com/).
- [GitHub Pages](https://pages.github.com/).
