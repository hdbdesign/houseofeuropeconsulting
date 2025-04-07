import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ServicesGrid from '@/components/services/ServicesGrid';
import FeaturedWork from '@/components/portfolio/FeaturedWork';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import FooterCTA from '@/components/cta/FooterCTA';
import StatsSection from '@/components/stats/StatsSection';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import ButtonCTA from '@/components/ui/ButtonCTA';
import { useEffect, useState, useRef } from 'react';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Componente TypeWriter para realizar o efeito de digitação
const TypeWriter = ({ words, speed = 100, eraseSpeed = 70, delayBetween = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [delta, setDelta] = useState(speed);
  
  useEffect(() => {
    let timer;
    
    const tick = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        // Apagando
        setText(currentWord.substring(0, text.length - 1));
        setDelta(eraseSpeed);
      } else {
        // Digitando
        setText(currentWord.substring(0, text.length + 1));
        setDelta(speed);
      }
      
      if (!isDeleting && text === currentWord) {
        // Terminou de digitar, aguarda antes de apagar
        setDelta(delayBetween);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Terminou de apagar, passa para a próxima palavra
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setDelta(500); // Pequena pausa antes de iniciar a nova palavra
      }
      
      timer = setTimeout(tick, delta);
    };
    
    timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, speed, eraseSpeed, delayBetween, delta]);
  
  return (
    <span className="inline-block min-h-[1.5em]">
      {text}
      <span className="typing-cursor">|</span>
    </span>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  
  // Lista de serviços para o efeito de digitação
  const services = [
    t('services.webdev.title'),
    t('services.software.title'),
    t('services.branding.title'),
    t('services.ai.title')
  ];
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>{t('meta.home.title')}</title>
        <meta name="description" content={t('meta.home.description')} />
        <style>
          {`
          .typing-cursor {
            display: inline-block;
            width: 2px;
            background-color: #00FFFF;
            animation: blink 1s infinite;
          }
          
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          `}
        </style>
      </Helmet>
      
        {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-black overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid background */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
                <span className="block">{t('home.hero.titleLine1')}</span>
                <span className="block text-[#00FFFF]">{t('home.hero.titleLine2')}</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#00FFFF]/10 backdrop-blur-sm rounded-lg border border-[#00FFFF]/20 py-3 px-6 mb-8"
            >
              <h2 className="text-[#00FFFF] text-2xl md:text-3xl font-semibold mb-0">
                <TypeWriter 
                  words={services} 
                  speed={100}
                  eraseSpeed={70}
                  delayBetween={2000}
                />
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('home.hero.subtitle')}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/services">
                <ButtonCTA className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black font-medium">
                  {t('home.hero.primaryCTA')} <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </ButtonCTA>
              </Link>
              <Link href="/contact">
                <ButtonCTA secondary className="border border-[#00FFFF]/30 hover:border-[#00FFFF] text-[#00FFFF]">
                  {t('home.hero.secondaryCTA')}
                </ButtonCTA>
              </Link>
            </motion.div>
            
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="px-6 py-3 bg-[#00FFFF]/10 backdrop-blur-sm rounded-full border border-[#00FFFF]/20">
                <span className="text-gray-300 mr-3">{t('hero.trusted')}</span>
                <span className="font-bold text-[#00FFFF]">+500</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom line effect */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00FFFF]/30"></div>
        </section>

      {/* Featured Clients */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-gray-300 text-2xl mb-2">{t('home.clients.title')}</h2>
            <div className="w-24 h-1 bg-[#00FFFF]/50 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="grayscale hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <img 
                  src={`/clients/client-${i + 1}.svg`} 
                  alt={`Client ${i + 1}`} 
                  className="h-12 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
        </section>

      {/* Services Overview */}
      <ServicesGrid isHomePage={true} />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Featured Work */}
      <FeaturedWork />
      
      {/* Process Section */}
      <section className="relative py-16 md:py-24 bg-black overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              {t('home.process.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              {t('home.process.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => {
              // Definir cores para cada etapa sem usar indexação numérica
              let bgColor = "bg-cyan-400";
              let textColor = "text-cyan-400";
              
              switch (step) {
                case 1:
                  bgColor = "bg-cyan-400";
                  textColor = "text-cyan-400";
                  break;
                case 2:
                  bgColor = "bg-purple-400";
                  textColor = "text-purple-400";
                  break;
                case 3:
                  bgColor = "bg-emerald-400";
                  textColor = "text-emerald-400";
                  break;
                case 4:
                  bgColor = "bg-amber-400";
                  textColor = "text-amber-400";
                  break;
              }
              
              return (
                <motion.div 
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step * 0.1 }}
                >
                  {/* Step number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full ${bgColor} text-black flex items-center justify-center font-bold text-xl shadow-lg z-10`}>
                    {step}
                  </div>
                  
                  {/* Content */}
                  <div className="backdrop-blur-sm bg-black/30 rounded-lg p-6 shadow-lg pt-10 h-full border border-[#00FFFF]/20 hover:border-[#00FFFF]/50 transition-all">
                    <h3 className={`font-heading font-semibold text-xl mb-3 ${textColor}`}>
                      {t(`home.process.steps.${step}.title`)}
                    </h3>
                    <p className="text-gray-300">
                      {t(`home.process.steps.${step}.description`)}
                    </p>
                  </div>
                  
                  {/* Connector (not for the last item on mobile) */}
                  {step < 4 && (
                    <>
                      <div className={`block md:hidden h-8 w-1 ${bgColor}/40 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full`}></div>
                      <div className={`hidden md:block h-1 w-8 ${bgColor}/40 absolute top-1/2 right-0 transform translate-x-full`}></div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
      
      {/* Footer CTA */}
      <FooterCTA />
    </motion.div>
  );
};

export default HomePage;
