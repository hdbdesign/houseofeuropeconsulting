import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { testimonialImages } from '@/config/imageUrls';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      imageUrl: testimonialImages.client1,
      nameKey: 'testimonials.client1.name',
      companyKey: 'testimonials.client1.company',
      contentKey: 'testimonials.client1.content',
      stars: 5,
      delay: 0.1,
    },
    {
      id: 2,
      imageUrl: testimonialImages.client2,
      nameKey: 'testimonials.client2.name',
      companyKey: 'testimonials.client2.company',
      contentKey: 'testimonials.client2.content',
      stars: 5,
      delay: 0.2,
    },
    {
      id: 3,
      imageUrl: testimonialImages.client3,
      nameKey: 'testimonials.client3.name',
      companyKey: 'testimonials.client3.company',
      contentKey: 'testimonials.client3.content',
      stars: 5,
      delay: 0.3,
    },
    {
      id: 4,
      imageUrl: testimonialImages.client1, // Reuse image for demo
      nameKey: 'testimonials.client1.name',
      companyKey: 'testimonials.client1.company',
      contentKey: 'testimonials.client1.content',
      stars: 5,
      delay: 0.4,
    },
    {
      id: 5,
      imageUrl: testimonialImages.client2, // Reuse image for demo
      nameKey: 'testimonials.client2.name',
      companyKey: 'testimonials.client2.company',
      contentKey: 'testimonials.client2.content',
      stars: 5,
      delay: 0.5,
    },
  ];

  // Auto-carousel effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!animating) {
        navigateTo((activeIndex + 1) % testimonials.length);
      }
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [activeIndex, animating]);

  // Function to navigate through testimonials
  const navigateTo = (index: number) => {
    setAnimating(true);
    if (index < 0) {
      setActiveIndex(testimonials.length - 1);
    } else if (index >= testimonials.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
    
    // Reset animating state after animation completes
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section className="py-20 md:py-32 bg-black overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#00FFFF] text-sm font-medium tracking-wider mb-3">
              {t('testimonials.subtitle')}
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {t('testimonials.title')}
            </h2>
          </motion.div>
          
          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <motion.div 
              key={activeIndex}
              className="bg-black/30 backdrop-blur-sm border border-[#00FFFF]/20 rounded-2xl overflow-hidden p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote symbol */}
              <div className="absolute top-6 right-8 text-[#00FFFF]/10">
                <Quote size={120} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">
                {/* Client Info & Photo - 4 columns on desktop */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="w-24 h-24 rounded-full border-2 border-[#00FFFF]/30 overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 bg-[#00FFFF]/10"></div>
                    <img 
                      src={testimonials[activeIndex].imageUrl}
                      alt={t(testimonials[activeIndex].nameKey)}
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl mb-2 text-white text-center md:text-left">
                    {t(testimonials[activeIndex].nameKey)}
                  </h3>
                  
                  <p className="text-[#00FFFF] font-medium mb-3 text-center md:text-left">
                    {t(testimonials[activeIndex].companyKey)}
                  </p>
                  
                  <div className="flex space-x-1 mb-4">
                    {Array.from({ length: testimonials[activeIndex].stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#00FFFF] fill-[#00FFFF]" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content - 8 columns on desktop */}
                <div className="md:col-span-8">
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-6">
                    {t(testimonials[activeIndex].contentKey)}
                  </p>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#00FFFF]/10">
                <div className="text-gray-400 text-sm">
                  {activeIndex + 1} / {testimonials.length}
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => !animating && navigateTo(activeIndex - 1)}
                    className="p-2 rounded-full bg-black/50 border border-[#00FFFF]/20 hover:bg-[#00FFFF]/20 text-[#00FFFF] transition-colors duration-300"
                    aria-label="Previous testimonial"
                    disabled={animating}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => !animating && navigateTo(activeIndex + 1)}
                    className="p-2 rounded-full bg-black/50 border border-[#00FFFF]/20 hover:bg-[#00FFFF]/20 text-[#00FFFF] transition-colors duration-300"
                    aria-label="Next testimonial"
                    disabled={animating}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Indicator Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !animating && navigateTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 bg-[#00FFFF]' 
                      : 'w-2 bg-[#00FFFF]/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Company Logos - Optional */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-widest">
                {t('hero.trusted')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="grayscale hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <img 
                    src={`/clients/client-${i + 1}.svg`} 
                    alt={`Client ${i + 1}`} 
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FFFF]/50 to-transparent"></div>
    </section>
  );
};

export default TestimonialsSection;
