import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { navigationItems } from '@/config/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/hooks/useTheme';
import { brandLogos } from '@/config/imageUrls';

const Header = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
<<<<<<< HEAD
      className={`fixed top-0 left-0 right-0 bg-black z-50 hidden md:block h-16 overflow-hidden ${
        scrolled ? 'shadow-md' : ''
      } transition-shadow duration-300 dark:border-b dark:border-gray-800 custom-header`}
    >
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
=======
      className={`fixed top-0 left-0 right-0 bg-transparent z-50 hidden md:block ${
        scrolled ? 'shadow-md bg-black/90 backdrop-blur-sm' : ''
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-2 flex justify-between items-center h-16">
>>>>>>> b47d8a19b854b082d45c419a7634235b162f692f
        {/* Logo */}
        <Link href="/">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <img 
              src={brandLogos.withText} 
              alt="House of Digital Business" 
<<<<<<< HEAD
              style={{ height: "48px", width: "auto", objectFit: "contain" }} 
              className="w-auto m-0 p-0" 
=======
              style={{ height: "90px", width: "auto", transform: "scale(2.5)", filter: "brightness(0) saturate(100%) invert(86%) sepia(16%) saturate(5457%) hue-rotate(155deg) brightness(106%) contrast(107%)" }}
              className="w-auto" 
>>>>>>> b47d8a19b854b082d45c419a7634235b162f692f
            />
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav>
          <ul className="flex space-x-8 font-ui font-medium">
            {navigationItems.map((item) => (
              <li key={item.path}>
                {location === item.path ? (
                  <motion.div 
                    className="text-[#00FFFF] transition-colors duration-300 cursor-pointer"
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {t(item.labelKey)}
                  </motion.div>
                ) : (
                  <Link href={item.path}>
                    <motion.div 
                      className="text-white hover:text-[#00FFFF] transition-colors duration-300 cursor-pointer"
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {t(item.labelKey)}
                    </motion.div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Theme Toggle and Language Selector */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;