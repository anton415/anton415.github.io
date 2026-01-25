export const giscus = {
  repo:
    import.meta.env.PUBLIC_GISCUS_REPO ?? 'anton415/anton415.github.io',
  repoId: import.meta.env.PUBLIC_GISCUS_REPO_ID ?? '',
  category: import.meta.env.PUBLIC_GISCUS_CATEGORY ?? 'General',
  categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID ?? '',
  mapping: import.meta.env.PUBLIC_GISCUS_MAPPING ?? 'pathname',
  strict: import.meta.env.PUBLIC_GISCUS_STRICT ?? '0',
  reactionsEnabled:
    import.meta.env.PUBLIC_GISCUS_REACTIONS_ENABLED ?? '1',
  emitMetadata: import.meta.env.PUBLIC_GISCUS_EMIT_METADATA ?? '0',
  inputPosition: import.meta.env.PUBLIC_GISCUS_INPUT_POSITION ?? 'top',
  theme: import.meta.env.PUBLIC_GISCUS_THEME ?? 'light',
  lang: import.meta.env.PUBLIC_GISCUS_LANG ?? 'en',
  loading: import.meta.env.PUBLIC_GISCUS_LOADING ?? 'lazy',
};
