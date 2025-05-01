import React from 'react';
import { Link } from 'wouter';

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
    <Link href="/" className="flex items-center space-x-2">
      <img
        src="/images/logo/logo-primary.png"
        alt="House of Digital Business"
        className="h-10 w-auto"
      />
    </Link>
  );
}; 