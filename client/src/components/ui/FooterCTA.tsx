import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import ButtonCTA from './ButtonCTA';

const FooterCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F50057] to-[#0C1E3C] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#00FFFF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#F50057]/30 rounded-full blur-3xl"></div>
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
              {t('cta.title') || 'Pronto para transformar seu negócio digital?'}
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              {t('cta.description') || 'Junte-se a nós para criar soluções digitais inovadoras e impulsionar seu crescimento com estratégias personalizadas para o mundo digital.'}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href="/contact">
                <ButtonCTA>
                  {t('cta.button') || 'Iniciar Projeto'} <ArrowRight className="ml-2 h-5 w-5 inline-block align-middle" />
                </ButtonCTA>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Neon line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00FFFF]/30"></div>
    </section>
  );
};

export default FooterCTA; 