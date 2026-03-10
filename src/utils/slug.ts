export const slugifyTag = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .normalize('NFKC')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/(^-|-$)+/g, '');
