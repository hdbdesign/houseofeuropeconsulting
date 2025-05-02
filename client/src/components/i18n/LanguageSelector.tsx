import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { forceLanguageUpdate } from '@/lib/i18n';

const languages = [
  { code: 'pt', name: 'Português' },
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' }
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lng: string) => {
    forceLanguageUpdate(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative min-w-[120px]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-[#25C9BA] bg-[#021C26] w-full flex items-center justify-between"
        aria-label="Select language"
      >
        <span>{languages.find(lang => lang.code === i18n.language)?.name || 'Português'}</span>
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-[#021C26] ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors duration-150
                  ${i18n.language === lang.code
                    ? 'bg-[#25C9BA] text-white font-bold'
                    : 'text-white hover:bg-[#16313a]'}
                `}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}; 