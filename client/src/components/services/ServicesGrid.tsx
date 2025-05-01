import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Building2, Search, Plane, GraduationCap, Globe, ArrowRight, Microscope } from 'lucide-react';
import ButtonCTA from '../ui/ButtonCTA';

// Interface para diferenciar entre exibição com ou sem preço
interface ServicesGridProps {
  isHomePage?: boolean;
}

const ServicesGrid = ({ isHomePage = false }: ServicesGridProps) => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: "Expansão Internacional (GlobalAccess)",
      description: "Apoio completo para trazer seu negócio à Europa, especialmente Alemanha",
      icon: <Building2 className="w-10 h-10 text-[#25C9BA]" />,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/expansion',
      features: [
        "Avaliação inicial estratégica e análise da viabilidade do negócio",
        "Apoio na escolha da forma jurídica ideal e registro oficial",
        "Orientação tributária e financeira inicial",
        "Assistência com compliance, contratos internacionais e questões jurídicas",
        "Estabelecimento de representação local (escritório virtual, espaço físico ou parceria comercial)"
      ],
      shortFeatures: [
        "Avaliação inicial estratégica e análise da viabilidade do negócio",
        "Apoio na escolha da forma jurídica ideal e registro oficial"
      ],
      delay: 0.1
    },
    {
      id: 2,
      title: "Pesquisa de Mercado Estratégica (DataPulse)",
      description: "Pesquisas detalhadas e análises exclusivas para apoiar suas decisões",
      icon: <Search className="w-10 h-10 text-[#FFFFFF]" />,
      color: "#FFFFFF",
      textColor: "#000000",
      link: '/services/market',
      features: [
        "Análise de mercado e concorrentes detalhada",
        "Estudo completo sobre o comportamento do consumidor europeu",
        "Identificação de oportunidades estratégicas no mercado local",
        "Relatórios personalizados com insights aplicáveis diretamente em sua estratégia"
      ],
      shortFeatures: [
        "Análise de mercado e concorrentes detalhada",
        "Identificação de oportunidades estratégicas no mercado local"
      ],
      delay: 0.2
    },
    {
      id: 3,
      title: "Consultoria Migratória (SecureLink)",
      description: "Todo suporte necessário para facilitar sua transição pessoal e profissional à Europa",
      icon: <Plane className="w-10 h-10 text-[#FFEBD8]" />,
      color: "#FFEBD8",
      textColor: "#000000",
      link: '/services/migration',
      features: [
        "Avaliação individual do melhor visto ou autorização de residência",
        "Preparação e revisão da documentação necessária para imigração",
        "Suporte personalizado durante o processo de imigração (traduções, advogados, protocolos)",
        "Orientação sobre moradia, registro local, saúde, integração cultural e social"
      ],
      shortFeatures: [
        "Avaliação individual do melhor visto ou autorização de residência",
        "Suporte personalizado durante o processo de imigração"
      ],
      delay: 0.3
    },
    {
      id: 4,
      title: "Mentoria Profissional e Carreira (TalentForge)",
      description: "Apoio pessoal e profissional para brasileiros que querem estabelecer uma carreira sólida na Europa",
      icon: <GraduationCap className="w-10 h-10 text-[#25C9BA]" />,
      color: "#25C9BA",
      textColor: "#000000",
      link: '/services/career',
      features: [
        "Coaching individualizado e planos de carreira personalizados",
        "Preparação estratégica para o mercado de trabalho europeu (currículo, entrevistas, networking)",
        "Mentoria contínua para desenvolvimento profissional e crescimento sustentável",
        "Apoio na inserção ao mercado e desenvolvimento de habilidades interculturais"
      ],
      shortFeatures: [
        "Coaching individualizado e planos de carreira personalizados",
        "Preparação estratégica para o mercado de trabalho europeu"
      ],
      delay: 0.4
    },
    {
      id: 5,
      title: "Transformação Digital e Marketing (DigitalBoost & BrandWave)",
      description: "Serviços completos e personalizados para destacar sua marca na Europa",
      icon: <Globe className="w-10 h-10 text-[#FFFFFF]" />,
      color: "#FFFFFF",
      textColor: "#000000",
      link: '/services/digital',
      features: [
        "Desenvolvimento e implementação de estratégias digitais e marketing eficazes",
        "Automação e digitalização do processo comercial para mercados europeus",
        "Apoio estratégico no recrutamento de talentos digitais locais",
        "Consultoria e suporte técnico especializado em CRM, SEO, SEM e Social Media Marketing"
      ],
      delay: 0.5
    },
    {
      id: 6,
      title: "Incentivos para P&D e Inovação (ResearchBoost)",
      description: "Suporte completo para empresas que desejam realizar pesquisa e desenvolvimento na Alemanha",
      icon: <Microscope className="w-10 h-10 text-[#FFEBD8]" />,
      color: "#FFEBD8",
      textColor: "#000000",
      link: '/services/research',
      features: [
        "Acesso a incentivos fiscais de até €2.5 milhões anuais para P&D (35% para PMEs)",
        "Auxílio na obtenção de subsídios do programa Horizon Europe (€95+ bilhões)",
        "Suporte na parceria com institutos de pesquisa e universidades alemãs",
        "Orientação completa no processo de certificação de projetos de P&D",
        "Assistência na documentação e prestação de contas dos projetos"
      ],
      delay: 0.6
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#25C9BA] mb-6">
            Nossos Serviços
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Soluções completas e personalizadas para empresas e profissionais brasileiros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group h-full"
            >
              <div 
                className="relative h-full flex flex-col backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 border group-hover:border-opacity-70"
                style={{
                  borderColor: service.color,
                  backgroundColor: `${service.color}0A`,
                }}
              >
                <div 
                  className="mb-6 rounded-xl p-4 bg-[#0A0A0A] border border-gray-800"
                  style={{ 
                    width: "fit-content"
                  }}
                >
                  <div style={{ color: service.color }}>
                    {service.icon}
                  </div>
                </div>
                  
                <h3 
                  className="font-heading font-bold text-2xl mb-4 transition-all duration-300"
                  style={{ 
                    color: service.color
                  }}
                >
                  {service.title}
                </h3>
                  
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="list-none space-y-3 mb-8 flex-grow">
                  {((service.features) || []).map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span 
                        className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      ></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                  
                <div className="mt-auto">
                  <Link href={service.link}>
                    <ButtonCTA 
                      secondary 
                      className="w-full transition-all duration-300"
                      style={{ 
                        borderColor: "#FF601A",
                        backgroundColor: "#FF601A",
                        color: "#000000"
                      }}
                    >
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4 inline-block align-middle group-hover:translate-x-1 transition-transform duration-300" />
                    </ButtonCTA>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/contact">
            <ButtonCTA className="bg-[#FF601A] text-white hover:bg-[#FF601A]/90 text-lg px-10 py-4">
              Entre em contato <ArrowRight className="ml-2 h-5 w-5 inline-block align-middle group-hover:translate-x-1 transition-transform duration-300" />
            </ButtonCTA>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;