import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { testimonialImages } from '@/config/imageUrls';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      imageUrl: testimonialImages.client1,
      nameKey: 'testimonials.client1.name',
      companyKey: 'testimonials.client1.company',
      contentKey: 'testimonials.client1.content',
      stars: 5,
      delay: 0.1,
      companyLogoUrl: testimonialImages.logo1 || '',
      location: 'testimonials.client1.location',
    },
    {
      id: 2,
      imageUrl: testimonialImages.client2,
      nameKey: 'testimonials.client2.name',
      companyKey: 'testimonials.client2.company',
      contentKey: 'testimonials.client2.content',
      stars: 5,
      delay: 0.2,
      companyLogoUrl: testimonialImages.logo2 || '',
      location: 'testimonials.client2.location',
    },
    {
      id: 3,
      imageUrl: testimonialImages.client3,
      nameKey: 'testimonials.client3.name',
      companyKey: 'testimonials.client3.company',
      contentKey: 'testimonials.client3.content',
      stars: 5,
      delay: 0.3,
      companyLogoUrl: testimonialImages.logo3 || '',
      location: 'testimonials.client3.location',
    },
    {
      id: 4,
      imageUrl: testimonialImages.client1, // Reuse image for demo
      nameKey: 'testimonials.client4.name',
      companyKey: 'testimonials.client4.company',
      contentKey: 'testimonials.client4.content',
      stars: 5,
      delay: 0.4,
      companyLogoUrl: testimonialImages.logo1 || '',
      location: 'testimonials.client4.location',
    },
    {
      id: 5,
      imageUrl: testimonialImages.client2, // Reuse image for demo
      nameKey: 'testimonials.client5.name',
      companyKey: 'testimonials.client5.company',
      contentKey: 'testimonials.client5.content',
      stars: 5,
      delay: 0.5,
      companyLogoUrl: testimonialImages.logo2 || '',
      location: 'testimonials.client5.location',
    },
  ];

  // Function to navigate through testimonials
  const navigateTo = (index: number) => {
    if (index < 0) {
      setActiveIndex(testimonials.length - 1);
    } else if (index >= testimonials.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mb-32"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="text-center mb-16" 
            variants={itemVariants} 
            custom={0}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('testimonials.subtitle')}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 dark:text-white mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              {t('testimonials.description')}
            </p>
          </motion.div>
          
          {/* Featured Testimonial Carousel */}
          <div className="mb-16">
            <div className="relative">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                key={activeIndex} // Force re-render on index change
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Background Quote Icon */}
                <div className="absolute -top-6 -right-6 text-gray-100 dark:text-gray-700 opacity-40">
                  <Quote className="w-32 h-32" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                  {/* Client Info - First 2 columns on desktop */}
                  <div className="md:col-span-2 flex flex-col justify-center items-center md:items-start">
                    <div className="mb-6 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white dark:border-gray-700 shadow-lg overflow-hidden">
                      <img 
                        src={testimonials[activeIndex].imageUrl}
                        alt={t(testimonials[activeIndex].nameKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl mb-1 text-center md:text-left">
                      {t(testimonials[activeIndex].nameKey)}
                    </h3>
                    <p className="text-primary font-medium mb-2 text-center md:text-left">
                      {t(testimonials[activeIndex].companyKey)}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 text-center md:text-left">
                      {t(testimonials[activeIndex].location)}
                    </p>
                    
                    <div className="flex mb-4">
                      {Array.from({ length: testimonials[activeIndex].stars }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {testimonials[activeIndex].companyLogoUrl && (
                      <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <img 
                          src={testimonials[activeIndex].companyLogoUrl}
                          alt={t(testimonials[activeIndex].companyKey)}
                          className="h-8 w-auto opacity-80"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Testimonial Content - Last 3 columns on desktop */}
                  <div className="md:col-span-3">
                    <blockquote>
                      <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed italic mb-8">
                        "{t(testimonials[activeIndex].contentKey)}"
                      </p>
                    </blockquote>
                    
                    {/* Navigation Controls */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {activeIndex + 1} / {testimonials.length}
                      </p>
                      
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => navigateTo(activeIndex - 1)}
                          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
                          aria-label="Previous testimonial"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => navigateTo(activeIndex + 1)}
                          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
                          aria-label="Next testimonial"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Client Logos Grid */}
          <motion.div 
            className="mt-16"
            variants={itemVariants}
            custom={0.6}
          >
            <h3 className="text-center font-medium text-gray-500 dark:text-gray-400 mb-8">
              {t('testimonials.trustedBy')}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {/* Placeholder for client logos */}
                  <div className="bg-gray-200 dark:bg-gray-700 h-12 w-24 md:w-32 rounded flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">Client {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
