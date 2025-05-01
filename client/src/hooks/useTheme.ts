import { useState, useEffect } from 'react';

export const useTheme = () => {
  return {
    isDark: true,
    toggleTheme: () => {} // Função vazia pois não precisamos mais alternar o tema
  };
}; 