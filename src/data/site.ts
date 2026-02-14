import type { Locale } from '../i18n/locales';
import { profiles } from './profile';

export type SiteMeta = {
  name: string;
  title: string;
  description: string;
  url: string;
  socialImage: string;
};

export const siteByLocale: Record<Locale, SiteMeta> = {
  en: {
    name: profiles.en.name,
    title: `${profiles.en.name} · ${profiles.en.headline}`,
    description:
      'Software developer focused on Java platforms, carefully built UIs, and steady delivery for enterprise teams.',
    url: 'https://serdyuchenko.com',
    socialImage: '/og-default.png',
  },
  ru: {
    name: profiles.ru.name,
    title: `${profiles.ru.name} · ${profiles.ru.headline}`,
    description:
      'Разработчик, который делает Java-платформы, аккуратные интерфейсы и стабильно поставляет результат для enterprise-команд.',
    url: 'https://serdyuchenko.com',
    socialImage: '/og-default.png',
  },
};

export const getSite = (locale: Locale): SiteMeta => siteByLocale[locale];

export const site = siteByLocale.en;
