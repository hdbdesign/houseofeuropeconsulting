import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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

const ServicesPage = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>{t('meta.services.title')}</title>
        <meta name="description" content={t('meta.services.description')} />
      </Helmet>
      
      <div className="pt-20 md:pt-24"> {/* Padding to account for fixed header */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <ServicesGrid />
        </section>

        <TestimonialsSection />
      </div>
    </motion.div>
  );
};

export default ServicesPage;
