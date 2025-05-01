import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
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
    { path: '/about', label: 'nav.about' },
    { path: '/services', label: 'nav.services' },
    { path: '/contact', label: 'nav.contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#021C26] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-0.5' : 'py-1'
        }`}>
          <Link href="/">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.2)"
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="flex items-center -ml-8"
            >
              <img
                src="/images/logo/logo-primary.png"
                alt="House of Digital Business"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-32' : 'h-44'
                }`}
                style={{ 
                  maxHeight: "none"
                }}
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors px-4 ${
                  location === link.path
                    ? 'text-[#25C9BA]'
                    : 'text-white hover:text-[#25C9BA]'
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
            <div className="flex items-center pl-4">
              <LanguageSelector />
            </div>
          </nav>

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

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </motion.header>
  );
};