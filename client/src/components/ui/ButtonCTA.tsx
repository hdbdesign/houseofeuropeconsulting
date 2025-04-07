import React from 'react';
import { motion } from 'framer-motion';

interface ButtonCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  secondary?: boolean;
}

const ButtonCTA: React.FC<ButtonCTAProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
  secondary = false,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${secondary 
          ? 'bg-black border border-[#00FFFF]/50 hover:border-[#00FFFF] text-[#00FFFF]' 
          : 'bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black'}
        font-medium py-3 px-6 rounded-md 
        transition-all duration-300 ease-in-out
        outline-none focus:ring-2 focus:ring-[#00FFFF]/50
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default ButtonCTA; 