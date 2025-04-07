import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ButtonCTA from '../ui/ButtonCTA';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#00FFFF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#00FFFF]/20 rounded-full blur-3xl"></div>
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
          <motion.h2 
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('cta.title')}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('cta.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact">
              <ButtonCTA className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black font-medium px-8 py-4">
                {t('cta.button')} <ArrowRight className="ml-2 h-5 w-5 inline" />
              </ButtonCTA>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Neon line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00FFFF]/30"></div>
    </section>
  );
};

export default FooterCTA; 