import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { brandLogos } from '@/config/imageUrls';
import InstagramIcon from '@/assets/images/logo/instagram.svg';
import FacebookIcon from '@/assets/images/logo/facebook.svg';
import XIcon from '@/assets/images/logo/x.svg';
import LinkedInIcon from '@/assets/images/logo/linkedin.svg';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const containerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer className="bg-[#021C26] text-white py-16">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:pl-14 lg:pr-[56px]">
        <motion.div 
          className="grid grid-cols-12 gap-x-4 md:gap-x-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerAnimation}
        >
          {/* Company Information */}
          <motion.div variants={itemAnimation} className="col-span-12 lg:col-span-4 xl:col-start-2 xl:col-span-3">
            <div className="flex flex-col h-full">
              <div className="flex items-center -mt-24 -ml-4 mb-6">
                <img
                  src="/images/logo/logo-primary.png"
                  alt="House of Digital Business"
                  className="h-48 w-auto"
                />
              </div>
              <div className="mt-auto">
                <p className="text-gray-400 text-xs mb-4">
                  {t('footer.tagline')}
                </p>
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/people/House-of-Digital-Business/100076303023574/" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      src={FacebookIcon} 
                      alt="Facebook" 
                      className="h-6 w-6 text-[#FB923C] [&>path]:fill-[#FB923C] hover:[&>path]:fill-[#FB923C]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  </a>
                  <a href="https://x.com/HouseDgBusiness" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      src={XIcon} 
                      alt="X (Twitter)" 
                      className="h-6 w-6 text-[#FB923C] [&>path]:fill-[#FB923C] hover:[&>path]:fill-[#FB923C]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/houseofeuropeconsulting/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img 
                      src={InstagramIcon}
                      alt="Instagram"
                      className="h-6 w-6 text-[#FB923C] [&>path]:fill-[#FB923C] hover:[&>path]:fill-[#FB923C]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/house-of-digital-business" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      src={LinkedInIcon} 
                      alt="LinkedIn" 
                      className="h-6 w-6 text-[#FB923C] [&>path]:fill-[#FB923C] hover:[&>path]:fill-[#FB923C]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemAnimation} className="col-span-12 lg:col-span-2 xl:col-span-2 xl:col-start-6">
            <h3 className="font-heading text-[#25C9BA] text-sm mb-4">{t('footer.navigation')}</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">{t('nav.home')}</Link>
              <Link href="/services/expansion" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">Expansão Internacional (GlobalAccess)</Link>
              <Link href="/services/digital" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">Transformação Digital</Link>
              <Link href="/services/innovation" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">Inovação e Tecnologia</Link>
              <Link href="/services/marketing" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">Marketing Digital</Link>
              <Link href="/services/consulting" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">Consultoria Empresarial</Link>
              <Link href="/services/talent" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">Gestão de Talentos</Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">{t('nav.contact')}</Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemAnimation} className="col-span-12 lg:col-span-2 xl:col-span-2 xl:col-start-8 -ml-2">
            <h3 className="font-heading text-[#25C9BA] text-sm mb-4">{t('footer.contactUs')}</h3>
            <div className="flex flex-col space-y-3">
              <p className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">House of Europe Consulting</p>
              <p className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">Köln, NRW - Alemanha</p>
              <a href="mailto:info@houseofeuropeconsulting.de" className="text-gray-400 hover:text-[#25C9BA] transition-all duration-300 text-xs">info@houseofeuropeconsulting.de</a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemAnimation} className="col-span-12 lg:col-span-2 xl:col-span-2 xl:col-start-10">
            <h3 className="font-heading text-[#25C9BA] text-sm mb-4">{t('footer.subscribe')}</h3>
            <p className="text-gray-400 mb-4 text-xs">
              {t('footer.subscribeText')}
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')} 
                className="w-full px-3 py-2 bg-gray-900/40 rounded-md border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#25C9BA] focus:border-transparent text-gray-300 text-xs"
              />
              <button 
                type="submit" 
                className="w-full px-3 py-2 bg-[#25C9BA] hover:bg-[#25C9BA]/90 text-black font-medium rounded-md transition-all duration-300 text-xs"
              >
                {t('footer.subscribeButton')}
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800/30 mt-12 pt-6 xl:max-w-[80%] xl:mx-auto"
          variants={itemAnimation}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-[#25C9BA] text-xs transition-all duration-300">{t('footer.legal.privacy')}</Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#25C9BA] text-xs transition-all duration-300">{t('footer.legal.terms')}</Link>
              <Link href="/cookies" className="text-gray-500 hover:text-[#25C9BA] text-xs transition-all duration-300">{t('footer.legal.cookies')}</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;