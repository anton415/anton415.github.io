import type { Locale } from '../i18n/locales';

export type Profile = {
  name: string;
  headline: string;
  location: string;
  email: string;
};

export const profiles: Record<Locale, Profile> = {
  en: {
    name: 'Anton Serdyuchenko',
    headline: 'Software developer',
    location: 'Remote or Moscow',
    email: 'anton415@gmail.com',
  },
  ru: {
    name: 'Антон Сердюченко',
    headline: 'Разработчик программного обеспечения',
    location: 'Удаленно или Москва',
    email: 'anton415@gmail.com',
  },
};

export const getProfile = (locale: Locale): Profile => profiles[locale];

export const profile = profiles.en;
