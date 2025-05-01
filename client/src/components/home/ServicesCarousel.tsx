import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Building2, Search, Plane, GraduationCap, Globe, ArrowRight, Languages, Store } from 'lucide-react';
import ButtonCTA from '../ui/ButtonCTA';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Adicionando estilos customizados para as setas de navegação
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #25C9BA;
    background: rgba(37, 201, 186, 0.1);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(37, 201, 186, 0.2);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ServicesCarousel = () => {
  const { t } = useTranslation();

  const serviceIcons = {
    expansion: <Building2 className="w-12 h-12" />,
    market: <Search className="w-12 h-12" />,
    migration: <Plane className="w-12 h-12" />,
    career: <GraduationCap className="w-12 h-12" />,
    digital: <Globe className="w-12 h-12" />,
    translation: <Languages className="w-12 h-12" />,
    fairs: <Store className="w-12 h-12" />
  };

  const services = [
    {
      id: 'expansion',
      icon: serviceIcons.expansion,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/expansion'
    },
    {
      id: 'market',
      icon: serviceIcons.market,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/market'
    },
    {
      id: 'migration',
      icon: serviceIcons.migration,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/migration'
    },
    {
      id: 'career',
      icon: serviceIcons.career,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/career'
    },
    {
      id: 'digital',
      icon: serviceIcons.digital,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/digital'
    },
    {
      id: 'translation',
      icon: serviceIcons.translation,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/translation'
    },
    {
      id: 'fairs',
      icon: serviceIcons.fairs,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/fairs'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#021C26] overflow-hidden relative">
      {/* Gradientes de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#25C9BA]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#25C9BA]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <style>{swiperStyles}</style>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#25C9BA] mb-6">
            {t('services.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            {t('services.description')}
          </p>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={800}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full py-12"
        >
          {services.map((service) => (
            <SwiperSlide
              key={service.id}
              className="w-[450px] bg-[#021C26]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(37,201,186,0.2)",
                  borderColor: "#25C9BA"
                }}
                className="relative h-[620px] p-6 md:p-8 rounded-2xl border group transition-all duration-300 backdrop-blur-sm hover:bg-[#021C26]/80"
                style={{
                  borderColor: service.color,
                  backgroundColor: `${service.color}0A`,
                }}
              >
                <div 
                  className="flex justify-center -mt-16 mb-8 md:mb-10"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div 
                      className="rounded-2xl p-6 bg-[#021C26] border-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,201,186,0.3)]"
                      style={{ borderColor: service.color }}
                    >
                      <div style={{ color: service.color }}>
                        {service.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="text-center">
                  <motion.h3 
                    className="font-heading font-bold text-xl md:text-2xl mb-3 md:mb-4 min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center"
                    style={{ color: service.color }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {t(`services.items.${service.id}.title`)}
                  </motion.h3>
                  
                  <p className="text-gray-300 text-base mb-6 md:mb-8 transition-all duration-300 group-hover:text-white min-h-[4.5rem] md:min-h-[5.5rem]">
                    {t(`services.items.${service.id}.description`)}
                  </p>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-16 md:mb-20">
                  {service.id === 'translation' || service.id === 'fairs' 
                    ? (t(`services.items.${service.id}.shortFeatures`, { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center text-gray-300 text-sm md:text-base group-hover:text-white transition-all duration-300"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.span 
                          className="mr-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                          whileHover={{ scale: 1.5 }}
                        ></motion.span>
                        <span className="leading-snug">{feature}</span>
                      </motion.li>
                    ))
                    : (t(`services.items.${service.id}.features`, { returnObjects: true }) as string[]).slice(0, 3).map((feature: string, index: number) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center text-gray-300 text-sm md:text-base group-hover:text-white transition-all duration-300"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.span 
                          className="mr-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                          whileHover={{ scale: 1.5 }}
                        ></motion.span>
                        <span className="leading-snug">{feature}</span>
                      </motion.li>
                    ))
                  }
                </ul>

                <div className="absolute bottom-8 left-8 right-8">
                  <Link href={service.link} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = service.link;
                  }}>
                    <ButtonCTA 
                      secondary 
                      className="w-full transition-all duration-300 text-base md:text-lg py-3 md:py-4 group-hover:scale-105"
                      style={{ 
                        borderColor: "#25C9BA",
                        backgroundColor: "#25C9BA",
                        color: "#FFFFFF"
                      }}
                    >
                      {t('services.learnMore')} <ArrowRight className="ml-2 h-5 w-5 inline-block align-middle group-hover:translate-x-2 transition-transform duration-300" />
                    </ButtonCTA>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/services">
            <ButtonCTA className="bg-[#FF601A] text-white hover:bg-[#FF601A]/90 text-base md:text-lg px-8 md:px-12 py-3 md:py-4">
              {t('services.viewAll')} <ArrowRight className="ml-2 h-5 w-5 inline-block align-middle group-hover:translate-x-1 transition-transform duration-300" />
            </ButtonCTA>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCarousel; 