import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { CodeIcon, GlobeIcon, BrainCircuitIcon, RocketIcon, ZapIcon } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const gradientClasses = "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500";

  return (
    <section className="relative min-h-screen bg-background dark:bg-gray-900 overflow-hidden flex items-center justify-center py-16">
      {/* Background animated elements - enhanced blur effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-300/40 dark:bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced icon section with better spacing */}
          <motion.div className="mb-8 flex space-x-6" variants={itemVariants}>
            {[RocketIcon, GlobeIcon, CodeIcon, BrainCircuitIcon, ZapIcon].map((Icon, i) => (
              <motion.div 
                key={i}
                variants={iconVariants}
                className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg backdrop-blur-sm"
                whileHover={{ 
                  y: -15, 
                  rotate: [0, 5, -5, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 } 
                }}
              >
                <Icon size={32} className="text-primary" />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced headline with badge */}
          <motion.div
            className="mb-3"
            variants={itemVariants}
          >
            <span className="inline-block px-4 py-1 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium mb-4">
              House of Digital Business
            </span>
          </motion.div>

          {/* Main headline with improved typography */}
          <motion.h1 
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight"
            variants={itemVariants}
          >
            <span className="block text-foreground dark:text-white">
              {t('hero.title')}
            </span>
            <span className={`block ${gradientClasses} text-transparent bg-clip-text mt-2`}>
              Digital Business
            </span>
          </motion.h1>
          
          {/* Enhanced typewriter effect with better height management */}
          <motion.div 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 h-20 flex items-center justify-center"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                // Português
                'Soluções digitais multilíngues para negócios globais',
                2000,
                // Inglês
                'Multilingual digital solutions for global businesses',
                2000,
                // Alemão
                'Mehrsprachige digitale Lösungen für globale Unternehmen',
                2000,
                // Francês
                'Solutions numériques multilingues pour entreprises mondiales',
                2000,
                // Italiano
                'Soluzioni digitali multilingue per aziende globali',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </motion.div>
          
          {/* Enhanced call-to-action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/services">
                <div 
                  className="px-10 py-4 bg-primary hover:bg-primary/90 text-white font-ui font-medium rounded-xl transition-all duration-300 shadow-lg inline-block text-lg"
                >
                  {t('hero.primaryBtn')}
                </div>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact">
                <div
                  className="px-10 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-ui font-medium rounded-xl transition-all duration-300 inline-block text-lg"
                >
                  {t('hero.secondaryBtn')}
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats section with clearer labels and better contrast */}
          <motion.div 
            className="mt-24 pt-10 border-t border-gray-300/30 dark:border-gray-700/30 w-full max-w-4xl mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 0.6 }
            }}
          >
            <div className="flex flex-col w-full items-center">
              <div className="inline-flex items-center justify-center mb-10 px-5 py-2 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm rounded-full">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-primary-foreground">
                  {t('hero.trusted')}
                </span>
              </div>
              
              <div className="flex justify-around w-full px-4 md:px-10">
                <div className="text-center">
                  <span className="block font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">500+</span>
                  <span className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">{t('hero.stats.projects')}</span>
                </div>
                <div className="text-center">
                  <span className="block font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">50+</span>
                  <span className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">{t('hero.stats.countries')}</span>
                </div>
                <div className="text-center">
                  <span className="block font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 mb-4">98%</span>
                  <span className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">{t('hero.stats.satisfaction')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
