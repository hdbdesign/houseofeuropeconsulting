import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ServicesCarousel from '@/components/home/ServicesCarousel';
import Testimonials from '@/components/home/Testimonials';
import FooterCTA from '@/components/cta/FooterCTA';
import StatsSection from '@/components/stats/StatsSection';
import { Helmet } from 'react-helmet';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'wouter';
import ButtonCTA from '@/components/ui/ButtonCTA';
import { useEffect, useState, useRef } from 'react';
import Hero from '@/components/home/Hero';
import FAQ from '@/components/home/FAQ';
import ProcessSection from '@/components/home/ProcessSection';
import ResultsSection from '@/components/home/ResultsSection';

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
const TypeWriter = ({ words, speed = 100, eraseSpeed = 70, delayBetween = 2000 }: { 
  words: string[]; 
  speed?: number; 
  eraseSpeed?: number; 
  delayBetween?: number;
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [delta, setDelta] = useState(speed);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
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
  const { t, i18n } = useTranslation();
  
  // Lista de serviços para o efeito de digitação
  const services = [
    t('services.items.expansion.title'),
    t('services.items.market.title'),
    t('services.items.migration.title'),
    t('services.items.career.title'),
    t('services.items.digital.title')
  ];
  
  // Atualizar o título quando o idioma mudar
  useEffect(() => {
    document.title = t('meta.home.title');
  }, [i18n.language, t]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>House of Europe Consulting - Sua porta de entrada para o mercado europeu</title>
        <meta name="description" content="Consultoria especializada para empresas e profissionais brasileiros que desejam expandir para a Europa" />
        <style>
          {`
          .typing-cursor {
            display: inline-block;
            width: 2px;
            background-color: #25C9BA;
            animation: blink 1s infinite;
          }
          
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          `}
        </style>
      </Helmet>
      
      <Hero />
      <ServicesCarousel />
      <ProcessSection />
      <ResultsSection />
      <Testimonials />
      <FAQ />
      <FooterCTA />
    </motion.div>
  );
};

export default HomePage;
