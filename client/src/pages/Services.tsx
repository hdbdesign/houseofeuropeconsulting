import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ServicesGrid from '@/components/services/ServicesGrid';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Zap, Shield } from 'lucide-react';

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

const features = [
  {
    icon: <CheckCircle2 className="h-6 w-6 text-emerald-500" />,
    title: 'servicesPage.features.quality.title',
    description: 'servicesPage.features.quality.description'
  },
  {
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    title: 'servicesPage.features.fast.title',
    description: 'servicesPage.features.fast.description'
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-500" />,
    title: 'servicesPage.features.reliable.title',
    description: 'servicesPage.features.reliable.description'
  }
];

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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cyan-500 to-blue-600 overflow-hidden py-20 md:py-32">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
            <div className="absolute w-96 h-96 rounded-full bg-white/20 -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 rounded-full bg-white/20 -bottom-20 -right-20"></div>
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 10%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 10%)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="font-heading font-bold text-4xl md:text-6xl text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {t('servicesPage.heroTitle')}
              </motion.h1>
              
              <motion.p 
                className="text-white/90 text-lg md:text-xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('servicesPage.heroSubtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/contact">
                  <div className="inline-block bg-white text-primary hover:bg-white/90 font-medium rounded-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 shadow-lg">
                    {t('servicesPage.heroButton')} <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-xl -mt-20 relative z-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 bg-gray-50 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {t(feature.title)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(feature.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <ServicesGrid />
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t('servicesPage.process.subtitle')}
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                {t('servicesPage.process.title')}
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                {t('servicesPage.process.description')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((step) => (
                <motion.div 
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step * 0.1 }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {step}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-md pt-10 h-full border-t-4 border-primary">
                    <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                      {t(`servicesPage.process.steps.${step}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`servicesPage.process.steps.${step}.description`)}
                    </p>
                  </div>
                  
                  {/* Connector (not for the last item on mobile) */}
                  {step < 4 && (
                    <>
                      <div className="block md:hidden h-8 w-1 bg-primary/30 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"></div>
                      <div className="hidden md:block h-1 w-8 bg-primary/30 absolute top-1/2 right-0 transform translate-x-full"></div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                {t('servicesPage.faq.title')}
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                {t('servicesPage.faq.subtitle')}
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {[1, 2, 3, 4, 5].map((faq) => (
                <motion.div 
                  key={faq}
                  className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: faq * 0.05 }}
                >
                  <details className="group">
                    <summary className="flex items-center justify-between gap-1.5 p-6 font-medium cursor-pointer list-none text-gray-900">
                      <h3 className="font-heading font-semibold text-lg">
                        {t(`servicesPage.faq.questions.${faq}.question`)}
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
                      <p className="text-gray-600">
                        {t(`servicesPage.faq.questions.${faq}.answer`)}
                      </p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-600 mb-4">
                {t('servicesPage.faq.moreQuestions')}
              </p>
              <Link href="/contact">
                <div className="inline-block bg-primary text-white hover:bg-primary/90 font-medium rounded-lg px-6 py-3 transition-colors duration-300">
                  {t('servicesPage.faq.contactButton')}
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500 to-cyan-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                {t('servicesPage.cta.title')}
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                {t('servicesPage.cta.description')}
              </p>
              <Link href="/contact">
                <div className="inline-block bg-white text-primary hover:bg-white/90 font-medium rounded-lg px-8 py-4 transform transition-all duration-300 hover:scale-105 shadow-lg">
                  {t('servicesPage.cta.button')}
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
