import { Globe } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const DigitalService = () => {
  return (
    <ServicePage
      title="Transformação Digital e Marketing (DigitalBoost & BrandWave)"
      subtitle="Impulsione sua presença digital no mercado europeu"
      description="Desenvolvemos estratégias digitais completas e personalizadas para empresas brasileiras que desejam se destacar no mercado europeu, combinando transformação digital, marketing estratégico e inovação tecnológica."
      icon={<Globe className="w-full h-full" />}
      benefits={[
        "Estratégias digitais personalizadas para o mercado europeu",
        "Otimização de processos através de automação",
        "Marketing digital focado no público local",
        "Desenvolvimento de presença online forte",
        "Integração de sistemas e ferramentas digitais",
        "Análise de dados e métricas para decisões estratégicas"
      ]}
      process={{
        title: "Processo de Transformação",
        steps: [
          "Diagnóstico digital completo",
          "Desenvolvimento da estratégia personalizada",
          "Implementação de soluções tecnológicas",
          "Otimização de processos e automações",
          "Treinamento e capacitação da equipe",
          "Monitoramento e ajustes contínuos"
        ]
      }}
      caseStudies={[
        {
          title: "E-commerce Internacional",
          description: "Transformação digital completa para varejista brasileiro expandindo para a Europa.",
          results: [
            "Aumento de 200% em vendas internacionais",
            "Redução de 40% nos custos operacionais",
            "Implementação de sistema omnichannel",
            "Automação de 70% dos processos"
          ],
          testimonial: {
            quote: "A transformação digital não só modernizou nossa operação, mas também nos permitiu competir efetivamente no mercado europeu.",
            author: "Pedro Costa",
            role: "CEO da GlobalShop"
          }
        },
        {
          title: "Presença Digital B2B",
          description: "Estratégia digital completa para empresa de serviços profissionais.",
          results: [
            "Aumento de 150% em leads qualificados",
            "Implementação de CRM integrado",
            "Automação do funil de vendas",
            "ROI positivo em 6 meses"
          ],
          testimonial: {
            quote: "A estratégia digital desenvolvida transformou completamente nossa forma de atrair e converter clientes no mercado europeu.",
            author: "Mariana Lima",
            role: "Diretora de Marketing da ProServices"
          }
        }
      ]}
      faqs={[
        {
          question: "Quanto tempo leva a transformação digital?",
          answer: "O processo completo geralmente leva de 3 a 6 meses, dependendo da complexidade do projeto e do nível atual de maturidade digital da empresa. Implementamos as mudanças em fases para garantir uma transição suave."
        },
        {
          question: "Quais tecnologias são utilizadas?",
          answer: "Utilizamos um mix de tecnologias modernas e comprovadas, incluindo plataformas de e-commerce, CRM, automação de marketing, análise de dados e ferramentas de produtividade. A escolha específica depende das necessidades do seu negócio."
        },
        {
          question: "Como é feita a integração com sistemas existentes?",
          answer: "Realizamos uma análise detalhada dos sistemas atuais e desenvolvemos um plano de integração que minimize disruptions. Quando necessário, desenvolvemos conectores personalizados para garantir uma integração perfeita."
        },
        {
          question: "Oferece suporte após a implementação?",
          answer: "Sim, oferecemos diferentes níveis de suporte contínuo, incluindo monitoramento, otimizações, treinamentos e atualizações. Nosso objetivo é garantir que sua equipe esteja capacitada para maximizar os benefícios da transformação digital."
        }
      ]}
    />
  );
};

export default DigitalService; 