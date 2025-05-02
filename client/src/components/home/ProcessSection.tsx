import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect, useState } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const ProcessSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const lineRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  // Para 3 passos, teremos 8 elementos na sequência: n1, t1, l1, n2, t2, l2, n3, t3
  // Cada ref marca o início de um novo "bloco" na sequência
  const sequenceRefs = [
    stepRefs[0], // n1
    { current: { getBoundingClientRect: () => stepRefs[0].current?.querySelector('.step-content')?.getBoundingClientRect() } }, // t1
    lineRefs[0], // l1
    stepRefs[1], // n2
    { current: { getBoundingClientRect: () => stepRefs[1].current?.querySelector('.step-content')?.getBoundingClientRect() } }, // t2
    lineRefs[1], // l2
    stepRefs[2], // n3
    { current: { getBoundingClientRect: () => stepRefs[2].current?.querySelector('.step-content')?.getBoundingClientRect() } }, // t3
  ];

  // Estado para controlar o índice global de ativação
  const [activeIndex, setActiveIndex] = useState(-1);

  // Função para checar qual elemento está mais visível
  useEffect(() => {
    const onScroll = () => {
      let found = -1;
      for (let i = 0; i < sequenceRefs.length; i++) {
        const ref = sequenceRefs[i];
        if (ref.current && ref.current.getBoundingClientRect) {
          const rect = ref.current.getBoundingClientRect();
          if (rect && typeof rect.top === 'number' && rect.top < window.innerHeight * 0.5) {
            found = i;
          } else {
            break;
          }
        }
      }
      setActiveIndex(found);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const steps: Step[] = [
    {
      number: "1",
      title: t('meta.home.process.steps.0.title'),
      description: t('meta.home.process.steps.0.description')
    },
    {
      number: "2",
      title: t('meta.home.process.steps.1.title'),
      description: t('meta.home.process.steps.1.description')
    },
    {
      number: "3",
      title: t('meta.home.process.steps.2.title'),
      description: t('meta.home.process.steps.2.description')
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
      case 1: return 30;
      case 2: return 60;
      default: return 0;
    }
  };

  // Função para dividir o título em duas linhas
  const splitTitle = (title: string) => {
    const words = title.split(' ');
    const midpoint = Math.ceil(words.length / 2);
    return [
      words.slice(0, midpoint).join(' '),
      words.slice(midpoint).join(' ')
    ];
  };

  const titleLines = splitTitle(t('meta.home.process.title'));

  return (
    <section className="py-24 bg-[#021C26] relative overflow-hidden" ref={containerRef}>
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
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#25C9BA] mb-6">
            {t('meta.home.process.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            {t('meta.home.process.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="process-container max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => {
            const ref = stepRefs[index];
            return (
            <motion.div
              key={step.number}
                ref={ref}
              className="process-step flex flex-col items-center mb-24 last:mb-0"
              style={{ 
                  marginTop: index === 0 ? 0 : index === 1 ? 30 : 60,
                marginBottom: index < steps.length - 1 ? '120px' : '0'
              }}
            >
              {/* Círculo com número */}
                <motion.div 
                  className="step-circle w-24 h-24 rounded-full flex items-center justify-center mb-6 border border-[#25C9BA]"
                  style={{
                    backgroundColor: activeIndex >= index * 3 ? "#25C9BA" : "#25C9BA05",
                    transition: "background-color 0.2s ease"
                  }}
                >
                  <motion.span 
                    className="font-bold text-4xl"
                    style={{
                      color: activeIndex >= index * 3 ? "#021C26" : "#25C9BA",
                      transition: "color 0.2s ease"
                    }}
                  >
                  {step.number}
                  </motion.span>
                </motion.div>

              {/* Conteúdo */}
                <div className="step-content text-center max-w-xl mx-auto">
                <h3 className="text-[#FF6014] font-heading text-2xl mb-3">
                  {step.title}
                </h3>
                  <motion.div 
                    className="p-6 rounded-lg mb-12 border"
                    style={{
                      backgroundColor: activeIndex >= index * 3 + 1 ? "#25C9BA" : "transparent",
                      borderColor: "#25C9BA",
                      transition: "background-color 0.2s ease, border-color 0.2s ease"
                    }}
                  >
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: activeIndex >= index * 3 + 1 ? "#021C26" : "#25C9BA", transition: "color 0.2s ease" }}
                    >
                  {step.description}
                </p>
                  </motion.div>

                {/* Linha conectiva com seta */}
                {index < steps.length - 1 && (
                    <div 
                      ref={lineRefs[index]}
                      className="line-container" 
                      style={{
                        height: '80px',
                        marginTop: '-10px'
                      }}
                    >
                      <motion.div 
                        className="connecting-line" 
                        style={{
                          height: '100%',
                          opacity: activeIndex >= index * 3 + 2 ? 1 : 0.3,
                          background: activeIndex >= index * 3 + 2
                            ? 'repeating-linear-gradient(to bottom, #FF6014 0, #FF6014 8px, transparent 8px, transparent 16px)'
                            : 'repeating-linear-gradient(to bottom, #25C9BA 0, #25C9BA 8px, transparent 8px, transparent 16px)',
                          transition: "opacity 0.2s ease, background 0.2s ease"
                      }}
                      />
                      <motion.div 
                      className="arrow-head"
                      style={{
                          top: '100%',
                          opacity: activeIndex >= index * 3 + 2 ? 1 : 0.6,
                          borderTop: activeIndex >= index * 3 + 2 ? '10px solid #FF6014' : '10px solid #25C9BA',
                          transition: "opacity 0.2s ease, border-top 0.2s ease"
                      }}
                      />
                  </div>
                )}
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection; 