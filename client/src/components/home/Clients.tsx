import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaSalesforce } from 'react-icons/fa';

const Clients = () => {
  const { t } = useTranslation();

  const clientLogos = [
    { id: 1, Icon: FaGoogle, size: 'w-24' },
    { id: 2, Icon: FaAmazon, size: 'w-24' },
    { id: 3, Icon: FaMicrosoft, size: 'w-28' },
    { id: 4, Icon: FaApple, size: 'w-20' },
    { id: 5, Icon: FaSalesforce, size: 'w-24' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="mt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p 
          className="text-center text-sm uppercase tracking-wider text-gray-500 mb-6"
          variants={itemVariants}
        >
          {t('hero.trustedBy')}
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {clientLogos.map((client) => (
            <motion.div 
              key={client.id}
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1, grayscale: 0 }}
            >
              <client.Icon className={`h-full ${client.size}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Clients;
