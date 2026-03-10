import { profile } from './profile';

export const site = {
  name: profile.name,
  title: `${profile.name} · ${profile.headline}`,
  description: 'Сайт о разработке, проектах и заметках Антона Сердюченко.',
  url: 'https://serdyuchenko.com',
  socialImage: '/og-default.png',
};
