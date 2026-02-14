export const locales = ['en', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

const RU_PREFIX = '/ru';

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const normalizePath = (pathname: string): string => {
  if (!pathname) {
    return '/';
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (withLeadingSlash === '/') {
    return '/';
  }

  return withLeadingSlash.endsWith('/')
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
};

export const getLocaleFromPath = (pathname: string): Locale => {
  const normalized = normalizePath(pathname);
  if (normalized === RU_PREFIX || normalized.startsWith(`${RU_PREFIX}/`)) {
    return 'ru';
  }

  return 'en';
};

export const stripLocaleFromPath = (pathname: string): string => {
  const normalized = normalizePath(pathname);
  if (normalized === RU_PREFIX) {
    return '/';
  }

  if (normalized.startsWith(`${RU_PREFIX}/`)) {
    return normalized.slice(RU_PREFIX.length);
  }

  return normalized;
};

export const localizePath = (pathname: string, locale: Locale): string => {
  const basePath = stripLocaleFromPath(pathname);
  if (locale === 'ru') {
    return basePath === '/' ? RU_PREFIX : `${RU_PREFIX}${basePath}`;
  }

  return basePath;
};
