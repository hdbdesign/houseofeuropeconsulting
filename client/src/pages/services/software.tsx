import { Code2 } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const SoftwareService = () => {
  return (
    <ServicePage
      title="Desenvolvimento de Software"
      subtitle="Soluções digitais personalizadas para impulsionar seu negócio"
      description="Desenvolvemos soluções de software sob medida que transformam desafios em oportunidades de negócio. Nossa equipe combina expertise técnica com compreensão profunda do mercado para entregar produtos digitais de alta qualidade."
      icon={<Code2 className="w-full h-full" />}
      benefits={[
        "Desenvolvimento ágil e entrega contínua",
        "Arquitetura escalável e moderna",
        "Foco em usabilidade e experiência do usuário",
        "Integração com sistemas existentes",
        "Manutenção e suporte contínuo",
        "Segurança e conformidade com padrões internacionais"
      ]}
      process={{
        title: "Nosso Processo de Desenvolvimento",
        steps: [
          "Análise detalhada dos requisitos e objetivos do projeto",
          "Planejamento da arquitetura e escolha das tecnologias",
          "Desenvolvimento iterativo com feedback constante",
          "Testes rigorosos e garantia de qualidade",
          "Implantação e monitoramento",
          "Suporte contínuo e evolução do produto"
        ]
      }}
      caseStudies={[
        {
          title: "Portal de Gestão Financeira",
          description: "Desenvolvimento de uma plataforma completa de gestão financeira para uma fintech em crescimento.",
          results: [
            "Redução de 40% no tempo de processamento de transações",
            "Aumento de 80% na satisfação dos usuários",
            "Integração com 5 sistemas bancários diferentes",
            "Escalabilidade para suportar 100.000 usuários simultâneos"
          ],
          testimonial: {
            quote: "A equipe da House of Digital Business não apenas entregou um produto excepcional, mas também nos ajudou a repensar nossos processos internos para maior eficiência.",
            author: "Ricardo Mendes",
            role: "CTO da FinanceFlow"
          }
        },
        {
          title: "Sistema de Automação Industrial",
          description: "Solução IoT para monitoramento e controle de processos industriais em tempo real.",
          results: [
            "Redução de 30% nos custos operacionais",
            "Aumento de 25% na eficiência produtiva",
            "Implementação em 12 unidades fabris",
            "ROI positivo em menos de 8 meses"
          ],
          testimonial: {
            quote: "A solução desenvolvida revolucionou nossa forma de operar. A capacidade da equipe de entender nossos desafios técnicos e transformá-los em soluções práticas foi impressionante.",
            author: "Marina Santos",
            role: "Diretora de Operações da TechInd"
          }
        }
      ]}
      faqs={[
        {
          question: "Qual é o prazo médio de desenvolvimento de um projeto?",
          answer: "O prazo varia de acordo com a complexidade do projeto. Projetos menores podem levar de 2 a 3 meses, enquanto projetos mais complexos podem levar 6 meses ou mais. Fornecemos uma estimativa detalhada após a análise inicial dos requisitos."
        },
        {
          question: "Quais tecnologias vocês utilizam?",
          answer: "Trabalhamos com um stack moderno e flexível, incluindo React, Node.js, Python, .NET, e diversas tecnologias cloud. A escolha específica é baseada nas necessidades do seu projeto."
        },
        {
          question: "Como é feito o processo de manutenção?",
          answer: "Oferecemos diferentes níveis de suporte e manutenção, desde correções de bugs até evolução contínua do produto. Nossos contratos de manutenção incluem monitoramento, atualizações de segurança e melhorias contínuas."
        },
        {
          question: "O código fonte será meu?",
          answer: "Sim, todo o código fonte desenvolvido para seu projeto é de sua propriedade. Fornecemos documentação completa e, quando necessário, auxiliamos na transferência de conhecimento para sua equipe."
        }
      ]}
    />
  );
};

export default SoftwareService; 