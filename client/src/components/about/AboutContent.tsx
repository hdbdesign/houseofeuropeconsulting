import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { businessImages } from '@/config/imageUrls';
import { Check, Target, Compass, Award, Users, Globe, TrendingUp } from 'lucide-react';

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
      icon: <Target className="h-6 w-6 text-white" />,
      bgColor: 'bg-sky-500',
    },
    {
      key: 'mission',
      icon: <Compass className="h-6 w-6 text-white" />,
      bgColor: 'bg-indigo-500',
    },
    {
      key: 'values',
      icon: <Award className="h-6 w-6 text-white" />,
      bgColor: 'bg-emerald-500',
    }
  ];

  const valueIcons = {
    innovation: <TrendingUp className="h-5 w-5 text-indigo-500" />,
    customer: <Users className="h-5 w-5 text-sky-500" />,
    quality: <Check className="h-5 w-5 text-emerald-500" />,
    global: <Globe className="h-5 w-5 text-purple-500" />
  };

  return (
    <motion.div
      className="container mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16">
        <motion.div 
          className="w-full md:w-1/2" 
          variants={itemVariants}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg z-0"></div>
            <img 
              src={businessImages.about}
              alt="Our team collaborating"
              className="rounded-lg shadow-xl w-full h-auto relative z-10"
            />
            <div className="absolute -top-2 -right-2 bg-primary text-white py-2 px-4 rounded-lg shadow-lg z-20 font-medium">
              {t('about.established')}
            </div>
          </div>
        </motion.div>
        
        <div className="w-full md:w-1/2">
          <motion.div 
            className="space-y-8 h-full flex flex-col justify-center" 
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                {t('about.content.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('about.content.subtitle')}
              </p>
            </motion.div>
            
            {aboutItems.map((item) => (
              <motion.div 
                key={item.key} 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className={`${item.bgColor} rounded-lg p-3 mr-4 shadow-lg transform transition-all duration-300 hover:scale-110`}>
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

      {/* Core Values Grid */}
      <motion.div 
        className="mt-24 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
        variants={itemVariants}
      >
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
            {t('about.values.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t('about.values.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(valueIcons).map(([key, icon], index) => (
            <motion.div
              key={key}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
            >
              <div className="bg-white dark:bg-gray-700 w-12 h-12 rounded-lg shadow-md flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {t(`about.values.coreValues.${key}.title`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t(`about.values.coreValues.${key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
