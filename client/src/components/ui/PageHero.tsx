import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import ButtonCTA from '@/components/ui/ButtonCTA';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  subtitleColor?: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  stats?: {
    experience?: {
      number: string;
      text: string;
    };
    deals?: {
      number: string;
      text: string;
    };
    countries?: {
      number: string;
      text: string;
    };
    satisfaction?: {
      number: string;
      text: string;
    };
  };
}

const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  subtitleColor = '#FF601A',
  primaryCTA, 
  secondaryCTA,
  stats 
}: PageHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#021C26]">
      {/* Vídeo de Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-40"
          style={{ 
            filter: 'brightness(0.7) hue-rotate(-10deg)',
            mixBlendMode: 'color-dodge'
          }}
        >
          <source src="/videos/background-animation.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>

      {/* Gradientes de fundo como overlay */}
      <div className="absolute inset-0 z-1 bg-[#021C26]/80">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#25C9BA]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#25C9BA]/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25C9BA]/10 rounded-full blur-[150px]"></div>
      </div>
      
      {/* Grid decorativo */}
      <div 
        className="absolute inset-0 z-2" 
        style={{
          backgroundImage: `radial-gradient(rgba(37,201,186,0.15) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 pt-40 md:pt-48 lg:pt-52 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <div className="text-white">{title}</div>
            <div className="bg-clip-text text-transparent" style={{
              backgroundImage: `linear-gradient(to right, ${subtitleColor}, ${subtitleColor}90)`
            }}>
              {subtitle}
            </div>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          
          {(primaryCTA || secondaryCTA) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {primaryCTA && (
                <Link href={primaryCTA.link}>
                  <ButtonCTA className="bg-[#FF601A] text-white hover:bg-[#FF601A]/90 text-lg px-8 py-4 min-w-[200px]">
                    {primaryCTA.text} <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                  </ButtonCTA>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.link}>
                  <ButtonCTA secondary className="border-transparent text-white hover:bg-white/10 text-lg px-8 py-4 min-w-[200px]">
                    {secondaryCTA.text} <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                  </ButtonCTA>
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Estatísticas */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24"
          >
            {stats.experience && (
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-2">{stats.experience.number}</h3>
                <p className="text-gray-400">{stats.experience.text}</p>
              </div>
            )}
            {stats.deals && (
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-2">{stats.deals.number}</h3>
                <p className="text-gray-400">{stats.deals.text}</p>
              </div>
            )}
            {stats.countries && (
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-2">{stats.countries.number}</h3>
                <p className="text-gray-400">{stats.countries.text}</p>
              </div>
            )}
            {stats.satisfaction && (
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-2">{stats.satisfaction.number}</h3>
                <p className="text-gray-400">{stats.satisfaction.text}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero; 