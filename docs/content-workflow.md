# Content workflow

This guide covers how to add or update blog posts and projects in the content
collections.

## Where content lives

- Posts: `src/content/posts/`
- Projects: `src/content/projects/`

File names become the URL slug (for example
`src/content/posts/hello-world.md` -> `/blog/hello-world`). Keep names
`kebab-case`.

## Add a post

1. Create a new Markdown file in `src/content/posts/`.
2. Add required frontmatter (see examples below).
3. Write the body content in Markdown.
4. Set `draft: true` while working; set `draft: false` to publish.

### Post frontmatter (minimal)

```yaml
---
title: "Post title"
date: 2026-01-29
tags:
  - Writing
  - Updates
description: "Short summary used for cards and SEO."
draft: false
---
```

### Post frontmatter (full example)

```yaml
---
title: "Hello world, code blocks"
date: 2026-01-25
tags:
  - Code
  - Markdown
  - Styling
description: "Test post for syntax highlighting and code block styling."
readingTime: "2 min read"
draft: false
socialImage: "/images/og/hello-code-sample.png"
---
```

Notes:

- `date` must be in `YYYY-MM-DD` format.
- `readingTime` is a manual string displayed next to the tags.
- Draft posts are hidden from `/blog` and tag pages.

### Tag naming conventions

- Use consistent casing (recommended: Title Case like `Design Systems`).
- Prefer short, specific tags over long phrases.
- Avoid duplicate tag variants that slugify to the same value (for example
  `Design Systems`, `design-systems`, and `design systems`).
- Stick to letters/numbers; avoid trailing punctuation.

## Add a project

1. Create a new Markdown file in `src/content/projects/`.
2. Add required frontmatter (see examples below).
3. Write the body content in Markdown (optional if the summary is enough).

### Project frontmatter (minimal)

```yaml
---
title: "Project name"
role: "Design + Engineering"
outcomes:
  - "Outcome one."
  - "Outcome two."
---
```

### Project frontmatter (full example)

```yaml
---
title: "Studio site refresh"
role: "Design + Engineering"
description: "A lightweight rebuild focused on speed, clarity, and a content system that can scale with new writing and case studies."
stack:
  - Astro
  - TypeScript
  - Vite
links:
  - label: "Live site"
    url: "https://serdyuchenko.com"
  - label: "Project brief"
    url: "https://serdyuchenko.com/projects/studio-site-refresh"
outcomes:
  - "Rebuilt the base site on Astro for faster iterations."
  - "Introduced content collections for posts and projects."
  - "Set a modular layout foundation for future case studies."
screenshots:
  - src: "/images/projects/studio-site-refresh/home.png"
    alt: "Homepage hero"
    caption: "Refreshed landing experience"
socialImage: "/images/og/studio-site-refresh.png"
---
```

Notes:

- `outcomes` is required and appears on the projects list and detail page.
- `links` must include a `label` and a valid `url`.
- `screenshots` render as a grid on the project detail page.

## Image guidance

- Store images in `public/` so they are served as static assets.
- Use absolute paths from the site root in frontmatter and Markdown, for example
  `/images/projects/my-project/hero.png`.
- Recommended folders:
  - `public/images/og/` for social share images.
  - `public/images/posts/<slug>/` for post images.
  - `public/images/projects/<slug>/` for project screenshots.
- Use clear, descriptive file names and include `alt` text when possible.
- Social images should be landscape (commonly 1200x630) so they work well on
  link previews.

### Embedding images in Markdown

```md
![Alt text describing the image](/images/posts/hello-world/diagram.png)
```

## Quick checklist

- File name is `kebab-case` and matches the intended URL slug.
- Required frontmatter fields are present.
- `draft` is set correctly for posts.
- Images live in `public/` and are referenced with `/images/...` paths.
