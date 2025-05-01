import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Globe, Award, ThumbsUp } from 'lucide-react';

const StatsSection = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      id: 1,
      value: "11+",
      label: "anos de experiência",
      icon: <Award className="w-8 h-8 text-[#25C9BA]" />,
      delay: 0.1
    },
    {
      id: 2,
      value: "15+",
      label: "negociações bem-sucedidas na Europa",
      icon: <Users className="w-8 h-8 text-[#25C9BA]" />,
      delay: 0.2
    },
    {
      id: 3,
      value: "50+",
      label: "países alcançados",
      icon: <Globe className="w-8 h-8 text-[#25C9BA]" />,
      delay: 0.3
    },
    {
      id: 4,
      value: "100%",
      label: "satisfação dos clientes",
      icon: <ThumbsUp className="w-8 h-8 text-[#25C9BA]" />,
      delay: 0.4
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#00FFFF] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 