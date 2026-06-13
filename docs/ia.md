# Information Architecture (IA)

## Primary goals
- CV / Resume (the site's main content, on `/`)
- Links hub to other platforms

## Routes
Top-level pages (current single-page resume):
- `/` — CV / Resume (intro + experience + education + skills + projects)
- `/links` — Link hub (all platforms)

Planned (returning later, see `anton415-ru-relaunch-plan.md`):
- `/projects` — Projects index
- `/projects/[slug]` — Project detail
- `/blog` — Blog index
- `/blog/[slug]` — Blog post
- `/now` — What I’m focused on this month
- `/uses` — Tools & setup

## Navigation
Header nav:
- Резюме (`/`)
- Ссылки (`/links`)

Footer:
- Social links (GitHub, X, etc.) from a single data source (`src/data/links.ts`)
- Email (optional)
- Copyright

## Content types
1) **Resume**
- Defined as typed data in `src/data/cv.ts` and rendered by `src/components/cv/*`.
- Sections: summary, experience, education, skills, projects.

2) **Static pages**
- Implemented as Astro pages.
- Examples: Resume (`/`), Links (`/links`).

Planned content types (returning later, likely as content collections):
- **Blog posts** — Markdown/MDX with frontmatter (`title`, `date`, `description`, `tags`, `draft`, optional `cover`).
- **Projects** — Markdown/MDX with frontmatter (`title`, `role`, `stack`, `links`, `outcomes`, optional `screenshots`).

## Constraints
- Static hosting only (GitHub Pages)
- No custom backend/server
- Prefer fast loads and minimal client-side JS
