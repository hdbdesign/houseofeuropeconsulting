import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Globe, Monitor, MessageSquare, Target, CheckCircle, Sliders } from 'lucide-react';

const ServicesGrid = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <Globe className="h-8 w-8 text-primary" />,
      titleKey: 'services.items.multilingual.title',
      descriptionKey: 'services.items.multilingual.description',
      delay: 0.1,
    },
    {
      id: 2,
      icon: <Monitor className="h-8 w-8 text-primary" />,
      titleKey: 'services.items.strategy.title',
      descriptionKey: 'services.items.strategy.description',
      delay: 0.2,
    },
    {
      id: 3,
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      titleKey: 'services.items.localization.title',
      descriptionKey: 'services.items.localization.description',
      delay: 0.3,
    },
    {
      id: 4,
      icon: <Target className="h-8 w-8 text-primary" />,
      titleKey: 'services.items.seo.title',
      descriptionKey: 'services.items.seo.description',
      delay: 0.4,
    },
    {
      id: 5,
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      titleKey: 'services.items.ecommerce.title',
      descriptionKey: 'services.items.ecommerce.description',
      delay: 0.5,
    },
    {
      id: 6,
      icon: <Sliders className="h-8 w-8 text-primary" />,
      titleKey: 'services.items.app.title',
      descriptionKey: 'services.items.app.description',
      delay: 0.5,
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
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
          {t('services.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          {t('services.subtitle')}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card bg-white rounded-lg shadow-md p-6"
            variants={itemVariants}
            custom={service.delay}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 85, 164, 0.1), 0 10px 10px -5px rgba(0, 85, 164, 0.04)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-primary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3">
              {t(service.titleKey)}
            </h3>
            <p className="text-gray-600 mb-4">
              {t(service.descriptionKey)}
            </p>
            <Link href="/contact">
              <a className="text-primary font-medium hover:text-secondary transition-colors flex items-center group">
                <span>{t('services.learnMore')}</span>
                <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesGrid;
