import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Hero from '@/components/home/Hero';
import Clients from '@/components/home/Clients';
import AboutContent from '@/components/about/AboutContent';
import ServicesGrid from '@/components/services/ServicesGrid';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import { Helmet } from 'react-helmet';

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

const HomePage = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>{t('meta.home.title')}</title>
        <meta name="description" content={t('meta.home.description')} />
      </Helmet>
      
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section id="home">
          <Hero />
          <Clients />
        </section>

        {/* About Section Preview */}
        <section id="about-preview" className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <AboutContent />
        </section>

        {/* Services Section Preview */}
        <section id="services-preview" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <ServicesGrid />
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </div>
    </motion.div>
  );
};

export default HomePage;
