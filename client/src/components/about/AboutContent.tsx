import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { businessImages } from '@/config/imageUrls';
import { Check } from 'lucide-react';

const AboutContent = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
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

  const aboutItems = [
    {
      key: 'vision',
      icon: <Check className="h-5 w-5 text-white" />,
    },
    {
      key: 'mission',
      icon: <Check className="h-5 w-5 text-white" />,
    },
    {
      key: 'values',
      icon: <Check className="h-5 w-5 text-white" />,
    }
  ];

  return (
    <motion.div
      className="container mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
          {t('about.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          {t('about.subtitle')}
        </p>
      </motion.div>
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <img 
            src={businessImages.about}
            alt="Our team collaborating"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
        
        <div className="w-full md:w-1/2">
          <motion.div className="space-y-6" variants={containerVariants}>
            {aboutItems.map((item) => (
              <motion.div 
                key={item.key} 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="bg-primary rounded-full p-2 mt-1 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {t(`about.${item.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`about.${item.key}.text`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutContent;
