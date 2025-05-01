import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{
    path: string;
    label: string;
  }>;
}

export const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const { t } = useTranslation();
  const [location] = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-80 z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-black shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <Link href="/" className="flex-shrink-0" onClick={onClose}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      filter: "brightness(1.2)",
                      rotate: [0, -5, 5, -5, 0]
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      rotate: {
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <img
                      src="/house-of-europe-logo.png"
                      alt="House of Europe Consulting"
                      className="h-32"
                      style={{ 
                        maxHeight: "none"
                      }}
                    />
                  </motion.div>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md text-white hover:text-[#25C9BA]"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={onClose}
                    className={`block px-4 py-2 rounded-md text-sm font-medium ${
                      location === link.path
                        ? 'bg-gray-900 text-[#25C9BA]'
                        : 'text-white hover:text-[#25C9BA]'
                    }`}
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 