import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Home, Info, Briefcase, Image, Mail } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import LanguageSelector from './LanguageSelector';
import { brandLogos } from '@/config/imageUrls';

const MobileNav = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navigationItems = [
    { path: '/', labelKey: 'nav.home', icon: <Home className="w-5 h-5" /> },
    { path: '/about', labelKey: 'nav.about', icon: <Info className="w-5 h-5" /> },
    { path: '/services', labelKey: 'nav.services', icon: <Briefcase className="w-5 h-5" /> },
    { path: '/portfolio', labelKey: 'nav.portfolio', icon: <Image className="w-5 h-5" /> },
    { path: '/contact', labelKey: 'nav.contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 w-full bg-black z-50 md:hidden py-3 px-4 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <img 
                src={brandLogos.primary} 
                alt="Logo" 
                style={{ height: "55px", width: "auto" }} 
                className="w-auto brightness-0 invert" 
              />
            </div>
          </Link>

          <button 
            onClick={() => setIsOpen(true)} 
            className="p-2 text-[#00FFFF] focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 md:hidden flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <img 
                src={brandLogos.primary} 
                alt="House of Digital Business" 
                style={{ height: "55px", width: "auto" }} 
                className="w-auto brightness-0 invert" 
              />
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-[#00FFFF] focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6">
              <nav>
                <ul className="space-y-6">
                  {navigationItems.map((item) => (
                    <motion.li 
                      key={item.path}
                      variants={itemVariants}
                      className="border-b border-gray-800 pb-4"
                    >
                      <Link href={item.path}>
                        <a 
                          className={`flex items-center text-xl ${
                            location === item.path ? 'text-[#00FFFF] font-medium' : 'text-gray-300'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="mr-3 text-[#00FFFF]">{item.icon}</span>
                          {t(item.labelKey)}
                        </a>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="p-4 border-t border-gray-800 flex justify-between items-center">
              <button
                onClick={toggleTheme}
                className="p-2 bg-gray-800 rounded-full focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-[#00FFFF]" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-300" />
                )}
              </button>

              <LanguageSelector />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;