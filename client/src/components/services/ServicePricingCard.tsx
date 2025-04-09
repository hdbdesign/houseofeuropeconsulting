import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { ArrowRight, Check, Star } from 'lucide-react';
import ButtonCTA from '../ui/ButtonCTA';

interface ServiceFeature {
  text: string;
  highlighted?: boolean;
}

interface ServicePricingCardProps {
  title: string;
  description: string;
  price: string;
  features: ServiceFeature[];
  icon: React.ReactNode;
  link: string;
  popular?: boolean;
  delay?: number;
}

const ServicePricingCard: React.FC<ServicePricingCardProps> = ({
  title,
  description,
  price,
  features,
  icon,
  link,
  popular = false,
  delay = 0
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-[#00FFFF]/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00FFFF] text-black px-4 py-1 rounded-full text-sm font-medium z-10 flex items-center">
          <Star className="w-4 h-4 mr-1" /> {t('services.popular')}
        </div>
      )}
      
      {/* Card content */}
      <div 
        className={`
          relative h-full flex flex-col 
          bg-black/30 backdrop-blur-sm 
          border border-[#00FFFF]/20 group-hover:border-[#00FFFF]/50 
          rounded-lg p-6 transition-all
          ${popular ? 'pt-8 shadow-lg shadow-[#00FFFF]/10' : ''}
        `}
      >
        <div className="mb-4 text-[#00FFFF]">
          {icon}
        </div>
        
        <h3 className="font-heading font-bold text-xl mb-2 text-white group-hover:text-[#00FFFF] transition-colors">
          {title}
        </h3>
        
        <div className="mb-2">
          <span className="text-gray-400 text-sm">{t('services.startsAt')}</span>
          <span className="ml-2 text-[#00FFFF] font-bold text-2xl">{price}</span>
        </div>
        
        <p className="text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="my-4 space-y-3 flex-grow">
          <p className="text-sm font-medium text-[#00FFFF] mb-2">{t('services.features')}:</p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${feature.highlighted ? 'text-[#00FFFF]' : 'text-gray-500'}`} />
              <span className={`text-sm ${feature.highlighted ? 'text-gray-200' : 'text-gray-400'}`}>{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-auto pt-4">
          <Link href={link}>
            <ButtonCTA 
              secondary={!popular} 
              className={`
                w-full 
                ${popular 
                  ? 'bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black' 
                  : 'border border-[#00FFFF]/30 hover:border-[#00FFFF] text-[#00FFFF]'
                }
              `}
            >
              {t('services.viewPricing')} <ArrowRight className="ml-2 h-4 w-4 inline-block align-middle" />
            </ButtonCTA>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicePricingCard; 