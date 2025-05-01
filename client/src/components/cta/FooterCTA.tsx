import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ButtonCTA from '../ui/ButtonCTA';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  const { t } = useTranslation();
  const title = t('cta.final.title');
  const [beforeEuropa, afterEuropa] = title.split('Europa');
  const subtitle = t('cta.final.subtitle');
  const [firstLine, secondLine] = subtitle.split(' e ');

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF601A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF601A]/5 rounded-full blur-3xl"></div>
        
        {/* Grid background with dots */}
        <div 
          className="absolute inset-0 z-2" 
          style={{
            backgroundImage: `radial-gradient(rgba(255,96,26,0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
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
              {beforeEuropa}<span className="text-[#FF601A]">Europa</span>{afterEuropa}
            </h2>
            <div className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto flex flex-col gap-2">
              <div>{firstLine}</div>
              <div>{secondLine}</div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href="/contact">
                <ButtonCTA className="bg-[#FF601A] text-white hover:bg-[#FF601A]/90">
                  {t('cta.final.button')} <ArrowRight className="ml-2 h-5 w-5 inline-block align-middle" />
                </ButtonCTA>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA; 