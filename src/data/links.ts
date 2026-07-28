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
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#current-work', label: 'Current Work' },
  { href: '/#contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/anton415',
    description: 'Current code and engineering projects.',
    icon: 'GH',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antonserdyuchenko/',
    description: 'Professional experience and background.',
    icon: 'in',
  },
];
