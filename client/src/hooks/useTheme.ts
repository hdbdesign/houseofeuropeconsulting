import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Check for system preference
    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    return (savedTheme as Theme) || 'light';
  });
  
  const isDark = theme === 'dark';
  
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save the theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const setDarkTheme = () => setTheme('dark');
  const setLightTheme = () => setTheme('light');
  
  return {
    theme,
    isDark,
    toggleTheme,
    setDarkTheme,
    setLightTheme
  };
} 