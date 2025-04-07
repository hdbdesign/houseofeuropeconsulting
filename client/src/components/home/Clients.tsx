import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaSalesforce } from 'react-icons/fa';

const Clients = () => {
  const { t } = useTranslation();

  // Client logos with consistent sizes and no labels (moved to the component rendering)
  const clientLogos = [
    { id: 1, Icon: FaGoogle, size: 'w-32', color: 'hover:text-[#4285F4]' },
    { id: 2, Icon: FaAmazon, size: 'w-32', color: 'hover:text-[#FF9900]' },
    { id: 3, Icon: FaMicrosoft, size: 'w-32', color: 'hover:text-[#00A4EF]' },
    { id: 4, Icon: FaApple, size: 'w-28', color: 'hover:text-[#A2AAAD]' },
    { id: 5, Icon: FaSalesforce, size: 'w-32', color: 'hover:text-[#00A1E0]' }
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
          {clientLogos.map((client, index) => (
            <motion.div 
              key={client.id}
              className="filter grayscale hover:grayscale-0 text-gray-500 dark:text-gray-400 flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.15,
                y: -5, 
                transition: { duration: 0.3 } 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <client.Icon className={`h-12 ${client.size} ${client.color} transition-all duration-300`} />
            </motion.div>
          ))}
          
          {/* Company names shown below in a separate row */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-8 w-full">
            <div className="text-center w-32">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Google</span>
            </div>
            <div className="text-center w-32">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Amazon</span>
            </div>
            <div className="text-center w-32">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Microsoft</span>
            </div>
            <div className="text-center w-28">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Apple</span>
            </div>
            <div className="text-center w-32">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Salesforce</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Clients;
