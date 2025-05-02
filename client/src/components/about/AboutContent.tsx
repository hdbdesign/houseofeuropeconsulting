import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Briefcase, Globe, Users, MessageSquare, Target, Rocket, Brain, Building2, Award } from 'lucide-react';

const AboutContent = () => {
  const { t } = useTranslation();

  const languages = [
    { name: "Português", level: "Nativo", flag: "🇧🇷" },
    { name: "Alemão", level: "Fluente", flag: "🇩🇪" },
    { name: "Inglês", level: "Fluente", flag: "🇬🇧" },
    { name: "Espanhol", level: "Fluente", flag: "🇪🇸" }
  ];

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/washington-luiz-de-sousa/",
    instagram: "https://www.instagram.com/washington.desousa/",
    facebook: "https://www.facebook.com/washington.desousa"
  };

  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experiência Profissional",
      text: "Iniciei minha carreira técnica na EMBRAER, migrei para a área comercial e tecnológica, e após estabelecer uma sólida base profissional no Brasil, escolhi a Alemanha como novo lar."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formação Acadêmica",
      text: "Formação especializada em Digital Business pela IU – Internationale Hochschule, combinando conhecimento acadêmico com experiência prática no mercado europeu."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Consultoria Empresarial",
      text: "Atuação nas áreas de vendas, recrutamento especializado, marketing digital, desenvolvimento de negócios e transformação digital, com histórico comprovado no fechamento de negócios estratégicos."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Liderança Multicultural",
      text: "Experiência em liderar equipes multiculturais e implementar soluções inovadoras que proporcionam crescimento real e sustentável às empresas."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Expansão Internacional",
      text: "Expertise em apoiar empresas brasileiras no planejamento estratégico, abertura de negócios, registro, questões jurídicas, tributárias e de compliance na Europa."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Impacto Social",
      text: "Fundador e presidente do Metanoia Ministry e.V., associação alemã voltada para educação, desenvolvimento pessoal e mentoria, demonstrando forte compromisso social."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Sobre Mim Section */}
      <div className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-[#25C9BA]/20 rounded-2xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#25C9BA]/30 shadow-2xl shadow-[#25C9BA]/10">
                <img 
                  src="/images/portrait_ceo.jpg" 
                  alt="Washington de Sousa" 
                  className="w-full h-auto"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-[#25C9BA] text-black px-4 py-2 rounded-full font-bold shadow-lg z-10">
                11+ anos na Europa
              </div>

              {/* Languages Section */}
              <div className="mt-8 bg-gray-900/50 rounded-xl p-6 border border-[#25C9BA]/20 backdrop-blur-sm">
                <h3 className="font-heading font-bold text-xl text-[#25C9BA] mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Idiomas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-3 text-gray-300 group">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{lang.flag}</span>
                      <div>
                        <p className="font-medium text-white group-hover:text-[#25C9BA] transition-colors duration-300">{lang.name}</p>
                        <p className="text-sm text-[#25C9BA]/80">{lang.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto e Experiências */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#25C9BA]">
                Quem é Washington de Sousa?
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t('about.description', {
                  defaultValue:
                    'Empresário brasileiro, consultor e mentor profissional, vivendo há mais de 11 anos na Alemanha. Minha trajetória profissional inclui vasta experiência em negócios internacionais, recrutamento especializado, marketing digital e desenvolvimento estratégico de empresas. Como fundador e CEO da House of Europe Consulting, ofereço consultoria especializada para empresas e profissionais que desejam expandir para a Europa, combinando expertise técnica com profundo conhecimento do mercado local.'
                })}
              </p>
            </div>

            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#25C9BA]/10 flex items-center justify-center border border-[#25C9BA]/20 group-hover:bg-[#25C9BA]/20 transition-colors duration-300">
                    <div className="text-[#25C9BA]">
                      {exp.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#25C9BA] transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300">
                      {exp.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visão e Missão */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-gray-900/50 rounded-lg border border-[#25C9BA]/20 backdrop-blur-sm"
        >
          <h3 className="font-heading font-bold text-2xl text-[#25C9BA] mb-4">
            {t('about.vision.title')}
          </h3>
          <p className="text-gray-300">
            {t('about.vision.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 bg-gray-900/50 rounded-lg border border-[#25C9BA]/20 backdrop-blur-sm"
        >
          <h3 className="font-heading font-bold text-2xl text-[#25C9BA] mb-4">
            {t('about.mission.title')}
          </h3>
          <p className="text-gray-300">
            {t('about.mission.description')}
          </p>
        </motion.div>
      </div>

      {/* Valores */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-bold text-3xl text-[#25C9BA] mb-12">
          {t('about.values.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(t('about.values.items', { returnObjects: true })).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-900/50 rounded-lg border border-[#25C9BA]/20 backdrop-blur-sm group hover:border-[#25C9BA]/40 transition-all duration-300"
            >
              <h3 className="font-heading font-bold text-xl text-[#25C9BA] mb-3 group-hover:scale-105 transition-transform duration-300">
                {value}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
