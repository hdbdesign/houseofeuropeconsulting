import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      id: 1,
      value: '500+',
      label: 'home.stats.clients',
      icon: <Users className="h-8 w-8 text-[#00FFFF]" />,
      delay: 0.1
    },
    {
      id: 2,
      value: '50+',
      label: 'home.stats.countries',
      icon: <Globe className="h-8 w-8 text-[#00FFFF]" />,
      delay: 0.2
    },
    {
      id: 3,
      value: '15+',
      label: 'home.stats.years',
      icon: <Award className="h-8 w-8 text-[#00FFFF]" />,
      delay: 0.3
    },
    {
      id: 4,
      value: '95%',
      label: 'home.stats.satisfaction',
      icon: <TrendingUp className="h-8 w-8 text-[#00FFFF]" />,
      delay: 0.4
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
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
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            {t('home.stats.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            {t('home.stats.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              <div className="absolute -inset-0.5 bg-[#00FFFF]/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-full bg-gray-900/70 backdrop-blur-sm border border-[#00FFFF]/20 group-hover:border-[#00FFFF]/50 rounded-lg p-8 transition-all text-center">
                <div className="flex justify-center mb-6">
                  {stat.icon}
                </div>
                
                <h3 className="font-heading font-bold text-4xl md:text-5xl mb-2 text-[#00FFFF]">
                  {stat.value}
                </h3>
                
                <p className="text-gray-300">
                  {t(stat.label)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 