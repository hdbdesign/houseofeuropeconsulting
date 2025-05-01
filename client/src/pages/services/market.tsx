import { Search } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const MarketResearchService = () => {
  return (
    <ServicePage
      title="Pesquisa de Mercado Estratégica (DataPulse)"
      subtitle="Insights precisos para decisões estratégicas no mercado europeu"
      description="Oferecemos pesquisas de mercado detalhadas e análises exclusivas que fornecem uma compreensão profunda do mercado europeu, permitindo que sua empresa tome decisões estratégicas baseadas em dados concretos."
      icon={<Search className="w-full h-full" />}
      benefits={[
        "Análise detalhada do mercado e concorrência local",
        "Identificação de oportunidades e nichos de mercado",
        "Compreensão do comportamento do consumidor europeu",
        "Avaliação de tendências e projeções de mercado",
        "Relatórios personalizados e acionáveis",
        "Recomendações estratégicas baseadas em dados"
      ]}
      process={{
        title: "Nosso Processo de Pesquisa",
        steps: [
          "Definição dos objetivos e escopo da pesquisa",
          "Coleta de dados primários e secundários",
          "Análise aprofundada do mercado e concorrência",
          "Identificação de insights e oportunidades",
          "Elaboração de relatório detalhado",
          "Apresentação dos resultados e recomendações"
        ]
      }}
      caseStudies={[
        {
          title: "Expansão Varejo Online",
          description: "Pesquisa de mercado para e-commerce brasileiro expandindo para Alemanha.",
          results: [
            "Identificação de 3 nichos de mercado promissores",
            "Mapeamento completo da concorrência local",
            "Definição de estratégia de preços otimizada",
            "ROI positivo no primeiro ano de operação"
          ],
          testimonial: {
            quote: "A pesquisa nos permitiu entrar no mercado alemão com confiança e precisão. Os insights fornecidos foram fundamentais para nosso sucesso inicial.",
            author: "Paulo Rodrigues",
            role: "Diretor de Expansão da TechShop Brasil"
          }
        },
        {
          title: "Adaptação de Produto Alimentício",
          description: "Estudo de mercado para adaptação de produtos alimentícios brasileiros ao paladar europeu.",
          results: [
            "Teste de produto com 500 consumidores locais",
            "Identificação de ajustes necessários na formulação",
            "Definição de estratégia de posicionamento",
            "Aumento de 85% na aceitação do produto"
          ],
          testimonial: {
            quote: "A profundidade da pesquisa e a qualidade dos insights nos permitiram adaptar nossos produtos perfeitamente ao mercado local.",
            author: "Maria Santos",
            role: "CEO da Sabores do Brasil GmbH"
          }
        }
      ]}
      faqs={[
        {
          question: "Quanto tempo leva uma pesquisa de mercado completa?",
          answer: "O prazo típico é de 4 a 8 semanas, dependendo da complexidade e escopo da pesquisa. Pesquisas mais específicas podem ser concluídas em menos tempo."
        },
        {
          question: "Que tipos de dados são coletados na pesquisa?",
          answer: "Coletamos dados quantitativos e qualitativos, incluindo tendências de mercado, análise da concorrência, comportamento do consumidor, regulamentações locais e oportunidades de negócio."
        },
        {
          question: "Como os resultados são apresentados?",
          answer: "Você recebe um relatório detalhado com análises, gráficos e recomendações práticas, além de uma apresentação executiva com os principais insights e estratégias sugeridas."
        },
        {
          question: "A pesquisa inclui análise de concorrentes?",
          answer: "Sim, realizamos uma análise completa da concorrência, incluindo posicionamento, preços, estratégias de marketing e diferenciais competitivos no mercado local."
        }
      ]}
    />
  );
};

export default MarketResearchService; 