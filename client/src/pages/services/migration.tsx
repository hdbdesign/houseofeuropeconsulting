import { Plane } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const MigrationService = () => {
  return (
    <ServicePage
      title="Consultoria Migratória (SecureLink)"
      subtitle="Sua jornada para a Europa começa aqui"
      description="Oferecemos suporte completo para sua transição pessoal e profissional à Europa, garantindo um processo migratório tranquilo e bem-sucedido com orientação especializada em cada etapa."
      icon={<Plane className="w-full h-full" />}
      benefits={[
        "Avaliação personalizada do melhor tipo de visto",
        "Preparação completa da documentação necessária",
        "Suporte jurídico especializado",
        "Orientação para integração cultural",
        "Assistência com moradia e registro local",
        "Acompanhamento durante todo o processo"
      ]}
      process={{
        title: "Processo de Migração",
        steps: [
          "Análise inicial do perfil e objetivos",
          "Definição da melhor estratégia migratória",
          "Preparação e revisão da documentação",
          "Submissão do processo às autoridades",
          "Suporte na chegada e estabelecimento",
          "Acompanhamento pós-mudança"
        ]
      }}
      caseStudies={[
        {
          title: "Transição Familiar Bem-Sucedida",
          description: "Família brasileira realizando mudança completa para Alemanha com filhos em idade escolar.",
          results: [
            "Processo migratório aprovado em 45 dias",
            "Matrícula escolar garantida antes da chegada",
            "Moradia adequada localizada e contratada",
            "Integração cultural bem-sucedida para toda família"
          ],
          testimonial: {
            quote: "O suporte da equipe foi fundamental para tornar nossa mudança tranquila e organizada. Cada detalhe foi cuidadosamente planejado.",
            author: "Família Silva",
            role: "Clientes desde 2023"
          }
        },
        {
          title: "Transição Profissional",
          description: "Executivo brasileiro aceito proposta de trabalho na Alemanha com necessidade de mudança rápida.",
          results: [
            "Visto de trabalho obtido em tempo recorde",
            "Processo completo finalizado em 60 dias",
            "Suporte na negociação do contrato de trabalho",
            "Adaptação cultural e profissional bem-sucedida"
          ],
          testimonial: {
            quote: "A expertise da equipe em lidar com as autoridades alemãs e seu conhecimento do mercado local foram diferenciais cruciais para minha transição.",
            author: "Roberto Santos",
            role: "Diretor de Tecnologia"
          }
        }
      ]}
      faqs={[
        {
          question: "Quanto tempo leva o processo de visto?",
          answer: "O tempo varia de acordo com o tipo de visto e sua situação específica. Em média, o processo completo leva de 2 a 4 meses, mas podemos trabalhar com prazos mais curtos em casos urgentes."
        },
        {
          question: "Quais documentos são necessários?",
          answer: "A lista de documentos varia conforme o tipo de visto, mas geralmente inclui passaporte, comprovantes financeiros, qualificações profissionais/acadêmicas, seguro saúde e documentos específicos do empregador quando aplicável."
        },
        {
          question: "Vocês ajudam com a busca de moradia?",
          answer: "Sim, oferecemos suporte completo na busca de moradia, incluindo análise de regiões, agendamento de visitas, revisão de contratos e apoio nas negociações com proprietários."
        },
        {
          question: "Como funciona o processo de integração cultural?",
          answer: "Oferecemos orientação cultural, aulas de alemão, informações sobre costumes locais e networking com outros expatriados. Também auxiliamos com aspectos práticos como abertura de conta bancária e registro local."
        }
      ]}
    />
  );
};

export default MigrationService; 