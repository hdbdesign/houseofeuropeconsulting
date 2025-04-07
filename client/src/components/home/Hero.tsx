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
    <section className="relative h-screen bg-background dark:bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Background animated elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300/40 dark:bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6 flex space-x-4" variants={itemVariants}>
            {[RocketIcon, GlobeIcon, CodeIcon, BrainCircuitIcon, ZapIcon].map((Icon, i) => (
              <motion.div 
                key={i}
                variants={iconVariants}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg"
                whileHover={{ 
                  y: -15, 
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 } 
                }}
              >
                <Icon size={28} className="text-primary" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h1 
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            variants={itemVariants}
          >
            <span className="block text-foreground dark:text-white">
              {t('hero.title')}
            </span>
            <span className={`block ${gradientClasses} text-transparent bg-clip-text mt-2`}>
              Digital Business
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 h-16"
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
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <motion.div>
              <Link href="/services">
                <div 
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-ui font-medium rounded-lg transition-colors duration-300 shadow-lg inline-block text-lg"
                >
                  {t('hero.primaryBtn')}
                </div>
              </Link>
            </motion.div>
            
            <motion.div>
              <Link href="/contact">
                <div
                  className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-ui font-medium rounded-lg transition-colors duration-300 inline-block text-lg"
                >
                  {t('hero.secondaryBtn')}
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Clients Logos and Count */}
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 w-full max-w-xl mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 0.6 }
            }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">{t('hero.trusted')}</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <span className="block font-bold text-3xl text-primary">500+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t('hero.stats.projects')}</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-3xl text-primary">50+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t('hero.stats.countries')}</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-3xl text-primary">98%</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t('hero.stats.satisfaction')}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
