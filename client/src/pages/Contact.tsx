import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { Helmet } from 'react-helmet';
import { Check, ArrowRight } from 'lucide-react';
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

const ContactPage = () => {
  const { t } = useTranslation();
  
  const contactBenefits = [
    'contactPage.benefits.response',
    'contactPage.benefits.expert',
    'contactPage.benefits.tailored',
    'contactPage.benefits.followup'
  ];
  
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary/80 overflow-hidden py-16 md:py-24">
          {/* Background patterns */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -ml-20 -mb-20"></div>
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
                {t('contactPage.heroTitle')}
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {t('contactPage.heroSubtitle')}
              </p>
              
              <motion.div
                className="inline-flex items-center justify-center space-x-1 text-white/80 text-sm mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <span>{t('contactPage.heroScroll')}</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5 
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Main Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border border-gray-100 relative">
                  {/* Info Tag */}
                  <div className="absolute -top-6 left-10 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-sm font-medium">{t('contactPage.formTag')}</span>
                  </div>
                  
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mt-4 mb-6">
                    {t('contact.title')}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {t('contact.subtitle')}
                  </p>
                  
                  <div className="mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      {contactBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mr-2 mt-1 text-primary">
                            <Check className="h-4 w-4" />
                          </div>
                          <p className="text-sm text-gray-600">{t(benefit)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <ContactForm />
                </div>
              </motion.div>
              
              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full"
              >
                <ContactInfo />
                
                {/* Map or Image */}
                <motion.div 
                  className="mt-10 rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.142361177107!2d-73.98731492439376!3d40.74881294268858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1679929193988!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t('contactPage.faq.subtitle')}
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
                {t('contactPage.faq.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t('contactPage.faq.description')}
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {[1, 2, 3, 4].map((faq) => (
                <motion.div 
                  key={faq}
                  className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: faq * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex items-center justify-between gap-1.5 p-6 font-medium cursor-pointer list-none text-gray-900 dark:text-white">
                      <h3 className="font-heading font-semibold text-lg">
                        {t(`contactPage.faq.questions.${faq}.question`)}
                      </h3>
                      <span className="relative h-5 w-5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-1">
                      <p className="text-gray-600 dark:text-gray-300">
                        {t(`contactPage.faq.questions.${faq}.answer`)}
                      </p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Banner */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-full -mr-20 -mb-20"></div>
                <div className="absolute left-0 top-0 w-64 h-64 bg-white rounded-full -ml-20 -mt-20"></div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8 text-white text-center md:text-left">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                    {t('contactPage.cta.subtitle')}
                  </span>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4">
                    {t('contactPage.cta.title')}
                  </h2>
                  <p className="text-white/90 max-w-xl leading-relaxed">
                    {t('contactPage.cta.description')}
                  </p>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <Link href="/services">
                    <div className="inline-flex items-center whitespace-nowrap px-6 py-3 bg-white text-primary hover:bg-white/90 font-medium rounded-lg shadow-md transition-colors duration-300">
                      {t('contactPage.cta.primaryButton')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </Link>
                  <Link href="#contact">
                    <div className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors duration-300">
                      {t('contactPage.cta.secondaryButton')}
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ContactPage;
