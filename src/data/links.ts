export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/cv', label: 'CV' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/links', label: 'Links' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/anton415' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antonserdyuchenko/' },
  { label: 'X', href: 'https://x.com/anton415226' },
  {
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/7037530/anton-serdyuchenko?tab=profile',
  },
  { label: 'Behance', href: 'https://www.behance.net/anton415984f' },
  { label: 'Instagram', href: 'https://www.instagram.com/antonserdyuchenko/' },
  { label: 'Telegram', href: 'https://t.me/antonserdyuchenko' },
];
