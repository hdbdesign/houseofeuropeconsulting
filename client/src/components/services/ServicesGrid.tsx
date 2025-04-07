import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, Globe, Monitor, MessageSquare, Target, CheckCircle, Sliders, BarChart, Database, Shield } from 'lucide-react';

const ServicesGrid = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <Globe className="h-8 w-8" />,
      color: "from-sky-500 to-blue-600",
      titleKey: 'services.items.multilingual.title',
      descriptionKey: 'services.items.multilingual.description',
      delay: 0.1,
    },
    {
      id: 2,
      icon: <Monitor className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-600",
      titleKey: 'services.items.strategy.title',
      descriptionKey: 'services.items.strategy.description',
      delay: 0.2,
    },
    {
      id: 3,
      icon: <MessageSquare className="h-8 w-8" />,
      color: "from-emerald-500 to-green-600",
      titleKey: 'services.items.localization.title',
      descriptionKey: 'services.items.localization.description',
      delay: 0.3,
    },
    {
      id: 4,
      icon: <Target className="h-8 w-8" />,
      color: "from-red-500 to-rose-600",
      titleKey: 'services.items.seo.title',
      descriptionKey: 'services.items.seo.description',
      delay: 0.4,
    },
    {
      id: 5,
      icon: <BarChart className="h-8 w-8" />,
      color: "from-amber-500 to-orange-600",
      titleKey: 'services.items.ecommerce.title',
      descriptionKey: 'services.items.ecommerce.description',
      delay: 0.5,
    },
    {
      id: 6,
      icon: <Database className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-600",
      titleKey: 'services.items.app.title',
      descriptionKey: 'services.items.app.description',
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div
      className="container mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="text-center mb-16" variants={itemVariants} custom={0}>
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {t('services.subtitle')}
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 dark:text-white mb-6">
          {t('services.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
          {t('services.description')}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
            custom={service.delay}
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Top Border Gradient */}
            <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
            
            <div className="p-8">
              {/* Icon with Gradient Background */}
              <div className={`mb-6 w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white transform transition-transform duration-500 group-hover:rotate-6`}>
                {service.icon}
              </div>
              
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-4 text-gray-900 dark:text-white">
                {t(service.titleKey)}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {t(service.descriptionKey)}
              </p>
              
              {/* Features */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {t('services.features')}:
                </h4>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">
                        <CheckCircle className="h-4 w-4" />
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {t(`services.items.feature${service.id}_${item}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <div className="flex justify-between items-center">
                <div className="font-medium text-primary">
                  {t('services.startsAt')} <span className="font-bold">{t(`services.items.price${service.id}`)}</span>
                </div>
                <div>
                  <Link href="/contact">
                    <div className="group flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
                      <span>{t('services.learnMore')}</span>
                      <motion.div
                        className="ml-1"
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Additional Premium Services Banner */}
      <motion.div 
        className="mt-16 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl p-10 shadow-xl relative overflow-hidden"
        variants={itemVariants}
        custom={0.8}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full -mr-20 -mt-20"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full -ml-20 -mb-20"></div>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              {t('services.premium.title')}
            </h3>
            <p className="text-white/90 max-w-xl">
              {t('services.premium.description')}
            </p>
          </div>
          
          <Link href="/contact">
            <div className="whitespace-nowrap inline-flex items-center px-6 py-3 bg-white text-primary hover:bg-white/90 font-medium rounded-lg shadow-md transition-colors duration-300">
              {t('services.premium.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesGrid;
