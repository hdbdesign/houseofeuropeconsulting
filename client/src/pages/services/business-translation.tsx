import { Languages } from 'lucide-react';
import ServicePage from '@/components/services/ServicePage';

const BusinessTranslationService = () => {
  return (
    <ServicePage
      title="Tradução de Negócios (BusinessTalk)"
      subtitle="Serviço especializado de tradução e interpretação para reuniões e negociações empresariais"
      description="Oferecemos serviços profissionais de tradução e interpretação focados no ambiente corporativo, garantindo uma comunicação precisa e eficiente em suas negociações internacionais."
      icon={<Languages className="w-16 h-16" />}
      benefits={[
        "Tradução simultânea profissional em reuniões de negócios",
        "Domínio de vocabulário técnico e empresarial específico do seu setor",
        "Experiência em negociações internacionais e termos comerciais",
        "Suporte em alemão, inglês, português e espanhol",
        "Garantia de comunicação precisa e eficiente em suas negociações",
        "Confidencialidade e profissionalismo em todas as interações"
      ]}
      process={{
        title: "Como funciona",
        steps: [
          "Avaliação inicial das necessidades de tradução e interpretação",
          "Definição do escopo e complexidade do vocabulário técnico necessário",
          "Preparação prévia com materiais e termos específicos do seu negócio",
          "Execução do serviço com profissionais especializados",
          "Acompanhamento e ajustes durante todo o processo",
          "Relatório final e feedback para melhorias contínuas"
        ]
      }}
      caseStudies={[
        {
          title: "Negociação Internacional Bem-sucedida",
          description: "Facilitamos uma importante negociação entre uma empresa brasileira de tecnologia e um potencial parceiro alemão.",
          results: [
            "Comunicação clara e precisa durante todas as reuniões",
            "Tradução adequada de termos técnicos e contratuais",
            "Fechamento bem-sucedido da parceria internacional"
          ],
          testimonial: {
            quote: "A precisão e profissionalismo do serviço de tradução foram fundamentais para o sucesso da nossa negociação.",
            author: "Diretor de Expansão Internacional",
            role: "Empresa de Tecnologia Brasileira"
          }
        },
        {
          title: "Suporte em Conferência Multilíngue",
          description: "Prestamos serviços de tradução simultânea em uma conferência internacional com participantes de diversos países.",
          results: [
            "Tradução simultânea em 4 idiomas diferentes",
            "Mais de 50 participantes atendidos",
            "100% de satisfação dos participantes"
          ]
        }
      ]}
      faqs={[
        {
          question: "Quais idiomas são oferecidos no serviço?",
          answer: "Oferecemos tradução e interpretação principalmente em alemão, inglês, português e espanhol. Para outros idiomas, contamos com uma rede de parceiros qualificados."
        },
        {
          question: "Como é garantida a precisão técnica das traduções?",
          answer: "Nossa equipe se prepara estudando previamente o vocabulário específico do seu setor e realiza pesquisas aprofundadas sobre os termos técnicos relevantes. Além disso, mantemos um glossário atualizado para cada cliente."
        },
        {
          question: "Qual o prazo necessário para agendar o serviço?",
          answer: "Recomendamos um agendamento com pelo menos 1 semana de antecedência para garantir a melhor preparação possível. Para casos urgentes, temos também disponibilidade para atendimento em prazos menores."
        },
        {
          question: "Como é garantida a confidencialidade das informações?",
          answer: "Todos os nossos profissionais assinam acordos de confidencialidade, e seguimos rigorosos protocolos de segurança da informação. Além disso, podemos firmar NDAs específicos conforme a necessidade do cliente."
        }
      ]}
    />
  );
};

export default BusinessTranslationService; 