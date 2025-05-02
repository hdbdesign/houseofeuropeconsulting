import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import ButtonCTA from '@/components/ui/ButtonCTA';
import { Helmet } from 'react-helmet';
import { Mail, MapPin, Calendar, ArrowRight, MessageSquare, Building, Users2, Rocket } from 'lucide-react';
import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import FooterCTA from '@/components/ui/FooterCTA';

const ContactPage = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [location] = useLocation();
  const [selectedService, setSelectedService] = useState('');
  const [activeSection, setActiveSection] = useState('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    howFound: '',
    budget: '',
    timeline: '',
    specificNeeds: ''
  });

  // Extrair o serviço da URL quando a página carregar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service) {
      setSelectedService(service);
      setFormData(prev => ({ ...prev, service }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (data: any) => {
    console.log(data);
    // Aqui você pode adicionar a lógica de envio do formulário
  };

  const features = [
    {
      icon: <MessageSquare className="w-12 h-12 text-[#25C9BA]" />,
      title: "Atendimento Personalizado",
      description: "Nossa equipe está pronta para entender suas necessidades específicas e oferecer soluções sob medida."
    },
    {
      icon: <Building className="w-12 h-12 text-[#25C9BA]" />,
      title: "Expertise Local",
      description: "Conhecimento profundo do mercado alemão e europeu para guiar sua expansão com segurança."
    },
    {
      icon: <Users2 className="w-12 h-12 text-[#25C9BA]" />,
      title: "Time Multicultural",
      description: "Profissionais bilíngues com experiência em negócios internacionais."
    },
    {
      icon: <Rocket className="w-12 h-12 text-[#25C9BA]" />,
      title: "Soluções Inovadoras",
      description: "Abordagem moderna e tecnológica para impulsionar seu sucesso na Europa."
    }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{t('meta.contact.title')}</title>
        <meta name="description" content={t('meta.contact.description')} />
      </Helmet>
      
      <Hero 
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        subtitleHighlight={t('contact.hero.subtitleHighlight')}
        description={t('contact.hero.description')}
      />
      
      <div className="min-h-screen bg-black">
        {/* Seção de Features */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
              <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-xl border border-[#25C9BA]/20 rounded-lg p-6 hover:border-[#25C9BA]/40 transition-all"
                >
                  <div className="mb-4">
                    {feature.icon}
                </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
              </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <FooterCTA />
      </div>
    </motion.div>
  );
};

export default ContactPage;
