export type NavItem = {
  path: string;
  labelKey: string;
};

export const navigationItems: NavItem[] = [
  {
    path: '/',
    labelKey: 'nav.home'
  },
  {
    path: '/about',
    labelKey: 'nav.about'
  },
  {
    path: '/services',
    labelKey: 'nav.services'
  },
  {
    path: '/contact',
    labelKey: 'nav.contact'
  }
];

export type Language = {
  code: string;
  name: string;
};

export const languages: Language[] = [
  {
    code: 'pt',
    name: 'Português'
  },
  {
    code: 'de',
    name: 'Deutsch'
  },
  {
    code: 'en',
    name: 'English'
  }
];
