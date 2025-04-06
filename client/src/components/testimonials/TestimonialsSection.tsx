import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { testimonialImages } from '@/config/imageUrls';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useTranslation();

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
    }
  ];

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
    <section className="py-16 md:py-24 bg-neutralLight">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants} custom={0}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6"
              variants={itemVariants}
              custom={testimonial.delay}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 85, 164, 0.1)" }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                {t(testimonial.contentKey)}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.imageUrl}
                  alt={t(testimonial.nameKey)}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-heading font-semibold">{t(testimonial.nameKey)}</h4>
                  <p className="text-gray-500 text-sm">{t(testimonial.companyKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
