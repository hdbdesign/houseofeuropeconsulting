export type NavItem = {
  path: string;
  labelKey: string;
  icon?: string;
};

export const navigationItems: NavItem[] = [
  {
    path: '/',
    labelKey: 'nav.home',
    icon: 'home'
  },
  {
    path: '/about',
    labelKey: 'nav.about',
    icon: 'info'
  },
  {
    path: '/services',
    labelKey: 'nav.services',
    icon: 'services'
  },
  {
    path: '/contact',
    labelKey: 'nav.contact',
    icon: 'contact'
  }
];

export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'pt',
    name: 'Português',
    flag: '🇵🇹'
  },
  {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'it',
    name: 'Italiano',
    flag: '🇮🇹'
  }
];
