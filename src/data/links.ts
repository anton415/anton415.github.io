import type { Locale } from '../i18n/locales';

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export const navLinksByLocale: Record<Locale, NavLink[]> = {
  en: [
    { href: '/', label: 'Home' },
    { href: '/cv', label: 'CV' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/links', label: 'Links' },
  ],
  ru: [
    { href: '/', label: 'Главная' },
    { href: '/cv', label: 'Резюме' },
    { href: '/projects', label: 'Проекты' },
    { href: '/blog', label: 'Блог' },
    { href: '/links', label: 'Ссылки' },
  ],
};

export const socialLinksByLocale: Record<Locale, SocialLink[]> = {
  en: [
    {
      label: 'GitHub',
      href: 'https://github.com/anton415',
      description: 'Code, repos, and experiments.',
      icon: 'GH',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/antonserdyuchenko/',
      description: 'Experience and professional updates.',
      icon: 'in',
    },
    {
      label: 'X',
      href: 'https://x.com/anton415226',
      description: 'Short thoughts and links.',
      icon: 'X',
    },
    {
      label: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/7037530/anton-serdyuchenko?tab=profile',
      description: 'Answers and developer Q&A.',
      icon: 'SO',
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/anton415984f',
      description: 'Visual design work and case studies.',
      icon: 'Be',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/antonserdyuchenko/',
      description: 'Behind-the-scenes and snapshots.',
      icon: 'IG',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/antonserdyuchenko',
      description: 'Direct contact and quick chats.',
      icon: 'TG',
    },
  ],
  ru: [
    {
      label: 'GitHub',
      href: 'https://github.com/anton415',
      description: 'Код, репозитории и эксперименты.',
      icon: 'GH',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/antonserdyuchenko/',
      description: 'Опыт и профессиональные обновления.',
      icon: 'in',
    },
    {
      label: 'X',
      href: 'https://x.com/anton415226',
      description: 'Короткие мысли и полезные ссылки.',
      icon: 'X',
    },
    {
      label: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/7037530/anton-serdyuchenko?tab=profile',
      description: 'Ответы и обсуждения для разработчиков.',
      icon: 'SO',
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/anton415984f',
      description: 'Дизайн-проекты и кейсы.',
      icon: 'Be',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/antonserdyuchenko/',
      description: 'Бэкстейдж и личные заметки.',
      icon: 'IG',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/antonserdyuchenko',
      description: 'Быстрая связь и общение.',
      icon: 'TG',
    },
  ],
};

export const getNavLinks = (locale: Locale): NavLink[] => navLinksByLocale[locale];

export const getSocialLinks = (locale: Locale): SocialLink[] =>
  socialLinksByLocale[locale];

export const navLinks = navLinksByLocale.en;
export const socialLinks = socialLinksByLocale.en;
