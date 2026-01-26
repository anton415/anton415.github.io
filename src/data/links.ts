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
  { href: '/', label: 'Home' },
  { href: '/cv', label: 'CV' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/links', label: 'Links' },
];

export const socialLinks: SocialLink[] = [
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
];
