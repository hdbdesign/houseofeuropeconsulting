import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaSalesforce } from 'react-icons/fa';

const Clients = () => {
  const { t } = useTranslation();

  // Enhanced client logos with specific colors and sizes for consistency
  const clientLogos = [
    { id: 1, Icon: FaGoogle, size: 'w-32', color: 'hover:text-[#4285F4]', label: 'Google' },
    { id: 2, Icon: FaAmazon, size: 'w-32', color: 'hover:text-[#FF9900]', label: 'Amazon' },
    { id: 3, Icon: FaMicrosoft, size: 'w-32', color: 'hover:text-[#00A4EF]', label: 'Microsoft' },
    { id: 4, Icon: FaApple, size: 'w-28', color: 'hover:text-[#A2AAAD]', label: 'Apple' },
    { id: 5, Icon: FaSalesforce, size: 'w-32', color: 'hover:text-[#00A1E0]', label: 'Salesforce' }
  ];

  // Enhanced animations for better flow
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        duration: 0.6 
      }
    }
  };

  return (
    <div className="-mt-6 mb-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="px-4 py-10 rounded-2xl bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm mx-auto max-w-4xl"
      >
        {/* Client logos with better presentation and layout */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {clientLogos.map((client) => (
            <motion.div 
              key={client.id}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.div
                className={`h-12 w-auto filter grayscale hover:grayscale-0 text-gray-500 dark:text-gray-400 ${client.color} transition-all duration-300`}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  transition: { duration: 0.3 } 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <client.Icon className={`h-full ${client.size}`} />
              </motion.div>
              <span className="mt-3 text-xs text-gray-500 dark:text-gray-400 font-medium opacity-60">
                {client.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Clients;
