import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { languages } from '@/config/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { forceLanguageUpdate } from '@/lib/i18n';

const LanguageSelector = () => {
  const { language, changeLanguage, languageName } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: string) => {
    forceLanguageUpdate(lang);
    changeLanguage(lang);
    setIsOpen(false);
    // Recarrega a página para garantir que todas as traduções sejam aplicadas corretamente
    window.location.reload();
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto' }
  };

  return (
    <div className="relative language-selector min-w-[60px]" ref={dropdownRef}>
      <motion.button
        className="flex items-center px-2 py-1 bg-[#021C26]/5 hover:bg-[#16313a] transition-colors text-xs w-full justify-between border border-[#16313a] font-bold uppercase"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{language.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 mt-1 w-full bg-[#010D12]/80 shadow z-50 border border-[#16313a]"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="py-1 flex flex-col">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`px-2 py-1 text-xs w-full text-center transition-colors uppercase
                    ${language === lang.code 
                      ? 'bg-[#25C9BA] text-white font-bold' 
                      : 'text-white hover:bg-[#16313a] hover:text-[#25C9BA]'}
                  `}
                  onClick={() => handleLanguageChange(lang.code)}
                  whileHover={{ backgroundColor: language === lang.code ? '#25C9BA' : '#16313a' }}
                >
                  {lang.code.toUpperCase()}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
