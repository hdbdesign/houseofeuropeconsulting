import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  languageName: string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

const languageNameMap: Record<string, string> = {
  en: 'English',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [languageName, setLanguageName] = useState(languageNameMap[i18n.language] || 'English');

  useEffect(() => {
    // Sync with i18next language
    const currentLang = i18n.language.split('-')[0]; // Handle language codes like 'en-US'
    setLanguage(currentLang);
    setLanguageName(languageNameMap[currentLang] || languageNameMap.en);
  }, [i18n.language]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setLanguageName(languageNameMap[lang] || languageNameMap.en);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, languageName }}>
      {children}
    </LanguageContext.Provider>
  );
};
