import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const AGBPage = () => {
  const { t } = useTranslation('agb');
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionKeys = [
    'scope',
    'services',
    'remuneration',
    'conclusion',
    'payment',
    'duration',
    'liability',
    'privacy',
    'final',
  ];

  const sections = sectionKeys.map((key, idx) => ({
    id: key,
    title: t(`sections.${key}.title`),
    content: t(`sections.${key}.content`),
    bgColor: idx % 2 === 0 ? 'bg-black' : 'bg-gray-900',
  }));

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageDescription')} />
      </Helmet>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-b from-[#021C26] to-black"
      >
        {/* Gradientes de fundo como overlay */}
        <div className="absolute inset-0 z-1 bg-[#021C26]/80">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#25C9BA]/20 rounded-full blur-[60px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#25C9BA]/20 rounded-full blur-[60px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#25C9BA]/10 rounded-full blur-[90px]"></div>
        </div>
        {/* Grid decorativo */}
        <div 
          className="absolute inset-0 z-2" 
          style={{
            backgroundImage: `radial-gradient(rgba(37,201,186,0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        <div className="container mx-auto px-4 py-56 md:py-80 relative">
          <div className="max-w-4xl mx-auto text-center mt-16 md:mt-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {t('pageTitle')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto"
            >
              {t('pageDescription')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <button
                onClick={() => scrollToSection('scope')}
                className="bg-[#25C9BA] hover:bg-[#25C9BA]/90 text-black font-medium px-6 py-3 rounded-lg transition-colors"
              >
                {t('startReading', { defaultValue: 'Comece a ler' })}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${section.bgColor} rounded-lg p-8 mb-8${activeSection === section.id ? ' ring-2 ring-[#25C9BA]' : ''}`}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <div className="prose prose-invert max-w-none text-[10px] md:text-xs text-justify whitespace-pre-line">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#25C9BA] text-black p-3 rounded-full shadow-lg hover:bg-[#25C9BA]/90 transition-colors"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AGBPage; 