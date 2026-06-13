# Decisions

## 2026-06-13 — Security headers strategy

**Decision:** Stay on **GitHub Pages**. Apply the hardening that is achievable in
static HTML now (CSP + Referrer-Policy via `<meta>`), keep the codebase
CSP-clean, and document the remaining gap rather than introducing a proxy/Worker
just to set HTTP response headers.

**Context:** `https://serdyuchenko.com/` is served by GitHub Pages, which cannot
emit custom response headers. A `curl -I` on 2026-06-13 confirmed none of
`Content-Security-Policy`, `Referrer-Policy`, `Permissions-Policy`,
`X-Content-Type-Options` or `Strict-Transport-Security` are present. The site is
a static, zero-script personal CV: production HTML loads no external scripts,
fonts or analytics; all images are same-origin; external URLs are anchor links
only. Risk is low, so a hosting migration is disproportionate to the benefit.

**What ships now (in `src/layouts/BaseLayout.astro`):**

- `Content-Security-Policy` via `<meta http-equiv>`:

  ```
  default-src 'self'; base-uri 'self'; form-action 'self'; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'
  ```

  - `style-src 'unsafe-inline'` is required: Astro emits one scoped inline
    `<style>` block per page in the production build (verified in `dist/`).
  - `script-src 'self'` is enough because the only interactivity (the CV print
    button) was moved out of an inline `onclick` into a `<script>` in
    `src/components/cv/CvIntro.astro`. `astro.config.mjs` sets
    `vite.build.assetsInlineLimit: 0` so Astro emits that script as an external
    same-origin module rather than inlining it — keeping `script-src` free of
    `'unsafe-inline'`. Do not remove that setting without also relaxing the CSP.
  - `frame-ancestors` is intentionally omitted: it is ignored in a `<meta>` CSP
    and only works as a real header.

- `Referrer-Policy` via `<meta name="referrer" content="strict-origin-when-cross-origin">`.

**Known limitation (cannot be delivered by GitHub Pages / `<meta>`):**
`X-Content-Type-Options`, `Permissions-Policy`, `Strict-Transport-Security` and
the header-only `frame-ancestors` directive require a host that can set response
headers. As an interim win, enable **Settings → Pages → Enforce HTTPS** so the
GitHub edge serves HSTS for the custom domain.

**Future migration path:** if the site moves behind a headers-capable layer
(e.g. Cloudflare Pages/Worker), drop the following into `public/_headers`
(Cloudflare Pages format) — it is the full target set and supersedes the `<meta>`
tags, which can then be removed:

```
/*
  Content-Security-Policy: default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Content-Type-Options: nosniff
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

Revisit this decision if the site gains comments, third-party scripts or
interactive widgets — at that point a headers-capable host (and tighter
`script-src`/`img-src`) becomes worthwhile.

**Verify after deploy:** `curl -I https://serdyuchenko.com/` (CSP/Referrer-Policy
now come through the HTML, so also confirm via the page source / browser
DevTools) or re-run securityheaders.com.

## 2026-01-14 — URL strategy

**Decision:** Keep using the custom domain `serdyuchenko.com` as the canonical site URL (not the default `anton415.github.io` URL).

**Why:**
- It’s already referenced in the repo and matches the intent of a personal brand site.
- GitHub Pages is enough (no server needed), and we’ll deploy a static site.

**Implications / next steps:**
- GitHub Pages will be configured to deploy from **GitHub Actions** (later phase).
- Astro config will set:
  - `site: "https://serdyuchenko.com"`
  - `base: "/"` (custom domain)
- Keep the existing `CNAME` file until the new deployment pipeline is in place, then verify the Pages settings reflect the custom domain.
- Ensure HTTPS is enabled in GitHub Pages settings after deployment.