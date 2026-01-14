# Decisions

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