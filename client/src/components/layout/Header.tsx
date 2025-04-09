import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../theme/ThemeToggle';
import { LanguageSelector } from '../i18n/LanguageSelector';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/services', label: 'nav.services' },
    { path: '/portfolio', label: 'nav.portfolio' },
    { path: '/about', label: 'nav.about' },
    { path: '/contact', label: 'nav.contact' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 transition-all duration-300 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.2)",
                textShadow: "0 0 8px rgb(0,255,255)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              {/* Desktop Logo */}
              <img
                src="/logo-hdb.png"
                alt="House of Digital Business"
                className="hidden md:block h-24 md:h-32"
                style={{ 
                  maxHeight: "none", 
                  transform: "scale(2.2)",
                  marginLeft: "20px"
                }}
              />
              
              {/* Mobile Logo (Symbol only) */}
              <img
                src="/Logo-13.png"
                alt="House of Digital Business"
                className="md:hidden h-14"
                style={{ 
                  maxHeight: "none",
                  marginLeft: "5px"
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  location === link.path
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSelector />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-md text-white hover:bg-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </motion.header>
  );
};