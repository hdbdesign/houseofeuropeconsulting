import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaSalesforce } from 'react-icons/fa';

const Clients = () => {
  const { t } = useTranslation();

  const clientLogos = [
    { id: 1, Icon: FaGoogle, size: 'w-24', color: 'hover:text-[#4285F4]' },
    { id: 2, Icon: FaAmazon, size: 'w-24', color: 'hover:text-[#FF9900]' },
    { id: 3, Icon: FaMicrosoft, size: 'w-28', color: 'hover:text-[#00A4EF]' },
    { id: 4, Icon: FaApple, size: 'w-20', color: 'hover:text-[#A2AAAD]' },
    { id: 5, Icon: FaSalesforce, size: 'w-24', color: 'hover:text-[#00A1E0]' }
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
        {/* Removed the duplicated title as it's already in Hero */}
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((client) => (
            <motion.div 
              key={client.id}
              className={`h-10 w-auto filter grayscale hover:grayscale-0 text-gray-500 dark:text-gray-400 ${client.color} transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
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
