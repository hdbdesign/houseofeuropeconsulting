import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import ButtonCTA from '@/components/ui/ButtonCTA';
import { Helmet } from 'react-helmet';
import { Mail, MapPin, Calendar, ArrowRight, MessageSquare, Building, Users2, Rocket } from 'lucide-react';
import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import PageHero from '@/components/ui/PageHero';

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
      
      <PageHero
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        description={t('contact.hero.description')}
        subtitleColor="#FF601A"
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
        
        {/* Seção de Contato Principal */}
        <section className="py-16 relative" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-black/40 backdrop-blur-xl border border-[#25C9BA]/20 rounded-lg p-8"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Informações Básicas */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-4">Informações Básicas</h3>
                    
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Nome Completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-[#25C9BA]/20 rounded-md px-4 py-2 text-white focus:border-[#25C9BA] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-[#25C9BA]/20 rounded-md px-4 py-2 text-white focus:border-[#25C9BA] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-gray-300 mb-2">Empresa (se aplicável)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-[#25C9BA]/20 rounded-md px-4 py-2 text-white focus:border-[#25C9BA] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Serviço e Agendamento */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-4">Serviço e Agendamento</h3>

                    <div>
                      <label htmlFor="service" className="block text-gray-300 mb-2">Serviço de Interesse</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-[#25C9BA]/20 rounded-md px-4 py-2 text-white focus:border-[#25C9BA] focus:outline-none"
                        required
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="expansao-internacional">Expansão Internacional (GlobalAccess)</option>
                        <option value="pesquisa-mercado">Pesquisa de Mercado Estratégica (DataPulse)</option>
                        <option value="consultoria-migratoria">Consultoria Migratória (SecureLink)</option>
                        <option value="mentoria-carreira">Mentoria Profissional e Carreira (TalentForge)</option>
                        <option value="transformacao-digital">Transformação Digital e Marketing</option>
                        <option value="incentivos-pd">Incentivos para P&D e Inovação</option>
                      </select>
                    </div>
                        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferredDate" className="block text-gray-300 mb-2">Data Preferida</label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-[#25C9BA]/20 rounded-md px-4 py-2 text-white focus:border-[#25C9BA] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="preferredTime" className="block text-gray-300 mb-2">Horário Preferido</label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-[#25C9BA]/20 rounded-md px-4 py-2 text-white focus:border-[#25C9BA] focus:outline-none"
                        >
                          <option value="">Selecione um horário</option>
                          <option value="morning">Manhã (9h - 12h)</option>
                          <option value="afternoon">Tarde (13h - 17h)</option>
                          <option value="evening">Noite (18h - 20h)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Sua Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-black/50 border border-[#25C9BA]/20 rounded-md px-4 py-2 text-white focus:border-[#25C9BA] focus:outline-none"
                      required
                    ></textarea>
                  </div>

                  {/* Botão de Envio */}
                  <ButtonCTA
                    type="submit"
                    className="w-full bg-[#FF601A] text-white hover:bg-[#FF601A]/90"
                  >
                    Enviar Mensagem <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                  </ButtonCTA>
                </form>
              </motion.div>

              {/* Informações de Contato e Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Card de Informações de Contato */}
                <div className="bg-black/40 backdrop-blur-xl border border-[#25C9BA]/20 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-[#25C9BA] mt-1" />
                      <div>
                        <h4 className="text-white font-medium">E-mail</h4>
                        <p className="text-gray-300">info@houseofeuropeconsulting.de</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-[#25C9BA] mt-1" />
                      <div>
                        <h4 className="text-white font-medium">Endereço</h4>
                        <p className="text-gray-300">Köln, NRW - Alemanha</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Calendar className="w-6 h-6 text-[#25C9BA] mt-1" />
                      <div>
                        <h4 className="text-white font-medium">Horário de Atendimento</h4>
                        <p className="text-gray-300">Segunda a Sexta: 9h - 18h (CET)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card de Destaque */}
                <div className="bg-gradient-to-br from-[#25C9BA]/10 to-[#FD1647]/10 backdrop-blur-xl border border-[#25C9BA]/20 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Por que Escolher a House of Europe Consulting?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-300">
                      <span className="text-[#25C9BA] mr-3">•</span>
                      Expertise no mercado alemão e europeu
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-[#25C9BA] mr-3">•</span>
                      Suporte personalizado em português
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-[#25C9BA] mr-3">•</span>
                      Soluções completas para sua expansão
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="text-[#25C9BA] mr-3">•</span>
                      Acompanhamento em todas as etapas
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Seção Final CTA */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                Pronto para Começar sua Jornada na Europa?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nossa equipe está pronta para ajudar você a alcançar seus objetivos
              </p>
              <ButtonCTA
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#FF601A] text-white hover:bg-[#FF601A]/90"
              >
                Fale Conosco Agora <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </ButtonCTA>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ContactPage;
