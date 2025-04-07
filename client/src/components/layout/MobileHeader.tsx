import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/config/navigation';
import { brandLogos } from '@/config/imageUrls';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import LanguageSelector from './LanguageSelector';

const MobileHeader = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black z-50 md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <Link href="/">
            <div className="flex items-center">
              <img
                src={brandLogos.small}
                alt="House of Digital Business"
                className="h-12"
              />
              <span className="ml-2 text-[#00E5E5] font-bold text-lg">HDB</span>
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-full md:w-80 bg-black border-l border-gray-800 z-50 shadow-xl"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <img 
                src={brandLogos.small} 
                alt="Logo" 
                className="h-12" 
              />
              <button
                onClick={closeMenu}
                className="p-2 text-white focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <motion.li
                    key={item.path}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link href={item.path}>
                      <a
                        className={`block py-2 text-lg ${
                          location === item.path
                            ? 'text-[#00E5E5] font-medium'
                            : 'text-white hover:text-[#00E5E5]'
                        }`}
                        onClick={closeMenu}
                      >
                        {t(item.labelKey)}
                      </a>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 flex justify-between items-center">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader; 