import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Home, Info, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { navigationItems } from '@/config/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { forceLanguageUpdate } from '@/lib/i18n';

const MobileNav = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  const { language } = useLanguage();
  
  const languages = [
    { code: 'pt', name: 'PT', flag: '🇧🇷' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'en', name: 'EN', flag: '🇬🇧' }
  ];

  const handleLanguageChange = (lang: string) => {
    forceLanguageUpdate(lang);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50 md:hidden">
      <div className="flex justify-around items-center">
        {navigationItems.map((item) => {
          const isActive = location === item.path;
          let Icon;
          switch (item.path) {
            case '/':
              Icon = Home;
              break;
            case '/about':
              Icon = Info;
              break;
            case '/services':
              Icon = Briefcase;
              break;
            case '/contact':
              Icon = Mail;
              break;
            default:
              Icon = Home;
          }

          return (
            <Link key={item.path} href={item.path}>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center p-2 ${
                  isActive ? 'text-[#00FFFF]' : 'text-gray-400'
                }`}
              >
                <Icon className="w-4 h-4 mb-1" />
                <span className="text-[8px] leading-tight font-medium truncate text-center max-w-[45px] mx-auto">
                  {t(item.labelKey)}
                </span>
              </motion.div>
            </Link>
          );
        })}
        
        <div className="relative group">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-2"
          >
            <span className="text-[8px] leading-tight font-medium text-gray-400">
              {language.toUpperCase()}
            </span>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black border border-gray-800 rounded-lg py-1 hidden group-hover:block">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-800 ${
                    language === lang.code ? 'text-[#00FFFF]' : 'text-gray-400'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;