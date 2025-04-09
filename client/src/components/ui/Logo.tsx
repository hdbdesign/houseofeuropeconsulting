import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  return (
    <div className="flex items-center">
      {/* Logo mark (hexagonal shape) */}
      <div className={`relative ${sizeClasses[size]} aspect-square`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
        >
          {/* Hexagon */}
          <path
            d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
            stroke="#00FFFF"
            strokeWidth="4"
            fill="transparent"
          />
          
          {/* H */}
          <path
            d="M35 30V70M35 50H65M65 30V70"
            stroke="#00FFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* B stylized */}
          <path
            d="M80 40C80 34.5 75.5 30 70 30H50V70H70C75.5 70 80 65.5 80 60V40Z"
            stroke="#00FFFF"
            strokeWidth="0"
            fill="#00FFFF"
            fillOpacity="0.2"
          />
        </svg>
      </div>
      
      {/* Text part */}
      {withText && (
        <div className="ml-3 text-cyan-400 font-mono uppercase tracking-wider">
          <div className={size === 'lg' ? 'text-2xl' : 'text-xl'}>
            House of Digital Business
          </div>
        </div>
      )}
    </div>
  );
}; 