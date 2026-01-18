# Conventions

This document describes the primary folder structure and conventions for the site.

## Folder structure

- `src/pages/` - Route entry points (Astro pages). Use `index.astro` for root routes.
- `src/components/` - Reusable UI components (Astro/JSX).
- `src/layouts/` - Shared layout shells used by pages (Astro).
- `src/content/` - Content files such as Markdown/MDX.
- `src/data/` - Structured data (JSON/TS) consumed by pages/components.
- `public/` - Static assets copied as-is to the build output.

Note: Entry files and legacy React files that are not yet migrated still live at
`src/` (for example `src/main.jsx`, `src/App.jsx`, and `src/theme.js`). Legacy
folders like `src/static/` and `src/about-information/` remain until they are
migrated into `public/` or `src/components/`. New UI components should go in
`src/components/`.

## Naming

- Pages: `kebab-case.astro` (except `index.astro`).
- Components and layouts: `PascalCase` filenames (for example
  `FeatureGrid.astro`, `BaseLayout.astro`).
- Content files: `kebab-case.md` or `kebab-case.mdx`.
- Data files: `kebab-case.json` or `camelCase.ts` module exports.

## Frontmatter

Content in `src/content/` should include frontmatter. Minimal fields:

```yaml
title: "Page title"
description: "Short summary used for SEO and cards"
```

Optional fields (when relevant):

```yaml
slug: "custom-slug"
date: "2024-01-15"
draft: false
```

## Components

- Prefer small, reusable components in `src/components/`.
- Keep layout-level concerns in `src/layouts/` and page-specific logic in
  `src/pages/`.
- When a component needs data, import from `src/data/` rather than duplicating
  inline structures.
