import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico Gratuito",
      description: "Entendo sua necessidade e objetivos em uma conversa direta e gratuita."
    },
    {
      number: "2",
      title: "Estratégia Sob Medida",
      description: "Desenvolvo um plano personalizado, alinhado à sua realidade e metas específicas."
    },
    {
      number: "3",
      title: "Mentoria e Execução Prática",
      description: "Acompanho você passo a passo com sessões individuais e suporte contínuo até atingir o objetivo."
    }
  ];

  // Animação para entrada sequencial
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Função para calcular o deslocamento vertical baseado no índice
  const getVerticalOffset = (index: number) => {
    switch(index) {
      case 0: return 0;
      case 1: return 30; // Reduzido de 60 para 30
      case 2: return 60; // Reduzido de 120 para 60
      default: return 0;
    }
  };

  return (
    <section className="py-24 bg-[#021C26] relative overflow-hidden">
      <style>
        {`
          .process-container {
            position: relative;
          }

          .connecting-line {
            position: absolute;
            left: 50%;
            width: 2px;
            background: repeating-linear-gradient(
              to bottom,
              #25C9BA 0,
              #25C9BA 8px,
              transparent 8px,
              transparent 16px
            );
            transform: translateX(-50%);
            opacity: 0.3;
          }

          .arrow-head {
            position: absolute;
            top: -1px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 10px solid #25C9BA;
            opacity: 0.6;
          }

          .process-step {
            position: relative;
            z-index: 1;
          }

          .process-step:hover .step-circle {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(37, 201, 186, 0.3);
          }

          .step-circle {
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
          }

          .step-content {
            position: relative;
          }

          .line-container {
            position: absolute;
            width: 2px;
            left: 50%;
            transform: translateX(-50%);
          }

          @media (max-width: 768px) {
            .connecting-line {
              height: 80px;
            }
          }
        `}
      </style>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-heading text-3xl md:text-4xl mb-4">
            Como Funciona a Consultoria e Mentoria
          </h2>
          <p className="text-[#25C9BA] text-xl">
            Um Processo Simples Para Grandes Resultados
          </p>
        </motion.div>

        <motion.div
          className="process-container max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-step flex flex-col items-center mb-24 last:mb-0"
              variants={itemVariants}
              style={{ 
                marginTop: getVerticalOffset(index),
                marginBottom: index < steps.length - 1 ? '120px' : '0'
              }}
            >
              {/* Círculo com número */}
              <div className="step-circle w-24 h-24 rounded-full bg-[#25C9BA] flex items-center justify-center mb-6">
                <span className="text-white font-bold text-4xl">
                  {step.number}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="step-content text-center max-w-md">
                <h3 className="text-[#FF6014] font-heading text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="text-white text-lg leading-relaxed mb-12">
                  {step.description}
                </p>

                {/* Linha conectiva com seta */}
                {index < steps.length - 1 && (
                  <div className="line-container" style={{ 
                    height: '80px',
                    marginTop: '-10px'
                  }}>
                    <div 
                      className="connecting-line" 
                      style={{
                        height: '100%'
                      }}
                    ></div>
                    <div 
                      className="arrow-head"
                      style={{
                        top: '100%'
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection; 