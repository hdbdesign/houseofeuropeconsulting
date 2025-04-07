import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { businessImages } from '@/config/imageUrls';
import { Check, Target, Compass, Award, Users, Globe, TrendingUp, Zap, Shield } from 'lucide-react';

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
    innovation: <Zap className="h-6 w-6 text-white" />,
    customer: <Users className="h-6 w-6 text-white" />,
    quality: <Shield className="h-6 w-6 text-white" />,
    global: <Globe className="h-6 w-6 text-white" />
  };

  const valueColors: Record<string, string> = {
    innovation: 'from-blue-500 to-cyan-400',
    customer: 'from-[#3B82F6] to-blue-400',
    quality: 'from-[#0F1A35] to-blue-800',
    global: 'from-indigo-600 to-blue-500'
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
            <div className="absolute inset-0 rounded-lg border-2 border-[#00FFFF]/50 shadow-[0_0_15px_rgba(0,255,255,0.5)] z-10"></div>
            <img 
              src={businessImages.about}
              alt="CEO of House of Digital Business"
              className="rounded-lg shadow-xl w-full h-auto relative z-10"
            />
            <div className="absolute -top-2 -right-2 bg-primary text-white py-2 px-4 rounded-lg shadow-lg z-20 font-medium">
              {t('about.established')}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-16 pb-6 px-5 z-20">
              <div className="flex items-center">
                <div className="bg-[#3B82F6] text-white font-bold px-3 py-1.5 rounded-md shadow-[0_0_10px_rgba(59,130,246,0.7)] mr-3 text-sm tracking-wide border-2 border-white/30">CEO</div>
                <div>
                  <h3 className="text-white font-bold text-xl font-heading">Washington</h3>
                  <p className="text-[#00FFFF] text-sm font-medium">Fundador & CEO</p>
                </div>
              </div>
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
        className="mt-24 relative"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-black/70 rounded-3xl backdrop-blur-sm z-0"></div>
        
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#00FFFF]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#00FFFF]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-[#00FFFF]/10 rounded-full blur-2xl"></div>
        
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 p-12">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="inline-block px-4 py-1 bg-[#00FFFF]/10 text-[#00FFFF] rounded-full text-sm font-medium">
                {t('about.values.label')}
              </span>
            </motion.div>
            
            <motion.h2 
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('about.values.title')}
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('about.values.subtitle')}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(valueIcons).map(([key, icon], index) => (
              <motion.div
                key={key}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                whileHover={{ y: -10 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${valueColors[key]} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{
                         boxShadow: `0 0 20px 2px rgba(0, 255, 255, 0.5)`,
                         border: '1px solid rgba(0, 255, 255, 0.3)'
                       }}>
                  </div>
                  
                  <div className="relative p-8 z-10 h-full flex flex-col">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${valueColors[key]} flex items-center justify-center w-14 h-14 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {icon}
                    </div>
                    
                    <h3 className="font-heading font-bold text-2xl mb-4 text-white">
                      {t(`about.values.coreValues.${key}.title`)}
                    </h3>
                    
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {t(`about.values.coreValues.${key}.text`)}
                    </p>
                    
                    <div className="mt-auto pt-4">
                      <div className="h-0.5 w-8 bg-[#00FFFF] group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
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
