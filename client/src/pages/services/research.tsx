import { Microscope } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const ResearchService = () => {
  return (
    <ServicePage
      title="Incentivos para P&D e Inovação (ResearchBoost)"
      subtitle="Acelere sua inovação com incentivos europeus"
      description="Oferecemos suporte completo para empresas brasileiras que desejam desenvolver projetos de pesquisa e desenvolvimento na Alemanha, aproveitando incentivos fiscais e programas de fomento à inovação."
      icon={<Microscope className="w-full h-full" />}
      benefits={[
        "Acesso a incentivos fiscais de até €2.5 milhões/ano",
        "Suporte para obtenção de subsídios europeus",
        "Parcerias com institutos de pesquisa e universidades",
        "Certificação de projetos de P&D",
        "Documentação especializada para prestação de contas",
        "Networking com ecossistema de inovação local"
      ]}
      process={{
        title: "Processo de Desenvolvimento",
        steps: [
          "Avaliação inicial do projeto de P&D",
          "Identificação de programas e incentivos adequados",
          "Estruturação do projeto e documentação",
          "Submissão de propostas e aplicações",
          "Implementação e gestão do projeto",
          "Monitoramento e prestação de contas"
        ]
      }}
      caseStudies={[
        {
          title: "Inovação em Biotecnologia",
          description: "Empresa de biotecnologia desenvolvendo nova tecnologia com apoio de incentivos alemães.",
          results: [
            "€1.8M em incentivos fiscais obtidos",
            "Parceria com 2 universidades alemãs",
            "3 patentes registradas",
            "Laboratório estabelecido em hub de inovação"
          ],
          testimonial: {
            quote: "O suporte na obtenção de incentivos e estabelecimento de parcerias acadêmicas foi fundamental para viabilizar nossa pesquisa na Alemanha.",
            author: "Dr. Carolina Santos",
            role: "Diretora de P&D da BioTechBR"
          }
        },
        {
          title: "Desenvolvimento de Software AI",
          description: "Startup desenvolvendo soluções de inteligência artificial com financiamento europeu.",
          results: [
            "€500K em subsídios do programa Horizon Europe",
            "Desenvolvimento acelerado do MVP",
            "Equipe de P&D estabelecida na Alemanha",
            "2 produtos lançados no mercado europeu"
          ],
          testimonial: {
            quote: "Os incentivos e o suporte recebidos nos permitiram acelerar significativamente nosso desenvolvimento tecnológico e estabelecer presença no mercado europeu.",
            author: "Rafael Oliveira",
            role: "CEO da AITech Solutions"
          }
        }
      ]}
      faqs={[
        {
          question: "Quais tipos de projetos são elegíveis?",
          answer: "Projetos de pesquisa básica, desenvolvimento experimental e inovação tecnológica são elegíveis. Os setores prioritários incluem tecnologia, biotecnologia, energia renovável e indústria 4.0, mas outros setores também podem se qualificar."
        },
        {
          question: "Como funciona o processo de aplicação?",
          answer: "O processo inclui a preparação da documentação técnica do projeto, plano de trabalho, orçamento detalhado e demonstração de capacidade técnica. Nossa equipe auxilia em todas as etapas, desde a concepção até a submissão."
        },
        {
          question: "Quanto tempo leva para receber os incentivos?",
          answer: "O tempo varia conforme o programa. Incentivos fiscais podem ser acessados trimestralmente, enquanto subsídios do Horizon Europe podem levar de 3 a 6 meses após a aprovação do projeto."
        },
        {
          question: "É necessário ter uma empresa na Alemanha?",
          answer: "Para alguns programas sim, mas existem opções para empresas que ainda não têm presença local. Podemos auxiliar na estruturação mais adequada para seu caso específico."
        }
      ]}
    />
  );
};

export default ResearchService; 