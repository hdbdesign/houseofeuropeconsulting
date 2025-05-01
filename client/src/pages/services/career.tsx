import { GraduationCap } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const CareerService = () => {
  return (
    <ServicePage
      title="Mentoria Profissional e Carreira (TalentForge)"
      subtitle="Desenvolva uma carreira de sucesso no mercado europeu"
      description="Oferecemos mentoria personalizada e suporte completo para profissionais brasileiros que desejam construir uma carreira sólida na Europa, com foco em desenvolvimento profissional e integração cultural."
      icon={<GraduationCap className="w-full h-full" />}
      benefits={[
        "Plano de carreira personalizado para o mercado europeu",
        "Preparação completa para processos seletivos internacionais",
        "Desenvolvimento de habilidades interculturais",
        "Networking estratégico no mercado local",
        "Orientação para certificações e qualificações europeias",
        "Acompanhamento contínuo do desenvolvimento profissional"
      ]}
      process={{
        title: "Jornada de Desenvolvimento",
        steps: [
          "Avaliação do perfil profissional e objetivos",
          "Desenvolvimento do plano de carreira personalizado",
          "Adequação de currículo e presença profissional online",
          "Preparação para entrevistas e processos seletivos",
          "Desenvolvimento de habilidades específicas",
          "Mentoria contínua e ajustes estratégicos"
        ]
      }}
      caseStudies={[
        {
          title: "Transição de Carreira Tech",
          description: "Profissional de TI brasileiro conquistando posição de liderança em empresa alemã.",
          results: [
            "Promoção para cargo de Tech Lead em 8 meses",
            "Aumento salarial de 40% após negociação",
            "Desenvolvimento de equipe internacional",
            "Certificações estratégicas conquistadas"
          ],
          testimonial: {
            quote: "A mentoria foi fundamental para minha adaptação ao mercado alemão. O suporte na preparação para entrevistas e negociação salarial fez toda diferença.",
            author: "Lucas Oliveira",
            role: "Tech Lead em Berlim"
          }
        },
        {
          title: "Primeira Experiência Internacional",
          description: "Profissional júnior conquistando primeira oportunidade no mercado europeu.",
          results: [
            "Contratação em empresa alemã em 3 meses",
            "Adaptação cultural bem-sucedida",
            "Desenvolvimento de fluência em alemão",
            "Crescimento profissional acelerado"
          ],
          testimonial: {
            quote: "O programa de mentoria me deu a confiança e as ferramentas necessárias para iniciar minha carreira internacional. O suporte foi muito além das minhas expectativas.",
            author: "Ana Clara Silva",
            role: "UX Designer em Munique"
          }
        }
      ]}
      faqs={[
        {
          question: "Como funciona o processo de mentoria?",
          answer: "O programa começa com uma avaliação detalhada do seu perfil e objetivos. A partir daí, desenvolvemos um plano personalizado com sessões regulares de mentoria, exercícios práticos e acompanhamento contínuo do seu progresso."
        },
        {
          question: "Quanto tempo leva para conseguir uma oportunidade?",
          answer: "O tempo varia conforme sua experiência, área de atuação e nível de preparação. Em média, profissionais bem preparados conseguem oportunidades em 3-6 meses, mas cada caso é único."
        },
        {
          question: "Preciso falar alemão para participar?",
          answer: "Não é um pré-requisito, mas oferecemos suporte para desenvolvimento do idioma como parte do programa, pois isso amplia significativamente as oportunidades no mercado local."
        },
        {
          question: "Quais áreas profissionais são atendidas?",
          answer: "Atendemos profissionais de diversas áreas, com foco especial em tecnologia, engenharia, negócios e áreas criativas. Cada programa é adaptado às especificidades do seu setor."
        }
      ]}
    />
  );
};

export default CareerService; 