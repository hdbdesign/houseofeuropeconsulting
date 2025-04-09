import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Palette, Film, BrainCircuit, Code, Globe, ArrowRight } from 'lucide-react';
import ButtonCTA from '../ui/ButtonCTA';

const ServicesGrid = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('services.webdev.title'),
      description: t('services.webdev.brief'),
      icon: <Globe className="w-10 h-10" />,
      link: '/services#webdev',
      delay: 0.1
    },
    {
      id: 2,
      title: t('services.software.title'),
      description: t('services.software.brief'),
      icon: <Code className="w-10 h-10" />,
      link: '/services#software',
      delay: 0.2
    },
    {
      id: 3,
      title: t('services.branding.title'),
      description: t('services.branding.brief'),
      icon: <Palette className="w-10 h-10" />,
      link: '/services#branding',
      delay: 0.3
    },
    {
      id: 4,
      title: t('services.ai.title'),
      description: t('services.ai.brief'),
      icon: <BrainCircuit className="w-10 h-10" />,
      link: '/services#ai',
      delay: 0.4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            {t('home.services.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-4">
            {t('home.services.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              {/* Card content */}
              <div className="relative h-full flex flex-col bg-black/30 backdrop-blur-sm border border-[#00FFFF]/20 group-hover:border-[#00FFFF]/50 rounded-lg p-6 transition-all">
                <div className="mb-4 text-[#00FFFF]">
                  {service.icon}
                </div>
                
                <h3 className="font-heading font-bold text-xl mb-3 text-white group-hover:text-[#00FFFF] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <Link href={service.link}>
                    <a className="inline-flex items-center text-[#00FFFF] hover:text-white transition-colors text-sm font-medium">
                      {t('services.learnMore')} 
                      <ArrowRight className="ml-2 h-4 w-4 inline-block align-middle" />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/services">
            <ButtonCTA className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black">
              {t('home.services.viewAllBtn')} <ArrowRight className="ml-2 h-5 w-5 inline-block align-middle" />
            </ButtonCTA>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid; 