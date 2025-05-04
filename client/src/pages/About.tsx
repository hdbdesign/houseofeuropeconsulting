import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AboutContent from '@/components/about/AboutContent';
import { Helmet } from 'react-helmet';
import PageHero from '@/components/ui/PageHero';
import AboutCTA from '@/components/ui/AboutCTA';

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
      
      <PageHero
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
        description={t('about.hero.description')}
        primaryCTA={{
          text: t('about.hero.primaryCTA'),
          link: '/services'
        }}
        secondaryCTA={{
          text: t('about.hero.secondaryCTA'),
          link: '/contact'
        }}
        stats={{
          experience: {
            number: t('about.stats.experience.number'),
            text: t('about.stats.experience.text')
          },
          deals: {
            number: t('about.stats.deals.number'),
            text: t('about.stats.deals.text')
          },
          countries: {
            number: t('about.stats.countries.number'),
            text: t('about.stats.countries.text')
          },
          satisfaction: {
            number: t('about.stats.satisfaction.number'),
            text: t('about.stats.satisfaction.text')
          }
        }}
      />

      {/* Main About Content */}
      <section id="about" className="py-16 md:py-24 bg-black">
        <AboutContent />
      </section>

      <AboutCTA />
    </motion.div>
  );
};

export default AboutPage;
