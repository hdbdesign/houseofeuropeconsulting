import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { CodeIcon, GlobeIcon, BrainCircuitIcon, RocketIcon, ZapIcon, MousePointerClick } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import ButtonCTA from '@/components/ui/ButtonCTA';

const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacitySection = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax effect for 3D feel (simplified)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle the mouse movement calculation to improve performance
      if (!window.requestAnimationFrame) return;
      
      window.requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate mouse position as percentage from center
        const x = (clientX - windowWidth / 2) / windowWidth;
        const y = (clientY - windowHeight / 2) / windowHeight;
        
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
    <section ref={containerRef} className="relative h-screen bg-black overflow-hidden flex items-center">
      {/* Efeitos de fundo com neon */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00FFFF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0C1E3C]/30 rounded-full blur-3xl"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 backdrop-blur-md bg-[#00FFFF]/10 border border-[#00FFFF]/20 rounded-full text-[#00FFFF] text-sm font-medium">
              {t('hero.subtitle') || 'Transformação Digital'}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 text-white"
          >
            {t('hero.title') || 'Stärkung der Markenidentität und des Wachstums'}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            {t('hero.description') || 'Transformamos negócios através de estratégias digitais inovadoras, design de marca e soluções de IA personalizadas que impulsionam o crescimento.'}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <ButtonCTA>
                {t('hero.primaryCTA') || 'Explorar Serviços'}
              </ButtonCTA>
            </Link>
            <Link href="/contact">
              <ButtonCTA secondary>
                {t('hero.secondaryCTA') || 'Fale Conosco'}
              </ButtonCTA>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decoração inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
