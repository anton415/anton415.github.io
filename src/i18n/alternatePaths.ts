type SlugEntry = {
  id: string;
  slug: string;
};

type TaggedEntry = {
  id: string;
  data: {
    tags?: string[];
  };
};

export const slugifyTag = (tag: string): string =>
  tag
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/(^-|-$)+/g, '');

export const buildSlugMapById = (
  sourceEntries: SlugEntry[],
  targetEntries: SlugEntry[]
): Map<string, string> => {
  const targetById = new Map(targetEntries.map((entry) => [entry.id, entry.slug]));
  const slugMap = new Map<string, string>();

  for (const entry of sourceEntries) {
    const mappedSlug = targetById.get(entry.id);
    if (mappedSlug) {
      slugMap.set(entry.slug, mappedSlug);
    }
  }

  return slugMap;
};

export const buildTagSlugMap = (
  sourceEntries: TaggedEntry[],
  targetEntries: TaggedEntry[]
): Map<string, string> => {
  const targetById = new Map(targetEntries.map((entry) => [entry.id, entry]));
  const slugMap = new Map<string, string>();

  for (const sourceEntry of sourceEntries) {
    const targetEntry = targetById.get(sourceEntry.id);
    if (!targetEntry) {
      continue;
    }

    const sourceTags = sourceEntry.data.tags ?? [];
    const targetTags = targetEntry.data.tags ?? [];
    const pairCount = Math.min(sourceTags.length, targetTags.length);

    for (let index = 0; index < pairCount; index += 1) {
      const sourceSlug = slugifyTag(sourceTags[index] ?? '');
      const targetSlug = slugifyTag(targetTags[index] ?? '');
      if (!sourceSlug || !targetSlug || slugMap.has(sourceSlug)) {
        continue;
      }

      slugMap.set(sourceSlug, targetSlug);
    }
  }

  return slugMap;
};
