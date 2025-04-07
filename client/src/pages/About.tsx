import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AboutContent from '@/components/about/AboutContent';
import TeamSection from '@/components/about/TeamSection';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const AboutPage = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>{t('meta.about.title')}</title>
        <meta name="description" content={t('meta.about.description')} />
      </Helmet>
      
      <div className="pt-20 md:pt-24"> {/* Padding to account for fixed header */}
        {/* Hero Section for About Page */}
        <section className="relative bg-gradient-to-br from-primary/90 to-primary overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.h1 
              className="font-heading font-bold text-4xl md:text-6xl text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('about.heroTitle')}
            </motion.h1>
            
            <motion.p 
              className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('about.heroSubtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <div className="inline-block bg-white text-primary hover:bg-white/90 font-medium rounded-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 shadow-lg">
                  {t('about.heroButton')} <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="block text-5xl font-bold text-primary mb-2">15+</span>
                <span className="text-gray-600">{t('about.stats.years')}</span>
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="block text-5xl font-bold text-primary mb-2">500+</span>
                <span className="text-gray-600">{t('about.stats.clients')}</span>
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="block text-5xl font-bold text-primary mb-2">50+</span>
                <span className="text-gray-600">{t('about.stats.countries')}</span>
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="block text-5xl font-bold text-primary mb-2">98%</span>
                <span className="text-gray-600">{t('about.stats.satisfaction')}</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <section id="about" className="py-16 md:py-24 bg-neutralLight">
          <AboutContent />
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                {t('about.timelineTitle')}
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                {t('about.timelineSubtitle')}
              </p>
            </motion.div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {/* Timeline Items */}
              {[2008, 2012, 2016, 2020, 2023].map((year, index) => (
                <motion.div 
                  key={year}
                  className={`relative z-10 flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="hidden md:block w-1/2"></div>
                  
                  <div className="z-20 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
                    {year}
                  </div>
                  
                  <div className={`bg-white shadow-lg rounded-lg p-6 ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                    <h3 className="font-heading font-bold text-xl mb-2 text-primary">
                      {t(`about.timeline.${year}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`about.timeline.${year}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Mission and Values Banner */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="font-heading font-bold text-3xl md:text-4xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('about.missionBanner.title')}
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-12 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('about.missionBanner.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/services">
                  <div className="inline-block bg-white text-primary hover:bg-white/90 font-medium rounded-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 shadow-lg">
                    {t('about.missionBanner.button')}
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
