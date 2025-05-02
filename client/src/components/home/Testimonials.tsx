import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  const goToPrev = () => setCurrentIndex(prevIndex);
  const goToNext = () => setCurrentIndex(nextIndex);

  return (
    <section className="pt-10 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center max-w-3xl mx-auto">
          {/* Seta esquerda */}
          <button
            onClick={goToPrev}
            className="absolute left-0 z-20 p-2 rounded-full bg-[#021C26]/80 hover:bg-[#FF6B00]/80 text-[#FF6B00] transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div className="flex w-full items-center justify-center relative h-[260px] md:h-[220px] gap-x-16">
            {/* Depoimento anterior (parcial) */}
            <motion.div
              key={prevIndex}
              initial={{ opacity: 0, scale: 0.6, x: -160 }}
              animate={{ opacity: 0.15, scale: 0.7, x: -160 }}
              exit={{ opacity: 0, scale: 0.6, x: -160 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block absolute left-0 w-1/3 max-w-xs pointer-events-none"
              style={{ zIndex: 10 }}
            >
              <blockquote className="bg-[#021C26]/60 p-2 rounded-2xl border border-gray-800 italic text-gray-400 text-[10px] h-full flex flex-col justify-center">
                {testimonials[prevIndex].quote}
                <footer className="mt-2 text-gray-500 not-italic text-[10px]">
                  <strong className="text-gray-300">{testimonials[prevIndex].author}</strong>
                  <br />
                  {testimonials[prevIndex].role}
                </footer>
              </blockquote>
            </motion.div>

            {/* Depoimento central */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, x: 0 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-20 w-full max-w-3xl mx-auto"
              >
                <blockquote className="bg-[#021C26]/80 p-8 rounded-2xl border border-gray-800 border-l-4 border-l-[#FF6B00] italic text-gray-400 text-xs md:text-sm shadow-lg h-full flex flex-col justify-center">
                  {testimonials[currentIndex].quote}
                  <footer className="mt-2 text-gray-500 not-italic text-xs">
                    <strong className="text-gray-300">{testimonials[currentIndex].author}</strong>
                    <br />
                    {testimonials[currentIndex].role}
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Depoimento próximo (parcial) */}
            <motion.div
              key={nextIndex}
              initial={{ opacity: 0, scale: 0.6, x: 160 }}
              animate={{ opacity: 0.15, scale: 0.7, x: 160 }}
              exit={{ opacity: 0, scale: 0.6, x: 160 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block absolute right-0 w-1/3 max-w-xs pointer-events-none"
              style={{ zIndex: 10 }}
            >
              <blockquote className="bg-[#021C26]/60 p-2 rounded-2xl border border-gray-800 italic text-gray-400 text-[10px] h-full flex flex-col justify-center">
                {testimonials[nextIndex].quote}
                <footer className="mt-2 text-gray-500 not-italic text-[10px]">
                  <strong className="text-gray-300">{testimonials[nextIndex].author}</strong>
                  <br />
                  {testimonials[nextIndex].role}
                </footer>
              </blockquote>
            </motion.div>
          </div>

          {/* Seta direita */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-20 p-2 rounded-full bg-[#021C26]/80 hover:bg-[#FF6B00]/80 text-[#FF6B00] transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Indicadores de navegação */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#FF6B00]' : 'bg-gray-600'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 