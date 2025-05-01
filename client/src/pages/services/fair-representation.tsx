import { Building2 } from 'lucide-react'
import ServicePage from '@/components/services/ServicePage'

export default function FairRepresentationService() {
  return (
    <ServicePage
      title="Representação em Feiras (FairConnect)"
      subtitle="Maximize sua presença em feiras internacionais com representação profissional"
      description="Oferecemos serviços completos de representação em feiras internacionais, garantindo que sua empresa tenha uma presença impactante mesmo quando você não puder estar presente fisicamente."
      icon={Building2}
      benefits={[
        {
          title: "Presença Profissional",
          description: "Representação especializada que mantém a identidade e valores da sua empresa"
        },
        {
          title: "Networking Estratégico",
          description: "Desenvolvimento de conexões valiosas com potenciais parceiros e clientes"
        },
        {
          title: "Relatórios Detalhados",
          description: "Documentação completa de interações, leads e oportunidades identificadas"
        },
        {
          title: "Suporte Multilíngue",
          description: "Comunicação efetiva em múltiplos idiomas para alcance global"
        },
        {
          title: "Gestão de Stand",
          description: "Organização e supervisão completa do seu espaço na feira"
        },
        {
          title: "Follow-up Pós-feira",
          description: "Acompanhamento estruturado com contatos estabelecidos durante o evento"
        }
      ]}
      processSteps={[
        {
          title: "Análise e Planejamento",
          description: "Definição de objetivos, público-alvo e estratégia de abordagem"
        },
        {
          title: "Preparação de Material",
          description: "Desenvolvimento de materiais de apresentação e documentação necessária"
        },
        {
          title: "Treinamento Específico",
          description: "Capacitação sobre produtos, serviços e abordagens de negociação"
        },
        {
          title: "Execução na Feira",
          description: "Representação ativa, networking e coleta de leads qualificados"
        },
        {
          title: "Documentação",
          description: "Registro detalhado de interações e oportunidades identificadas"
        },
        {
          title: "Relatório e Follow-up",
          description: "Apresentação de resultados e apoio no acompanhamento de leads"
        }
      ]}
      caseStudies={[
        {
          title: "TechSolutions Brasil",
          description: "Empresa de software que expandiu sua presença na CeBIT através de nossa representação, resultando em 3 novos contratos internacionais.",
          results: [
            "15 leads qualificados gerados",
            "3 contratos internacionais fechados",
            "ROI de 300% sobre o investimento"
          ]
        },
        {
          title: "EcoMóveis Exportação",
          description: "Fabricante de móveis que participou da Feira de Colônia através de nossa representação, estabelecendo presença no mercado europeu.",
          results: [
            "20 contatos comerciais estabelecidos",
            "2 distribuidores europeus conquistados",
            "Aumento de 40% nas exportações"
          ]
        }
      ]}
      faqs={[
        {
          question: "Como garantem a qualidade da representação?",
          answer: "Nossa equipe passa por treinamento intensivo sobre seu negócio, produtos e objetivos. Mantemos comunicação constante durante o evento e seguimos protocolos rigorosos de representação."
        },
        {
          question: "Qual o investimento necessário?",
          answer: "O investimento varia de acordo com a feira, duração e escopo dos serviços. Oferecemos pacotes personalizados que incluem desde a representação básica até gestão completa de participação."
        },
        {
          question: "Como é feito o acompanhamento dos resultados?",
          answer: "Fornecemos relatórios diários durante a feira e um relatório final detalhado com todos os contatos, leads e oportunidades identificadas, além de métricas de ROI."
        },
        {
          question: "Quais feiras vocês atendem?",
          answer: "Atendemos as principais feiras comerciais na Europa, com foco especial na Alemanha, incluindo eventos nos setores de tecnologia, indústria, varejo e serviços."
        }
      ]}
    />
  )
} 