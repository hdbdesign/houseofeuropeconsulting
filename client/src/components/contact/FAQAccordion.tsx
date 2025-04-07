import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQAccordionProps {
  question: string;
  answer: string;
  index: number;
}

const FAQAccordion = ({ question, answer, index }: FAQAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 mr-4 rounded-full bg-[#00FFFF]/10 text-[#00FFFF] font-medium">
            {index}
          </span>
          <h3 className="text-lg font-medium text-white">{question}</h3>
        </div>
        
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#00FFFF]" />
          ) : (
            <Plus className="w-5 h-5 text-[#00FFFF]" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 pl-[4.5rem]">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-300">{answer}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion; 