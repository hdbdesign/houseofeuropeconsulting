import { motion } from 'framer-motion';
import { Quote, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface CaseStudy {
  title: string;
  description: string;
  results: string[];
  testimonial: Testimonial;
}

const Testimonials = () => {
  const { t } = useTranslation();
  const cases = t('services.successCases.cases', { returnObjects: true }) as CaseStudy[];

  return (
    <section className="py-24 bg-[#021C26] relative overflow-hidden">
      {/* Gradientes de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#25C9BA]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#25C9BA]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#25C9BA] mb-6">
            {t('services.successCases.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('services.successCases.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(37,201,186,0.2)"
              }}
              className="bg-[#021C26]/80 p-8 rounded-2xl border border-gray-800 hover:border-[#25C9BA] transition-all duration-300"
            >
              <Trophy className="w-12 h-12 text-[#FF6B00] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
              <p className="text-gray-300 mb-6">{caseStudy.description}</p>
              
              <ul className="space-y-3 mb-8">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#25C9BA] flex-shrink-0"></span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-4 border-[#25C9BA] pl-4 italic text-gray-400">
                "{caseStudy.testimonial.quote}"
                <footer className="mt-2 text-gray-500 not-italic">
                  <strong className="text-gray-300">{caseStudy.testimonial.author}</strong>
                  <br />
                  {caseStudy.testimonial.role}
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 