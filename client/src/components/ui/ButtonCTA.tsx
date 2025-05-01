import { HTMLMotionProps, motion } from 'framer-motion';

interface ButtonCTAProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  secondary?: boolean;
  style?: React.CSSProperties;
}

const ButtonCTA = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
  secondary = false,
  style,
  ...props
}: ButtonCTAProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${secondary 
          ? 'bg-white/10 border border-transparent text-white hover:bg-transparent hover:border-[#25C9BA]' 
          : 'bg-[#FF601A] hover:bg-[#FF601A]/90 text-white'}
        font-medium py-3 px-6 rounded-md 
        transition-all duration-300 ease-in-out
        outline-none focus:ring-2 focus:ring-[#25C9BA]/50
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={style}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ButtonCTA; 