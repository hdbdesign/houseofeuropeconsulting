import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { Helmet } from 'react-helmet';
import { Check, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'wouter';
import ButtonCTA from '@/components/ui/ButtonCTA';

const Contact = () => {
  const { t } = useTranslation();
  
  const contactBenefits = [
    'contactPage.benefits.response',
    'contactPage.benefits.expert',
    'contactPage.benefits.tailored',
    'contactPage.benefits.followup'
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const faqs = [
    {
      question: 'contact.faq.q1',
      answer: 'contact.faq.a1',
    },
    {
      question: 'contact.faq.q2',
      answer: 'contact.faq.a2',
    },
    {
      question: 'contact.faq.q3',
      answer: 'contact.faq.a3',
    },
    {
      question: 'contact.faq.q4',
      answer: 'contact.faq.a4',
    },
    {
      question: 'contact.faq.q5',
      answer: 'contact.faq.a5',
    },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{t('contact.metaTitle')} | House of Digital Business</title>
        <meta name="description" content={t('contact.metaDescription')} />
      </Helmet>
      
      <div className="pt-16 md:pt-20"> 
        <section className="relative bg-black pt-28 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#00FFFF]/10 to-transparent opacity-30"></div>
            
            {/* Background effect */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
            </div>
            
            {/* Glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#00FFFF]/20 blur-[120px] rounded-full"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {t('contact.hero.title')}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-white/80 mb-8 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('contact.hero.subtitle')}
              </motion.p>
            </div>
          </div>
        </section>
        
        <section className="bg-black py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Contact Form */}
              <motion.div 
                className="w-full bg-black/30 border border-[#00FFFF]/20 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-3">{t('contact.form.title')}</h2>
                  <p className="text-white/70">{t('contact.form.subtitle')}</p>
                </div>
                <ContactForm />
              </motion.div>
              
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ContactInfo />
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="bg-black py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white mb-4">{t('contact.faq.title')}</h2>
                <p className="text-white/70">{t('contact.faq.subtitle')}</p>
            </motion.div>
            
                <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="border border-[#00FFFF]/20 bg-black/30 rounded-lg overflow-hidden"
                  >
                    <div className="overflow-hidden">
                      <button
                        className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
                        onClick={() => {}}
                        aria-expanded={false}
                      >
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-8 h-8 mr-4 rounded-full bg-[#00FFFF]/10 text-[#00FFFF] font-medium">
                            {index + 1}
                          </span>
                          <h3 className="text-lg font-medium text-white">{t(faq.question)}</h3>
                        </div>
                        
                        <div className="flex-shrink-0 ml-4">
                          <svg className="w-5 h-5 text-[#00FFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        </div>
                      </button>
                      
                      <div className="p-5 pt-0 pl-[4.5rem]">
                        <p className="text-gray-300">{t(faq.answer)}</p>
                      </div>
                    </div>
                </motion.div>
              ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <motion.div 
              className="backdrop-blur-sm bg-black/30 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-[#00FFFF]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Effects */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#00FFFF]/10 text-[#00FFFF] text-sm font-medium mb-4">
                    {t('contactPage.cta.subtitle')}
                  </span>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4 text-white">
                    {t('contactPage.cta.title')}
                  </h2>
                  <p className="text-gray-300 max-w-lg">
                    {t('contactPage.cta.description')}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <ButtonCTA className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black">
                      {t('contactPage.cta.primaryButton')}
                    </ButtonCTA>
                  </Link>
                  <Link href="#contact">
                    <ButtonCTA secondary className="border border-[#00FFFF]/30 hover:border-[#00FFFF] text-[#00FFFF]">
                      {t('contactPage.cta.secondaryButton')}
                    </ButtonCTA>
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

export default Contact;
