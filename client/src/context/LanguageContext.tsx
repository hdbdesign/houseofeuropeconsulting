import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  languageName: string;
};

type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  changeLanguage: () => {},
  languageName: 'Deutsch'
});

export const useLanguage = () => useContext(LanguageContext);

const languageNameMap: Record<string, string> = {
  pt: 'Português',
  de: 'Deutsch',
  en: 'English'
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'pt');
  const [languageName, setLanguageName] = useState(languageNameMap[i18n.language] || 'Português');

  useEffect(() => {
    // Sync with i18next language
    const currentLang = i18n.language.split('-')[0]; // Handle language codes like 'pt-BR'
    const validLang = languageNameMap[currentLang] ? currentLang : 'pt';
    setLanguage(validLang);
    setLanguageName(languageNameMap[validLang]);
  }, [i18n.language]);

  const changeLanguage = (lang: string) => {
    if (languageNameMap[lang]) {
      i18n.changeLanguage(lang);
      setLanguage(lang);
      setLanguageName(languageNameMap[lang]);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, languageName }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
