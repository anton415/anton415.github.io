# Conventions

This document describes the primary folder structure and conventions for the site.

## Folder structure

- `src/pages/` - Route entry points (Astro pages). Use `index.astro` for root routes.
- `src/components/` - Reusable UI components (Astro). CV sections live in `src/components/cv/`.
- `src/layouts/` - Shared layout shells used by pages (`BaseLayout.astro`).
- `src/data/` - Structured data (TS modules) consumed by pages/components.
- `src/styles/` - Design tokens and shared CSS (`tokens.css`, `global.css`, `print.css`, `cv.css`).
- `src/utils/` - Small helpers (for example `date.ts`).
- `public/` - Static assets copied as-is to the build output.

New UI components go in `src/components/`; content and data go in `src/data/`.

## Naming

- Pages: `kebab-case.astro` (except `index.astro`).
- Components and layouts: `PascalCase` filenames (for example
  `CvExperience.astro`, `BaseLayout.astro`).
- Data files: `camelCase.ts` module exports (for example `cv.ts`, `links.ts`).
- Styles: `kebab-case.css` in `src/styles/`.

## Data

The site is content-driven through typed TS modules in `src/data/`, not Markdown
content collections:

- `cv.ts` — resume content (experience, education, skills, projects).
- `profile.ts` — name, headline, contacts.
- `links.ts` — navigation and external profiles.
- `site.ts` — site-wide meta (title, description, OG) used by `BaseLayout.astro`.

Markdown content collections (blog posts and projects) were removed during the
single-page relaunch and may return later with a new schema; see
[content-workflow.md](content-workflow.md) and the relaunch plan for details.

## Components

- Prefer small, reusable components in `src/components/`.
- Keep layout-level concerns in `src/layouts/` and page-specific logic in
  `src/pages/`.
- When a component needs data, import from `src/data/` rather than duplicating
  inline structures.
