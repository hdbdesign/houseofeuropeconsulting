import { motion } from 'framer-motion';

const ResultsSection = () => {
  const results = [
    {
      title: 'Podcast Completo (Produção)',
      client: 'Könige & Priester (Alemanha)'
    },
    {
      title: 'Digitalização de Processos Internos',
      client: 'Gemeinde auf dem Fels e.V.'
    },
    {
      title: 'Branding Pessoal e Posicionamento',
      client: 'Alexandra Buchetmann'
    },
    {
      title: 'Consultoria e Business Plan Completo',
      client: 'Lucas Brescia'
    },
    {
      title: 'Fundação e Estruturação Jurídica',
      client: 'Stimmen des Lebens e.V.'
    },
    {
      title: 'Processo Completo Business Plan, Abertura e Vistos Familiares',
      client: 'Danque GmbH'
    }
  ];

  return (
    <section className="py-24 bg-[#021C26] overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-66.67%);
            }
          }

          .scroll-container {
            display: flex;
            width: fit-content;
            animation: scroll 50s linear infinite;
            padding: 2rem 0;
            margin-top: 0;
          }

          .scroll-container:hover {
            animation-play-state: paused;
          }

          .result-card {
            background: rgba(2, 28, 38, 0.95);
            backdrop-filter: blur(8px);
            transition: all 0.3s ease;
            margin: 0 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-top: 3px solid #25C9BA;
          }

          .result-card:hover {
            background: rgba(2, 28, 38, 1);
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
            border-top-color: #FF6014;
          }

          .results-block {
            background: #010D12;
            background-image: radial-gradient(rgba(37, 201, 186, 0.15) 1px, transparent 1px);
            background-size: 30px 30px;
            height: 800px;
            width: 100vw;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>

      <div className="results-block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 mt-32"
        >
          <h2 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-bold text-[#FF6014]">Resultados</span> que Falam por Si
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl">
            Conheça algumas das histórias de sucesso que construímos<br />
            junto aos nossos clientes
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <div className="scroll-container">
            {/* Primeiro conjunto de cards */}
            {results.map((result, index) => (
              <motion.div
                key={`${index}-1`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="result-card flex-shrink-0 w-[320px] p-8 rounded-xl"
              >
                <h3 className="text-white text-xl mb-4 font-medium leading-tight">
                  {result.title}
                </h3>
                <p className="text-[#FF6014] font-medium">
                  {result.client}
                </p>
              </motion.div>
            ))}
            
            {/* Segundo conjunto de cards */}
            {results.map((result, index) => (
              <motion.div
                key={`${index}-2`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="result-card flex-shrink-0 w-[320px] p-8 rounded-xl"
              >
                <h3 className="text-white text-xl mb-4 font-medium leading-tight">
                  {result.title}
                </h3>
                <p className="text-[#FF6014] font-medium">
                  {result.client}
                </p>
              </motion.div>
            ))}

            {/* Terceiro conjunto de cards */}
            {results.map((result, index) => (
              <motion.div
                key={`${index}-3`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="result-card flex-shrink-0 w-[320px] p-8 rounded-xl"
              >
                <h3 className="text-white text-xl mb-4 font-medium leading-tight">
                  {result.title}
                </h3>
                <p className="text-[#FF6014] font-medium">
                  {result.client}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection; 