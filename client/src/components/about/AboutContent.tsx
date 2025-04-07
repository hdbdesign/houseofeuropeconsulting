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

      <motion.div 
        className="mt-24 backdrop-blur-xl bg-white/10 dark:bg-gray-800/20 rounded-3xl p-10 border border-white/30 dark:border-gray-700/30 relative overflow-hidden"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
          boxShadow: '0 20px 60px 0 rgba(31, 38, 135, 0.25)' 
        }}
        variants={itemVariants}
      >
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-cyan-300/20 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tr from-blue-500/20 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-80 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-14">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 opacity-10">
              <div className="w-32 h-32 bg-cyan-400 rounded-full blur-3xl absolute"></div>
              <div className="w-32 h-32 bg-blue-500 rounded-full blur-3xl absolute left-10"></div>
            </div>
            
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t('about.values.label')}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {t('about.values.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(valueIcons).map(([key, icon], index) => (
              <motion.div
                key={key}
                className="relative backdrop-blur-md bg-white/20 dark:bg-gray-900/30 p-6 rounded-xl border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' 
                }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
              >
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="bg-white/80 dark:bg-gray-800/80 w-14 h-14 rounded-xl shadow-lg backdrop-blur-sm border border-white/40 dark:border-gray-700/40 flex items-center justify-center mb-6">
                    {icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3 text-gray-800 dark:text-white">
                    {t(`about.values.coreValues.${key}.title`)}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {t(`about.values.coreValues.${key}.text`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
