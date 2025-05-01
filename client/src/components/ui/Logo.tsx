import React from 'react';
import { Link } from 'wouter';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true, className }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  return (
    <Link href="/" className="flex items-center space-x-2">
      <img
        src="/src/assets/images/logo/logo.png"
        alt="House of Digital Business"
        className={`h-12 w-auto ${className}`}
      />
    </Link>
  );
}; 