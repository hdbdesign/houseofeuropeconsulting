import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Building2, Search, Plane, GraduationCap, Globe, Languages, Store, Microscope } from 'lucide-react';
import { Helmet } from 'react-helmet';
import FooterCTA from '@/components/cta/FooterCTA';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '@/components/ui/PageHero';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const { t } = useTranslation();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    
    if (cards.length === 0) return;

    // Timeline para coordenar as animações
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cards[0],
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      }
    });

    // Animação dos cards
    tl.fromTo(cards,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );

    // Animação dos ícones
    const iconContainers = cards.map(card => card.querySelector('.icon-container')) as HTMLElement[];
    tl.fromTo(iconContainers,
      {
        opacity: 0,
        scale: 0.5,
        rotation: -30,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      },
      '-=0.4'
    );

    // Animação das features
    const featureItems = cards.map(card => Array.from(card.querySelectorAll('.feature-item'))) as HTMLElement[][];
    tl.fromTo(featureItems.flat(),
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
      },
      '-=0.2'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Expansão Internacional",
      subtitle: "GlobalAccess",
      description: "Apoio completo para trazer seu negócio à Europa, especialmente Alemanha",
      icon: <Building2 className="w-12 h-12" />,
      color: "#25C9BA",
      link: '/services/expansion',
      features: [
        "Avaliação estratégica inicial",
        "Registro e documentação",
        "Suporte jurídico completo"
      ]
    },
    {
      id: 2,
      title: "Transformação Digital",
      subtitle: "DigitalBoost",
      description: "Modernização e otimização dos processos do seu negócio",
      icon: <Globe className="w-12 h-12" />,
      color: "#25C9BA",
      link: '/services/digital',
      features: [
        "Automação de processos",
        "Estratégia digital",
        "Marketing internacional"
      ]
    },
    {
      id: 3,
      title: "Consultoria Migratória",
      subtitle: "SecureLink",
      description: "Suporte completo para sua mudança à Europa",
      icon: <Plane className="w-12 h-12" />,
      color: "#25C9BA",
      link: '/services/migration',
      features: [
        "Vistos e documentação",
        "Orientação legal",
        "Suporte na adaptação"
      ]
    },
    {
      id: 4,
      title: "Pesquisa de Mercado",
      subtitle: "DataPulse",
      description: "Análises detalhadas do mercado europeu",
      icon: <Search className="w-12 h-12" />,
      color: "#25C9BA",
      link: '/services/market',
      features: [
        "Estudos de mercado",
        "Análise competitiva",
        "Insights estratégicos"
      ]
    },
    {
      id: 5,
      title: "Mentoria Profissional",
      subtitle: "TalentForge",
      description: "Desenvolvimento de carreira na Europa",
      icon: <GraduationCap className="w-12 h-12" />,
      color: "#25C9BA",
      link: '/services/career',
      features: [
        "Coaching individual",
        "Plano de carreira",
        "Networking europeu"
      ]
    },
    {
      id: 6,
      title: "P&D e Inovação",
      subtitle: "ResearchBoost",
      description: "Incentivos e suporte para pesquisa na Alemanha",
      icon: <Microscope className="w-12 h-12" />,
      color: "#25C9BA",
      link: '/services/research',
      features: [
        "Incentivos fiscais",
        "Parcerias acadêmicas",
        "Gestão de projetos"
      ]
    },
    {
      id: 7,
      title: "Tradução Empresarial",
      subtitle: "BusinessTalk",
      description: "Serviços especializados de tradução e interpretação",
      icon: <Languages className="w-12 h-12" />,
      color: "#25C9BA",
      link: '/services/business-translation',
      features: [
        "Tradução simultânea",
        "Documentos técnicos",
        "Suporte multilíngue"
      ]
    },
    {
      id: 8,
      title: "Representação em Feiras",
      subtitle: "FairConnect",
      description: "Sua marca presente nos principais eventos europeus",
      icon: <Store className="w-12 h-12" />,
      color: "#25C9BA",
      link: '/services/fair-representation',
      features: [
        "Representação local",
        "Gestão de estande",
        "Networking eventos"
      ]
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
        <title>{t('meta.services.title')}</title>
        <meta name="description" content={t('meta.services.description')} />
      </Helmet>
      
      <PageHero
        title={t('services.hero.title')}
        subtitle={t('services.hero.subtitle')}
        description={t('services.hero.description')}
        subtitleColor="#FF601A"
      />
      
      {/* Grid de Serviços Interativo com GSAP */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="opacity-0"
              >
                <Link href={service.link}>
                  <div className="group relative bg-[#021C26]/80 backdrop-blur-lg rounded-2xl p-8 h-full cursor-pointer overflow-hidden border border-[#25C9BA]/10 hover:border-[#25C9BA]/30 transition-all duration-300">
                    {/* Efeito de hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#25C9BA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Ícone */}
                    <div className="relative z-10 mb-6 icon-container">
                      <div className="w-16 h-16 text-[#25C9BA]">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-heading text-white mb-2">{service.title}</h3>
                      <p className="text-[#25C9BA] text-sm mb-2">{service.subtitle}</p>
                      <p className="text-gray-400 mb-6 text-sm">{service.description}</p>
                      
                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="feature-item flex items-center text-sm text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#25C9BA] mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Call to action */}
                      <div className="flex items-center text-[#25C9BA] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Saiba mais
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </motion.div>
  );
};

export default ServicesPage; 