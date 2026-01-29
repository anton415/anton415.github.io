# Performance & Lighthouse

This guide captures the current Lighthouse workflow and the performance budget
for serdyuchenko.com.

## Perf budget (targets)

- Lighthouse scores (Mobile + Desktop): Performance >= 95, Accessibility >= 95,
  Best Practices >= 95, SEO >= 95.
- Total Blocking Time (desktop): keep under 150-200 ms.
- Largest Contentful Paint: under 2.5s on Mobile/Slow 4G.
- Cumulative Layout Shift: under 0.1.
- JS on the homepage: keep it minimal (ideally no client JS unless required).

If a change needs to exceed the budget, document the tradeoff in the PR and
revisit after release.

## Lighthouse workflow

1. Run Lighthouse in a clean Chrome environment:
   - Use Incognito with extensions disabled, or a fresh Chrome profile.
   - Run both Mobile and Desktop profiles.
2. Save JSON reports to `docs/lighthouse/` with the date and profile, e.g.
   `docs/lighthouse/2026-01-29-desktop.json` and
   `docs/lighthouse/2026-01-29-mobile.json`.
3. Commit the reports with the code changes.

## Known pitfalls

- Extension injections can pollute results (example: injected "Learn more"
  links pointing to ReaderMode URLs). If these appear, confirm with a clean
  profile before changing site content.
- bfcache and unload warnings should not appear if the site is static and free
  of unload/beforeunload handlers. If they do, double-check third-party
  scripts or extensions first.

## Cache lifetime note (GitHub Pages)

Astro emits content-hashed assets that are safe to cache long-term, but GitHub
Pages does not allow custom `Cache-Control` headers. To improve cache
lifetimes, consider adding a CDN (e.g., Cloudflare) that can set
`Cache-Control: public, max-age=31536000, immutable` on static assets.
