import { Building2 } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const ExpansionService = () => {
  return (
    <ServicePage
      title="Expansão Internacional (GlobalAccess)"
      subtitle="Sua porta de entrada para o mercado europeu"
      description="Oferecemos suporte completo para empresas brasileiras que desejam expandir seus negócios para a Europa, com foco especial no mercado alemão. Nossa equipe experiente guia você em cada etapa do processo, desde a análise inicial até a operação completa."
      icon={<Building2 className="w-full h-full" />}
      benefits={[
        "Acesso ao mercado europeu de forma estratégica e estruturada",
        "Redução significativa de riscos e custos no processo de internacionalização",
        "Suporte jurídico e contábil especializado no mercado alemão",
        "Network com parceiros estratégicos locais",
        "Orientação cultural e de negócios para o mercado europeu",
        "Acesso a incentivos e programas de apoio governamentais"
      ]}
      process={{
        title: "Como Funciona",
        steps: [
          "Análise inicial do seu negócio e objetivos de expansão",
          "Desenvolvimento de estratégia personalizada de entrada no mercado",
          "Suporte na constituição legal da empresa na Alemanha",
          "Assistência na obtenção de licenças e registros necessários",
          "Apoio na estruturação operacional e contratações",
          "Acompanhamento contínuo durante os primeiros meses de operação"
        ]
      }}
      caseStudies={[
        {
          title: "TechBR Software",
          description: "Empresa de software brasileira que expandiu com sucesso para o mercado alemão, estabelecendo um hub de desenvolvimento em Berlim.",
          results: [
            "Aumento de 150% no faturamento em 18 meses",
            "Conquista de 12 novos clientes enterprise europeus",
            "Criação de 25 empregos diretos na Alemanha",
            "Acesso a programas de incentivo à inovação"
          ],
          testimonial: {
            quote: "A House of Digital Business foi fundamental para nossa expansão bem-sucedida. Seu conhecimento do mercado e suporte abrangente nos permitiu focar no crescimento do negócio enquanto eles cuidavam de toda a complexidade da expansão internacional.",
            author: "Carlos Silva",
            role: "CEO da TechBR Software"
          }
        },
        {
          title: "EcoInova Sustentável",
          description: "Startup de tecnologia verde que estabeleceu presença na Alemanha para acessar o mercado de energia renovável.",
          results: [
            "Parceria com 3 grandes players do setor de energia",
            "Captação de €2M em investimento europeu",
            "Expansão para 4 países da UE em 24 meses",
            "Desenvolvimento de 2 novos produtos para o mercado europeu"
          ],
          testimonial: {
            quote: "Antes da mentoria, eu estava super perdida sobre o que escolher na escola. Parecia que todo mundo já sabia o que queria, menos eu. Durante a mentoria, fiz testes de personalidade, a gente conversou sobre o que eu gosto de fazer, no que sou boa… e tudo começou a fazer mais sentido. Foi um alívio perceber que posso escolher matérias que têm a ver comigo e com o que eu posso fazer no futuro. Agora me sinto muito mais tranquila e animada, porque sei que estou escolhendo um caminho que combina comigo. De verdade, foi uma experiência que me ajudou muito! Se você também está meio confuso ou não sabe por onde começar, eu super recomendo essa mentoria. Fez toda a diferença pra mim.",
            author: "Rebecca",
            role: "Estudante brasileira residente em Portugal"
          }
        }
      ]}
      faqs={[
        {
          question: "Quanto tempo leva para estabelecer uma empresa na Alemanha?",
          answer: "O processo completo geralmente leva entre 2 a 4 meses, dependendo do tipo de empresa e setor de atuação. Isso inclui todas as etapas legais e burocráticas necessárias."
        },
        {
          question: "Quais são os custos envolvidos na expansão?",
          answer: "Os custos variam de acordo com o modelo de negócio e escala da operação. Durante nossa consultoria inicial gratuita, fornecemos uma estimativa detalhada baseada no seu caso específico."
        },
        {
          question: "Preciso ter uma equipe local desde o início?",
          answer: "Não necessariamente. Podemos ajudar a estruturar diferentes modelos de operação, desde representação comercial até equipe completa, dependendo da sua estratégia e objetivos."
        },
        {
          question: "Que tipos de empresas são mais adequadas para expansão?",
          answer: "Empresas com produtos ou serviços inovadores, escaláveis e com diferencial competitivo têm maior potencial de sucesso. Avaliamos cada caso individualmente durante a consultoria."
        }
      ]}
    />
  );
};

export default ExpansionService; 