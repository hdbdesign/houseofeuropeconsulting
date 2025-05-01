import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import ptTranslation from '../translations/pt.json';
import deTranslation from '../translations/de.json';
import enTranslation from '../translations/en.json';

const resources = {
  de: {
    translation: deTranslation
  },
  en: {
    translation: enTranslation
  },
  pt: {
    translation: ptTranslation
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
    supportedLngs: ['pt', 'de', 'en'],
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
