import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { businessImages } from '@/config/imageUrls';

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

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="w-full md:w-1/2 text-center md:text-left" variants={itemVariants}>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <motion.a 
                  className="px-8 py-3 bg-primary hover:bg-primaryDark text-white font-ui font-medium rounded-md transition-colors duration-300 shadow-md inline-block"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('hero.primaryBtn')}
                </motion.a>
              </Link>
              <Link href="/contact">
                <motion.a 
                  className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white font-ui font-medium rounded-md transition-colors duration-300 inline-block"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('hero.secondaryBtn')}
                </motion.a>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
            variants={itemVariants}
          >
            <motion.img 
              src={businessImages.hero}
              alt="International business team"
              className="rounded-lg shadow-xl w-full max-w-lg object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
