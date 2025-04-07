import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaSalesforce } from 'react-icons/fa';

const Clients = () => {
  const { t } = useTranslation();

  // Simplified client logos
  const clientLogos = [
    { id: 1, Icon: FaGoogle, color: 'hover:text-[#4285F4]' },
    { id: 2, Icon: FaAmazon, color: 'hover:text-[#FF9900]' },
    { id: 3, Icon: FaMicrosoft, color: 'hover:text-[#00A4EF]' },
    { id: 4, Icon: FaApple, color: 'hover:text-[#A2AAAD]' },
    { id: 5, Icon: FaSalesforce, color: 'hover:text-[#00A1E0]' }
  ];

  // Simple fade-in animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="my-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-4xl"
      >
        {/* Minimalist logo display */}
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {clientLogos.map((client) => (
            <motion.div 
              key={client.id}
              className={`filter grayscale hover:grayscale-0 text-gray-400 dark:text-gray-500 transition-all duration-300 ${client.color}`}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <client.Icon size={32} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Clients;
