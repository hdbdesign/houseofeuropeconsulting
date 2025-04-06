import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
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

const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>{t('meta.contact.title')}</title>
        <meta name="description" content={t('meta.contact.description')} />
      </Helmet>
      
      <div className="pt-20 md:pt-24"> {/* Padding to account for fixed header */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('contact.title')}
              </motion.h2>
              <motion.p 
                className="max-w-2xl mx-auto text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('contact.subtitle')}
              </motion.p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2">
                <ContactForm />
              </div>
              
              <div className="w-full lg:w-1/2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ContactPage;
