import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Trophy } from 'lucide-react';
import ButtonCTA from '../ui/ButtonCTA';

interface CaseStudy {
  title: string;
  description: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  process: {
    title: string;
    steps: string[];
  };
  caseStudies: CaseStudy[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const ServicePage = ({
  title,
  subtitle,
  description,
  icon,
  benefits,
  process,
  caseStudies,
  faqs
}: ServicePageProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#021C26] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#25C9BA]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#25C9BA]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 rounded-2xl bg-[#021C26] border border-gray-800 mb-6">
              <div className="text-[#25C9BA] w-16 h-16">
                {icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              {description}
            </p>
            <Link href="/contact">
              <ButtonCTA className="bg-[#FF601A] text-white hover:bg-[#FF601A]/90">
                Fale Conosco <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </ButtonCTA>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#021C26]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#25C9BA] text-center mb-12">
            Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start p-6 rounded-xl border border-gray-800 bg-[#021C26]/50"
              >
                <CheckCircle2 className="w-6 h-6 text-[#25C9BA] mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#021C26]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#25C9BA] text-center mb-12">
            {process.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            {process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start mb-8 last:mb-0"
              >
                <div className="w-12 h-12 rounded-full bg-[#25C9BA]/10 flex items-center justify-center text-[#25C9BA] font-bold mr-6 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <p className="text-gray-300 text-lg">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#021C26]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#25C9BA] text-center mb-12">
            Casos de Sucesso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl border border-gray-800 bg-[#021C26]/50"
              >
                <Trophy className="w-12 h-12 text-[#25C9BA] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                <ul className="space-y-3 mb-8">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#25C9BA] flex-shrink-0"></span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                {study.testimonial && (
                  <blockquote className="border-l-4 border-[#25C9BA] pl-4 italic text-gray-400">
                    "{study.testimonial.quote}"
                    <footer className="mt-2 text-gray-500 not-italic">
                      <strong className="text-gray-300">{study.testimonial.author}</strong>
                      <br />
                      {study.testimonial.role}
                    </footer>
                  </blockquote>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#021C26]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#25C9BA] text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-8 last:mb-0"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#021C26]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-8">
            Pronto para começar?
          </h2>
          <Link href="/contact">
            <ButtonCTA className="bg-[#FF601A] text-white hover:bg-[#FF601A]/90">
              Agende uma Consultoria Gratuita <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </ButtonCTA>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicePage; 