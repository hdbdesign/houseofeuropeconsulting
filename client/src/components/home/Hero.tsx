import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { CodeIcon, GlobeIcon, BrainCircuitIcon, RocketIcon, ZapIcon, MousePointerClick, ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import ButtonCTA from '@/components/ui/ButtonCTA';

const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacitySection = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax effect for 3D feel (simplified)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Usando requestAnimationFrame para melhor performance
      requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Reduzindo a sensibilidade do movimento
        const x = (clientX - windowWidth / 2) / (windowWidth * 2);
        const y = (clientY - windowHeight / 2) / (windowHeight * 2);
        
        setMousePosition({ x, y });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // 3D rotation based on mouse position (reduced effect for performance)
  const calculateTransform = () => {
    const xTransform = mousePosition.x * 3; // Reduced from 5 to 3 degrees
    const yTransform = mousePosition.y * -3; // Reduced from -5 to -3 degrees
    return `perspective(1000px) rotateX(${yTransform}deg) rotateY(${xTransform}deg)`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#021C26]">
      {/* Vídeo de Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
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
            <div className="text-white">{t('hero.title')}</div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF601A] to-[#FF601A]/90">
              {t('hero.market')}
            </div>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services">
              <ButtonCTA className="bg-[#FF601A] text-white hover:bg-[#FF601A]/90 text-lg px-8 py-4 min-w-[200px]">
                {t('hero.primaryCTA')} <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </ButtonCTA>
            </Link>
            <Link href="/contact">
              <ButtonCTA secondary className="border-transparent text-white hover:bg-white/10 text-lg px-8 py-4 min-w-[200px]">
                {t('hero.secondaryCTA')} <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </ButtonCTA>
            </Link>
          </motion.div>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24"
        >
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-2">{t('hero.stats.experience.number')}</h3>
            <p className="text-gray-400">{t('hero.stats.experience.text')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-2">{t('hero.stats.deals.number')}</h3>
            <p className="text-gray-400">{t('hero.stats.deals.text')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-2">{t('hero.stats.countries.number')}</h3>
            <p className="text-gray-400">{t('hero.stats.countries.text')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-2">{t('hero.stats.satisfaction.number')}</h3>
            <p className="text-gray-400">{t('hero.stats.satisfaction.text')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
