import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import ButtonCTA from '../ui/ButtonCTA';

// Projetos do portfólio com imagens de alta qualidade
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'portfolio.items.1.title',
    category: 'portfolio.categories.branding',
    description: 'portfolio.items.1.description',
    image: '/images/portfolio/branding-project.jpg',
    link: '/portfolio/branding-identity',
    delay: 0.1
  },
  {
    id: 2,
    title: 'portfolio.items.2.title',
    category: 'portfolio.categories.design',
    description: 'portfolio.items.2.description',
    image: '/images/portfolio/ecommerce-project.jpg',
    link: '/portfolio/ecommerce-platform',
    delay: 0.2
  },
  {
    id: 3,
    title: 'portfolio.items.3.title',
    category: 'portfolio.categories.video',
    description: 'portfolio.items.3.description',
    image: '/images/portfolio/video-project.jpg',
    link: '/portfolio/global-campaign',
    delay: 0.3
  }
];

const FeaturedWork = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
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
            {t('portfolio.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((project) => (
            <motion.div 
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.delay }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-[#00FFFF]/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Image container */}
                <div className="relative">
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 flex flex-col justify-center items-center p-6">
                    <h3 className="font-heading font-bold text-xl text-[#00FFFF] mb-2">
                      {t(project.title)}
                    </h3>
                    <span className="text-white/80 text-sm mb-4 px-3 py-1 rounded-full bg-[#00FFFF]/20">
                      {t(project.category)}
                    </span>
                    <p className="text-gray-300 text-center mb-6 line-clamp-3">
                      {t(project.description)}
                    </p>
                    <Link href={project.link}>
                      <ButtonCTA secondary className="px-4 py-2 text-sm border-[#00FFFF]/50">
                        {t('portfolio.viewProject')} <ExternalLink className="ml-2 h-4 w-4" />
                      </ButtonCTA>
                    </Link>
                  </div>
                  
                  <img 
                    src={project.image || 'https://via.placeholder.com/800x600?text=Digital+Project'} 
                    alt={t(project.title)}
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/portfolio">
            <ButtonCTA secondary className="border border-[#00FFFF]/30 hover:border-[#00FFFF] text-[#00FFFF]">
              {t('portfolio.viewAllButton')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </ButtonCTA>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork; 