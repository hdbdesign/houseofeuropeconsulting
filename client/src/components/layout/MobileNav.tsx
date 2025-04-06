import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Home, Info, Briefcase, Mail, Globe } from 'lucide-react';
import { navigationItems } from '@/config/navigation';
import { languages } from '@/config/navigation';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const MobileNav = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  const { language, changeLanguage } = useLanguage();

  // Icons for the mobile navigation
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'home':
        return <Home size={20} />;
      case 'info':
        return <Info size={20} />;
      case 'services':
        return <Briefcase size={20} />;
      case 'contact':
        return <Mail size={20} />;
      default:
        return <Home size={20} />;
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl z-50 md:hidden">
      <div className="flex justify-around py-3 px-2">
        {navigationItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <motion.a 
              className={`flex flex-col items-center ${
                location === item.path ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {getIcon(item.icon || 'home')}
              <span className="text-xs mt-1">{t(item.labelKey)}</span>
            </motion.a>
          </Link>
        ))}
        
        <Popover>
          <PopoverTrigger asChild>
            <motion.button 
              className="flex flex-col items-center text-gray-600 hover:text-primary focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={20} />
              <span className="text-xs mt-1">{language.toUpperCase()}</span>
            </motion.button>
          </PopoverTrigger>
          <PopoverContent className="w-36 p-0">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left block px-4 py-2 text-sm ${
                    language === lang.code 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default MobileNav;
