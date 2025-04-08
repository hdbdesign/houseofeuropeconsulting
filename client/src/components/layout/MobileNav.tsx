import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Home, Info, Briefcase, Image as ImageIcon, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { navigationItems } from '@/config/navigation';

const MobileNav = () => {
  const { t } = useTranslation();
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50 md:hidden">
      <div className="grid grid-cols-5 gap-1 py-2 px-4">
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
            case '/portfolio':
              Icon = ImageIcon;
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
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{t(item.labelKey)}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;