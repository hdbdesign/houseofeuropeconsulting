import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { testimonialImages } from '@/config/imageUrls';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSlider = () => {
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
      location: 'testimonials.client1.location',
    },
    {
      id: 2,
      imageUrl: testimonialImages.client2,
      nameKey: 'testimonials.client2.name',
      companyKey: 'testimonials.client2.company',
      contentKey: 'testimonials.client2.content',
      stars: 5,
      location: 'testimonials.client2.location',
    },
    {
      id: 3,
      imageUrl: testimonialImages.client3,
      nameKey: 'testimonials.client3.name',
      companyKey: 'testimonials.client3.company',
      contentKey: 'testimonials.client3.content',
      stars: 5,
      location: 'testimonials.client3.location',
    }
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

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
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
            {t('testimonials.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            {t('testimonials.description')}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div 
              className="bg-gray-900/70 backdrop-blur-sm border border-[#00FFFF]/20 rounded-lg p-8 md:p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={activeIndex} // Force re-render on index change
            >
              {/* Background Quote Icon */}
              <div className="absolute -top-6 -right-6 text-[#00FFFF]/10 opacity-40">
                <Quote className="w-32 h-32" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {/* Client Info */}
                <div className="md:col-span-1 flex flex-col items-center md:items-start">
                  <div className="mb-6 w-20 h-20 rounded-full border-2 border-[#00FFFF]/30 shadow-lg overflow-hidden">
                    <img 
                      src={testimonials[activeIndex].imageUrl}
                      alt={t(testimonials[activeIndex].nameKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-1 text-[#00FFFF] text-center md:text-left">
                    {t(testimonials[activeIndex].nameKey)}
                  </h3>
                  <p className="text-white font-medium mb-2 text-center md:text-left">
                    {t(testimonials[activeIndex].companyKey)}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 text-center md:text-left">
                    {t(testimonials[activeIndex].location)}
                  </p>
                  
                  <div className="flex mb-4">
                    {Array.from({ length: testimonials[activeIndex].stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#00FFFF] fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="md:col-span-3">
                  <blockquote>
                    <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                      "{t(testimonials[activeIndex].contentKey)}"
                    </p>
                  </blockquote>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-center items-center mt-8 pt-4 border-t border-[#00FFFF]/10">
                <div className="flex space-x-4">
                  <button 
                    onClick={() => navigateTo(activeIndex - 1)}
                    className="p-2 rounded-full bg-black border border-[#00FFFF]/20 hover:border-[#00FFFF] text-[#00FFFF] transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeIndex === index 
                            ? 'bg-[#00FFFF] w-4' 
                            : 'bg-gray-600 hover:bg-[#00FFFF]/50'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => navigateTo(activeIndex + 1)}
                    className="p-2 rounded-full bg-black border border-[#00FFFF]/20 hover:border-[#00FFFF] text-[#00FFFF] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider; 