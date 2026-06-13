# Content workflow

The site is currently a single-page resume. Its content is not stored as Markdown
content collections — it lives in typed TypeScript modules under `src/data/`.
Markdown collections for blog posts and projects were removed during the relaunch
and may return later with a new schema (see
[anton415-ru-relaunch-plan.md](../anton415-ru-relaunch-plan.md)). Their old
frontmatter is kept at the end of this doc for reference.

## Where content lives

- `src/data/cv.ts` — resume content: `summary`, `experience`, `education`,
  `skills`, `projects`. Rendered by `src/components/cv/*`.
- `src/data/profile.ts` — `name`, `headline`, `location`, `email`.
- `src/data/links.ts` — `navLinks` (header nav) and `socialLinks` (links hub + footer).
- `src/data/site.ts` — site-wide meta: `name`, `title`, `description`,
  `url`, `socialImage`. Consumed by `BaseLayout.astro` for `<title>`, the meta
  description and Open Graph / Twitter tags.

Each module exports typed objects, so the editor and `npm run lint` will flag
missing or misshaped fields.

## Edit the resume

1. Open `src/data/cv.ts`.
2. Update the relevant array (`experience`, `education`, `skills`, `projects`)
   following the `Cv*` types defined at the top of the file.
3. Dates use `YYYY-MM` strings; use `present` for the current role's `end`.
4. Run `npm run dev` to preview and `npm run lint` before committing.

### Resume data shape (excerpt)

```ts
experience: [
  {
    company: 'Банк России',
    companyUrl: 'https://www.cbr.ru',
    location: 'Москва, Россия',
    role: 'Java-разработчик',
    start: '2019-12',
    end: 'present',
    highlights: ['…'],
  },
],
```

## Update meta / SEO

Edit `src/data/site.ts`. `description` and `socialImage` feed the meta
description and Open Graph / Twitter previews, so keep `description` concise and
accurate for the resume.

## Images

- Store images in `public/` so they are served as static assets.
- Reference them with absolute paths from the site root, e.g. `/og-default.png`.
- The default social image lives at `public/og-default.png` and is referenced by
  `site.socialImage`. Keep it landscape at 1200×630 (the standard Open Graph /
  Twitter preview ratio) and compressed.

## Quick checklist

- Edited the right `src/data/*.ts` module.
- Types still satisfied (no `npm run lint` / `astro check` errors).
- `npm run dev` preview looks correct.
- Meta (`site.ts`) is accurate if the content/positioning changed.

---

## Reference: removed collection frontmatter

The blog and projects sections used Astro content collections before the
single-page relaunch. The schemas below are kept only for reference and are **not
active**; revisit them (and the relaunch plan) when reintroducing the sections.

### Blog post frontmatter

```yaml
---
title: "Post title"
date: 2026-01-29
tags:
  - Writing
description: "Short summary used for cards and SEO."
draft: false
---
```

### Project frontmatter

```yaml
---
title: "Project name"
role: "Design + Engineering"
stack:
  - Astro
  - TypeScript
links:
  - label: "Live site"
    url: "https://serdyuchenko.com"
outcomes:
  - "Outcome one."
---
```
