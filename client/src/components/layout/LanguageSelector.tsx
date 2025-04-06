import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { languages } from '@/config/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto' }
  };

  return (
    <div className="relative language-selector" ref={dropdownRef}>
      <motion.button
        className="flex items-center space-x-1 px-3 py-2 rounded-md bg-neutralLight hover:bg-gray-200 transition-colors"
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
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    language === lang.code 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-neutralLight hover:text-primary'
                  } transition-colors`}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  whileHover={{ backgroundColor: language === lang.code ? '#00377a' : '#f5f7fa' }}
                >
                  <span className="mr-2">{lang.flag}</span>
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
