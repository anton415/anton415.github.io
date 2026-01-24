# Information Architecture (IA)

## Primary goals
- CV / Resume
- Blog (learning notes, tech writing)
- Links hub to other platforms
- Projects / case studies

## Routes
Top-level pages:
- `/` — Home (intro + featured links + featured projects/posts)
- `/cv` — CV (print-friendly)
- `/projects` — Projects index
- `/projects/[slug]` — Project detail
- `/blog` — Blog index
- `/blog/[slug]` — Blog post
- `/links` — Link hub (all platforms)

Optional pages (later):
- `/now` — What I’m focused on this month
- `/uses` — Tools & setup

## Navigation
Header nav:
- Home
- CV
- Projects
- Blog
- Links

Footer:
- Social links (GitHub, X, etc.) from a single data source
- Email (optional)
- Copyright

## Content types
1) **Blog posts**
- Stored as Markdown/MDX
- Fields (frontmatter): `title`, `date`, `description`, `tags`, `draft`, optional `cover`

2) **Projects**
- Stored as Markdown/MDX
- Fields: `title`, `role`, `stack` (optional), `links` (repo/demo, optional), `outcomes`, optional `screenshots`

3) **Static pages**
- Implemented as Astro pages (and optionally content-driven later)
- Examples: CV, Links, Now, Uses

## Constraints
- Static hosting only (GitHub Pages)
- No custom backend/server
- Prefer fast loads and minimal client-side JS
