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
    <div className="relative language-selector" ref={dropdownRef}>
      <motion.button
        className="flex items-center space-x-1 px-3 py-2 rounded-md bg-neutralLight dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{languageName}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-48 bg-neutralLight rounded-md shadow-lg z-50"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`flex items-center space-x-2 px-4 py-2 text-xs w-full text-left transition-colors ${
                    language === lang.code 
                      ? 'bg-[#25C9BA] text-white font-medium' 
                      : 'text-white hover:bg-gray-700 hover:text-[#25C9BA]'
                  }`}
                  onClick={() => handleLanguageChange(lang.code)}
                  whileHover={{ backgroundColor: language === lang.code ? '#25C9BA' : '#374151' }}
                >
                  <span>{lang.name}</span>
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
