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

export const navLinks: NavLink[] = [
  { href: '/', label: 'Резюме' },
  { href: '/links', label: 'Ссылки' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/anton415',
    description: 'Код, репозитории и эксперименты.',
    icon: 'GH',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antonserdyuchenko/',
    description: 'Опыт работы и профессиональные обновления.',
    icon: 'in',
  },
  {
    label: 'X',
    href: 'https://x.com/anton415226',
    description: 'Короткие мысли и ссылки.',
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
    description: 'Визуальные проекты и кейсы.',
    icon: 'Be',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/antonserdyuchenko/',
    description: 'Бэкстейдж и визуальные заметки.',
    icon: 'IG',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/antonserdyuchenko',
    description: 'Быстрая связь и короткие разговоры.',
    icon: 'TG',
  },
];
