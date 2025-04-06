import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { navigationItems } from '@/config/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
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
      className={`fixed top-0 left-0 right-0 bg-white z-50 hidden md:block ${
        scrolled ? 'shadow-md' : ''
      } transition-shadow duration-300`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.a 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="bg-primary rounded-md p-1 mr-2">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-heading font-bold text-primary text-lg">House of Digital Business</span>
          </motion.a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav>
          <ul className="flex space-x-8 font-ui font-medium">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <motion.a 
                    className={`${
                      location === item.path ? 'text-primary' : 'hover:text-primary'
                    } transition-colors duration-300 cursor-pointer`}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {t(item.labelKey)}
                  </motion.a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Language Selector */}
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
