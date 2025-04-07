import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ExternalLink, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'wouter';
import ButtonCTA from '@/components/ui/ButtonCTA';
import FooterCTA from '@/components/cta/FooterCTA';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Categorias de projetos
const projectCategories = [
  { id: 'all', labelKey: 'portfolio.filters.all' },
  { id: 'branding', labelKey: 'portfolio.filters.branding' },
  { id: 'design', labelKey: 'portfolio.filters.design' },
  { id: 'video', labelKey: 'portfolio.filters.video' },
  { id: 'ai', labelKey: 'portfolio.filters.ai' }
];

// Projetos de exemplo para demonstração
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'portfolio.items.1.title',
    category: 'branding',
    categoryLabel: 'portfolio.categories.branding',
    description: 'portfolio.items.1.description',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=800&auto=format',
    link: '/portfolio/branding-project-1',
    client: 'Portfolio Client 1',
    year: '2023'
  },
  {
    id: 2,
    title: 'portfolio.items.2.title',
    category: 'design',
    categoryLabel: 'portfolio.categories.design',
    description: 'portfolio.items.2.description',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format',
    link: '/portfolio/design-project-1',
    client: 'Portfolio Client 2',
    year: '2023'
  },
  {
    id: 3,
    title: 'portfolio.items.3.title',
    category: 'video',
    categoryLabel: 'portfolio.categories.video',
    description: 'portfolio.items.3.description',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format',
    link: '/portfolio/video-project-1',
    client: 'Portfolio Client 3',
    year: '2022'
  },
  {
    id: 4,
    title: 'portfolio.items.4.title',
    category: 'ai',
    categoryLabel: 'portfolio.categories.ai',
    description: 'portfolio.items.4.description',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format',
    link: '/portfolio/ai-project-1',
    client: 'Portfolio Client 4',
    year: '2022'
  },
  {
    id: 5,
    title: 'portfolio.items.5.title',
    category: 'branding',
    categoryLabel: 'portfolio.categories.branding',
    description: 'portfolio.items.5.description',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format',
    link: '/portfolio/branding-project-2',
    client: 'Portfolio Client 5',
    year: '2021'
  },
  {
    id: 6,
    title: 'portfolio.items.6.title',
    category: 'design',
    categoryLabel: 'portfolio.categories.design',
    description: 'portfolio.items.6.description',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format',
    link: '/portfolio/design-project-2',
    client: 'Portfolio Client 6',
    year: '2021'
  }
];

const PortfolioPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filtrar projetos por categoria e termo de busca
  const filteredProjects = PORTFOLIO_ITEMS.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      t(project.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(project.description).toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>{t('meta.portfolio.title')}</title>
        <meta name="description" content={t('meta.portfolio.description')} />
      </Helmet>
      
      <div className="pt-20 md:pt-24"> {/* Padding to account for fixed header */}
        {/* Hero Section */}
        <section className="relative bg-black overflow-hidden py-20 md:py-32">
          {/* Background effects */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
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
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="font-heading font-bold text-4xl md:text-6xl text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {t('portfolio.heroTitle')}
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 text-lg md:text-xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('portfolio.heroSubtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/contact">
                  <ButtonCTA className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black font-medium px-8 py-4">
                    {t('portfolio.heroButton')} <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </ButtonCTA>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom line effect */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00FFFF]/30"></div>
        </section>
        
        {/* Portfolio Grid Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4 md:mb-0">
                  {t('portfolio.projectsTitle')}
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  {/* Search Bar */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('portfolio.searchPlaceholder')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full sm:w-64 px-4 py-2 pr-10 rounded-md bg-gray-900 border border-[#00FFFF]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00FFFF]/50"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  
                  {/* Mobile Filter Toggle */}
                  <button 
                    className="flex sm:hidden items-center justify-center px-4 py-2 bg-gray-900 border border-[#00FFFF]/20 rounded-md text-white"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {t('portfolio.filters.title')}
                  </button>
                </div>
              </div>
              
              {/* Category Filters - Desktop */}
              <div className="hidden sm:flex items-center justify-center md:justify-start space-x-4 flex-wrap">
                {projectCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedCategory === category.id
                        ? 'bg-[#00FFFF] text-black font-medium'
                        : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {t(category.labelKey)}
                  </button>
                ))}
              </div>
              
              {/* Category Filters - Mobile */}
              {showFilters && (
                <div className="sm:hidden flex flex-wrap gap-2 mt-4">
                  {projectCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-2 rounded-full transition-all ${
                        selectedCategory === category.id
                          ? 'bg-[#00FFFF] text-black font-medium'
                          : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      {t(category.labelKey)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-0.5 bg-[#00FFFF]/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Image container */}
                      <div className="relative">
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 flex flex-col justify-center items-center p-6">
                          <h3 className="font-heading font-bold text-xl text-[#00FFFF] mb-2">
                            {t(project.title)}
                          </h3>
                          <span className="text-white/80 text-sm mb-4">
                            {t(project.categoryLabel)}
                          </span>
                          <p className="text-gray-300 text-center mb-6 line-clamp-3">
                            {t(project.description)}
                          </p>
                          <Link href={project.link}>
                            <a className="inline-flex items-center bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black font-medium px-4 py-2 rounded-md transition-colors">
                              {t('portfolio.viewDetails')} <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Link>
                        </div>
                        
                        {/* Project image */}
                        <img 
                          src={project.image || 'https://via.placeholder.com/600x400?text=Project+Image'} 
                          alt={t(project.title)}
                          className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Category tag */}
                        <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[#00FFFF] border border-[#00FFFF]/20">
                          {t(project.categoryLabel)}
                        </div>
                      </div>
                      
                      {/* Project info */}
                      <div className="bg-gray-900/80 backdrop-blur-sm p-6 border-t border-[#00FFFF]/10">
                        <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00FFFF] transition-colors mb-1 truncate">
                          {t(project.title)}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">
                            {project.client}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {project.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-[#00FFFF]/20">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {t('portfolio.noResults.title')}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {t('portfolio.noResults.description')}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSearchTerm('');
                      }}
                      className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black font-medium px-4 py-2 rounded-md transition-colors"
                    >
                      {t('portfolio.noResults.resetButton')}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Load More Button - Only show if we have projects */}
            {filteredProjects.length > 0 && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ButtonCTA secondary className="border border-[#00FFFF]/30 hover:border-[#00FFFF] text-[#00FFFF]">
                  {t('portfolio.loadMoreButton')}
                </ButtonCTA>
              </motion.div>
            )}
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24 bg-black overflow-hidden relative">
          {/* Background effects */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
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
                {t('portfolio.process.title')}
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">
                {t('portfolio.process.subtitle')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((step) => {
                // Definir cores para cada etapa sem usar indexação numérica
                let bgColor = "bg-cyan-400";
                let textColor = "text-cyan-400";
                
                switch (step) {
                  case 1:
                    bgColor = "bg-cyan-400";
                    textColor = "text-cyan-400";
                    break;
                  case 2:
                    bgColor = "bg-purple-400";
                    textColor = "text-purple-400";
                    break;
                  case 3:
                    bgColor = "bg-emerald-400";
                    textColor = "text-emerald-400";
                    break;
                  case 4:
                    bgColor = "bg-amber-400";
                    textColor = "text-amber-400";
                    break;
                }
                
                return (
                  <motion.div 
                    key={step}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step * 0.1 }}
                  >
                    {/* Step number */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full ${bgColor} text-black flex items-center justify-center font-bold text-xl shadow-lg z-10`}>
                      {step}
                    </div>
                    
                    {/* Content */}
                    <div className="backdrop-blur-sm bg-black/30 rounded-lg p-6 shadow-lg pt-10 h-full border border-[#00FFFF]/20 group-hover:border-[#00FFFF]/50 transition-all">
                      <h3 className={`font-heading font-semibold text-xl mb-3 ${textColor}`}>
                        {t(`portfolio.process.steps.${step}.title`)}
                      </h3>
                      <p className="text-gray-300">
                        {t(`portfolio.process.steps.${step}.description`)}
                      </p>
                    </div>
                    
                    {/* Connector (not for the last item on mobile) */}
                    {step < 4 && (
                      <>
                        <div className={`block md:hidden h-8 w-1 ${bgColor}/40 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full`}></div>
                        <div className={`hidden md:block h-1 w-8 ${bgColor}/40 absolute top-1/2 right-0 transform translate-x-full`}></div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Footer CTA */}
        <FooterCTA />
      </div>
    </motion.div>
  );
};

export default PortfolioPage; 