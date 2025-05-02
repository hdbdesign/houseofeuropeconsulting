import { motion } from 'framer-motion';
import ButtonCTA from '../ui/ButtonCTA';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const ResultsSection = () => {
  const { t } = useTranslation();
  const results = t('resultsSection.cards', { returnObjects: true }) as Array<{
    title: string;
    description: string[];
    client: string;
  }>;

  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[];

  if (!Array.isArray(results)) {
    console.error('Results is not an array:', results);
    return null;
  }

  if (!Array.isArray(testimonials)) {
    console.error('Testimonials is not an array:', testimonials);
    return null;
  }

  return (
    <section className="pt-0 pb-24 bg-[#021C26] overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-66.67%);
            }
          }

          .scroll-container {
            display: flex;
            width: fit-content;
            animation: scroll 50s linear infinite;
            padding: 0.5rem 0;
            margin-top: 0;
          }

          .scroll-container:hover {
            animation-play-state: paused;
          }

          .result-card {
            background: rgba(37,201,186,0.01);
            backdrop-filter: blur(4px);
            transition: all 0.3s ease;
            margin: 0 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-top: 3px solid #25C9BA;
          }

          .result-card:hover {
            background: rgba(37,201,186,0.04);
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
            border-top-color: #FF6014;
          }

          .results-block {
            background: #010D12;
            background-image: radial-gradient(rgba(37, 201, 186, 0.15) 1px, transparent 1px);
            background-size: 30px 30px;
            height: 2200px;
            width: 100vw;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8rem;
            z-index: 1;
          }

          .results-block::before {
            content: '';
            position: absolute;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            width: 800px;
            height: 400px;
            background: radial-gradient(ellipse at center, rgba(37,201,186,0.18) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
          }
        `}
      </style>

      <div className="results-block">
        {/* Focos de luz nos cantos */}
        <div className="absolute bottom-[30rem] -left-32 w-[200px] h-[200px] bg-[#25C9BA]/40 rounded-full blur-[40px] -z-1" />
        <div className="absolute bottom-[30rem] -right-32 w-[200px] h-[200px] bg-[#25C9BA]/40 rounded-full blur-[40px] -z-1" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-bold text-[#FF6014]">{t('resultsSection.title')}</span>
            <span className="text-white">{t('resultsSection.titleRest')}</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl">
            {t('resultsSection.subtitle')}
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden mt-12">
          <div className="scroll-container">
            {/* Primeiro conjunto de cards */}
            {results.map((result, index) => (
              <ButtonCTA
                key={`${index}-1`}
                secondary
                className="result-card flex-shrink-0 w-[360px] p-8 rounded-xl flex flex-col items-start text-left cursor-pointer relative"
                style={{ minHeight: 240 }}
              >
                <div className="min-h-[2.75rem] flex items-center mb-6">
                  <h3 className="text-[#25C9BA] text-base font-medium leading-tight text-left w-full">
                    {result.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1 mb-6">
                  {result.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <span className="text-[#FF6014] text-[10px] font-normal absolute left-8 bottom-6">
                  {result.client}
                </span>
              </ButtonCTA>
            ))}
            
            {/* Segundo conjunto de cards */}
            {results.map((result, index) => (
              <ButtonCTA
                key={`${index}-2`}
                secondary
                className="result-card flex-shrink-0 w-[360px] p-8 rounded-xl flex flex-col items-start text-left cursor-pointer relative"
                style={{ minHeight: 240 }}
              >
                <div className="min-h-[2.75rem] flex items-center mb-6">
                  <h3 className="text-[#25C9BA] text-base font-medium leading-tight text-left w-full">
                    {result.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1 mb-6">
                  {result.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <span className="text-[#FF6014] text-[10px] font-normal absolute left-8 bottom-6">
                  {result.client}
                </span>
              </ButtonCTA>
            ))}

            {/* Terceiro conjunto de cards */}
            {results.map((result, index) => (
              <ButtonCTA
                key={`${index}-3`}
                secondary
                className="result-card flex-shrink-0 w-[360px] p-8 rounded-xl flex flex-col items-start text-left cursor-pointer relative"
                style={{ minHeight: 240 }}
              >
                <div className="min-h-[2.75rem] flex items-center mb-6">
                  <h3 className="text-[#25C9BA] text-base font-medium leading-tight text-left w-full">
                    {result.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1 mb-6">
                  {result.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <span className="text-[#FF6014] text-[10px] font-normal absolute left-8 bottom-6">
                  {result.client}
                </span>
              </ButtonCTA>
            ))}
          </div>
        </div>
        {/* Título abaixo dos cards */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-16">
          <h3 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl text-center">
            {t('testimonials.titleStart')} <span className="font-bold text-[#FF6014]">{t('testimonials.titleHighlight')}</span> {t('testimonials.titleEnd')}
          </h3>
          <p className="text-gray-400 text-xl md:text-2xl text-center mt-4 max-w-5xl whitespace-nowrap">
            {t('testimonials.subtitle')}
          </p>
        </div>
        {/* Depoimento destacado abaixo dos cards */}
        <div className="w-full flex flex-col items-center justify-center">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="max-w-6xl w-full"
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <SwiperSlide key={index}>
                <blockquote className="bg-[#021C26]/80 p-8 rounded-2xl border-l-4 border-[#25C9BA] max-w-lg mx-auto text-gray-200 italic text-base text-center shadow-lg min-h-[600px] flex flex-col justify-center h-full">
                  {testimonial.quote}
                  <footer className="mt-4 not-italic text-[#25C9BA] text-sm">
                    <strong className="text-white">{testimonial.author}</strong><br />
                    {testimonial.role}
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection; 