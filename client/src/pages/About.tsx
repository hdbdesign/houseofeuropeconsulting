import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AboutContent from '@/components/about/AboutContent';
import TeamSection from '@/components/about/TeamSection';
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
        <section id="about" className="py-16 md:py-24 bg-neutralLight">
          <AboutContent />
          <TeamSection />
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
