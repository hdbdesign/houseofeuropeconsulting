import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from '../translations/en.json';
import ptTranslation from '../translations/pt.json';
import deTranslation from '../translations/de.json';
import frTranslation from '../translations/fr.json';
import itTranslation from '../translations/it.json';

const resources = {
  en: {
    translation: enTranslation
  },
  pt: {
    translation: ptTranslation
  },
  de: {
    translation: deTranslation
  },
  fr: {
    translation: frTranslation
  },
  it: {
    translation: itTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
