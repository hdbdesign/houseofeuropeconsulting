import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Palette, Film, Monitor, Cpu, ArrowRight, Code, Globe, Server, BrainCircuit } from 'lucide-react';
import ButtonCTA from '../ui/ButtonCTA';
import ServicePricingCard from './ServicePricingCard';

// Interface para diferenciar entre exibição com ou sem preço
interface ServicesGridProps {
  showPricing?: boolean;
  isHomePage?: boolean;
}

const ServicesGrid = ({ showPricing = true, isHomePage = false }: ServicesGridProps) => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('services.webdev.title'),
      description: t('services.webdev.brief'),
      icon: <Globe className="w-10 h-10" />,
      link: '/services#webdev',
      price: t('services.items.price1'),
      popular: true,
      features: [
        { text: t('services.items.feature1_1'), highlighted: true },
        { text: t('services.items.feature1_2'), highlighted: true },
        { text: t('services.items.feature1_3'), highlighted: true },
        { text: t('services.items.feature1_4'), highlighted: false }
      ],
      delay: 0.1
    },
    {
      id: 2,
      title: t('services.software.title'),
      description: t('services.software.brief'),
      icon: <Code className="w-10 h-10" />,
      link: '/services#software',
      price: t('services.items.price2'),
      features: [
        { text: t('services.items.feature2_1'), highlighted: true },
        { text: t('services.items.feature2_2'), highlighted: true },
        { text: t('services.items.feature2_3'), highlighted: true },
        { text: t('services.items.feature2_4'), highlighted: false }
      ],
      delay: 0.2
    },
    {
      id: 3,
      title: t('services.branding.title'),
      description: t('services.branding.brief'),
      icon: <Palette className="w-10 h-10" />,
      link: '/services#branding',
      price: t('services.items.price3'),
      features: [
        { text: t('services.items.feature3_1'), highlighted: true },
        { text: t('services.items.feature3_2'), highlighted: true },
        { text: t('services.items.feature3_3'), highlighted: true }
      ],
      delay: 0.3
    },
    {
      id: 4,
      title: t('services.ai.title'),
      description: t('services.ai.brief'),
      icon: <BrainCircuit className="w-10 h-10" />,
      link: '/services#ai',
      price: t('services.items.price4'),
      features: [
        { text: t('services.items.feature4_1'), highlighted: true },
        { text: t('services.items.feature4_2'), highlighted: true },
        { text: t('services.items.feature4_3'), highlighted: true }
      ],
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
            {isHomePage ? t('home.services.title') : t('services.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            {isHomePage ? t('home.services.description') : t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            isHomePage ? (
              <motion.div
                key={service.id}
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
              >
                {/* Card content - versão da Home sem preços */}
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
                      <ButtonCTA secondary className="w-full border border-[#00FFFF]/30 hover:border-[#00FFFF] text-[#00FFFF]">
                        {t('services.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                      </ButtonCTA>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : (
              <ServicePricingCard
                key={service.id}
                title={service.title}
                description={service.description}
                price={showPricing ? service.price : undefined}
                icon={service.icon}
                link={service.link}
                features={service.features}
                popular={service.popular}
                delay={service.delay}
              />
            )
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {isHomePage ? (
            <Link href="/services">
              <ButtonCTA className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black">
                {t('home.services.viewAllBtn')} <ArrowRight className="ml-2 h-5 w-5 inline" />
              </ButtonCTA>
            </Link>
          ) : (
            <Link href="/contact">
              <ButtonCTA className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black">
                {t('contact.form.submit')} <ArrowRight className="ml-2 h-5 w-5 inline" />
              </ButtonCTA>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;