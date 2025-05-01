import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaSalesforce, FaSpotify, FaSlack, FaTwitter } from 'react-icons/fa';
import { useRef } from 'react';

const Clients = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);

  // Extended client logos
  const clientLogos = [
    { id: 1, Icon: FaGoogle, color: 'hover:text-[#4285F4]', size: 35 },
    { id: 2, Icon: FaAmazon, color: 'hover:text-[#FF9900]', size: 38 },
    { id: 3, Icon: FaMicrosoft, color: 'hover:text-[#00A4EF]', size: 33 },
    { id: 4, Icon: FaApple, color: 'hover:text-[#A2AAAD]', size: 40 },
    { id: 5, Icon: FaSalesforce, color: 'hover:text-[#00A1E0]', size: 32 },
    { id: 6, Icon: FaSpotify, color: 'hover:text-[#1DB954]', size: 36 },
    { id: 7, Icon: FaSlack, color: 'hover:text-[#4A154B]', size: 34 },
    { id: 8, Icon: FaTwitter, color: 'hover:text-[#1DA1F2]', size: 37 }
  ];

  // Simplified hover animation for logos
  const logoHoverAnimation = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-white/5 dark:bg-black/5 border-t border-b border-white/10 dark:border-gray-800/30"
    >
      {/* Background simplificado */}
      <div className="absolute inset-0 z-0 opacity-3">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 70%)`
        }}></div>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1 bg-[#25C9BA]/10 text-[#25C9BA] dark:text-[#25C9BA] text-sm font-medium mb-3 rounded-full"
          >
            {t('home.clients.subtitle') || 'Trusted Globally'}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold font-heading mb-3 text-gray-900 dark:text-white"
          >
            {t('home.clients.title') || 'Empowering Innovative Brands'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto text-gray-600 dark:text-gray-300"
          >
            {t('home.clients.description') || 'We\'ve helped companies across industries transform their digital presence.'}
          </motion.p>
        </motion.div>
        
        {/* Grid de logos simplificado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 px-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.id}
                className={`${client.color} text-gray-400 dark:text-gray-500`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <client.Icon size={client.size} className="transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Clients;
