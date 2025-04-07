import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ServicesGrid from '@/components/services/ServicesGrid';
import TestimonialsSlider from '@/components/testimonials/TestimonialsSlider';
import FooterCTA from '@/components/cta/FooterCTA';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Zap, Shield } from 'lucide-react';
import ButtonCTA from '@/components/ui/ButtonCTA';

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
    icon: <CheckCircle2 className="h-6 w-6 text-[#00FFFF]" />,
    title: 'servicesPage.features.quality.title',
    description: 'servicesPage.features.quality.description'
  },
  {
    icon: <Zap className="h-6 w-6 text-[#00FFFF]" />,
    title: 'servicesPage.features.fast.title',
    description: 'servicesPage.features.fast.description'
  },
  {
    icon: <Shield className="h-6 w-6 text-[#00FFFF]" />,
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
        <section className="relative bg-black overflow-hidden py-20 md:py-32">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Grid background */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
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
                className="text-gray-300 text-lg md:text-xl mb-8"
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
                  <ButtonCTA className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black font-medium px-8 py-4">
                    {t('servicesPage.heroButton')} <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </ButtonCTA>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom line effect */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00FFFF]/30"></div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="bg-gray-900/70 backdrop-blur-lg border border-[#00FFFF]/20 rounded-xl shadow-xl -mt-20 relative z-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 bg-black p-3 rounded-full border border-[#00FFFF]/30">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-[#00FFFF]">
                    {t(feature.title)}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t(feature.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Services Section */}
        <section id="services" className="py-16 md:py-24 bg-black">
          <ServicesGrid />
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-black overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                {t('servicesPage.process.title')}
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">
                {t('servicesPage.process.description')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, color: "bg-cyan-400", border: "border-cyan-400", connector: "bg-cyan-400/40", text: "text-cyan-400" },
                { step: 2, color: "bg-purple-400", border: "border-purple-400", connector: "bg-purple-400/40", text: "text-purple-400" },
                { step: 3, color: "bg-emerald-400", border: "border-emerald-400", connector: "bg-emerald-400/40", text: "text-emerald-400" },
                { step: 4, color: "bg-amber-400", border: "border-amber-400", connector: "bg-amber-400/40", text: "text-amber-400" }
              ].map(({ step, color, border, connector, text }) => (
                <motion.div 
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step * 0.1 }}
                >
                  {/* Step number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full ${color} text-black flex items-center justify-center font-bold text-xl shadow-lg z-10`}>
                    {step}
                  </div>
                  
                  {/* Content */}
                  <div className="backdrop-blur-sm bg-black/30 rounded-lg p-6 shadow-lg pt-10 h-full border border-[#00FFFF]/20 group-hover:border-[#00FFFF]/50 transition-all">
                    <h3 className={`font-heading font-semibold text-xl mb-3 ${text}`}>
                      {t(`servicesPage.process.steps.${step}.title`)}
                    </h3>
                    <p className="text-gray-300">
                      {t(`servicesPage.process.steps.${step}.description`)}
                    </p>
                  </div>
                  
                  {/* Connector (not for the last item on mobile) */}
                  {step < 4 && (
                    <>
                      <div className={`block md:hidden h-8 w-1 ${connector} absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full`}></div>
                      <div className={`hidden md:block h-1 w-8 ${connector} absolute top-1/2 right-0 transform translate-x-full`}></div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                {t('servicesPage.faq.title')}
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">
                {t('servicesPage.faq.subtitle')}
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((n) => (
                  <motion.div 
                    key={n}
                    className="bg-gray-900/70 backdrop-blur-sm border border-[#00FFFF]/10 hover:border-[#00FFFF]/30 p-6 rounded-lg shadow-sm transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: n * 0.1 }}
                  >
                    <h3 className="font-heading font-semibold text-xl mb-3 text-[#00FFFF]">
                      {t(`servicesPage.faq.questions.${n}.question`)}
                    </h3>
                    <p className="text-gray-300">
                      {t(`servicesPage.faq.questions.${n}.answer`)}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="text-center mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-gray-300 mb-4">
                  {t('servicesPage.faq.moreQuestions')}
                </p>
                <Link href="/contact">
                  <ButtonCTA secondary className="border border-[#00FFFF]/30 hover:border-[#00FFFF] text-[#00FFFF]">
                    {t('servicesPage.faq.contactButton')}
                  </ButtonCTA>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSlider />
        
        {/* Footer CTA */}
        <FooterCTA />
      </div>
    </motion.div>
  );
};

export default ServicesPage; 