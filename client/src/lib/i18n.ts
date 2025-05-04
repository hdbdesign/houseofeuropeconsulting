import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import ptTranslation from '../translations/pt.json';
import deTranslation from '../translations/de.json';
import enTranslation from '../translations/en.json';
import ptPrivacy from '../translations/pt/privacy.json';
import dePrivacy from '../translations/de/privacy.json';
import enPrivacy from '../translations/en/privacy.json';
import ptImpressum from '../translations/pt/impressum.json';
import deImpressum from '../translations/de/impressum.json';
import enImpressum from '../translations/en/impressum.json';
import ptAGB from '../translations/pt/agb.json';
import deAGB from '../translations/de/agb.json';
import enAGB from '../translations/en/agb.json';

const resources = {
  de: {
    translation: deTranslation,
    privacy: dePrivacy,
    impressum: deImpressum,
    agb: deAGB
  },
  en: {
    translation: enTranslation,
    privacy: enPrivacy,
    impressum: enImpressum,
    agb: enAGB
  },
  pt: {
    translation: ptTranslation,
    privacy: ptPrivacy,
    impressum: ptImpressum,
    agb: ptAGB
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    lng: localStorage.getItem('i18nextLng') || 'de',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    supportedLngs: ['de', 'pt', 'en'],
    load: 'languageOnly',
    react: {
      useSuspense: false
    }
  });

// Função para forçar a atualização do idioma quando necessário
export const forceLanguageUpdate = (lang: string) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('i18nextLng', lang);
  window.location.reload();
};

export default i18n;
