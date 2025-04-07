import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00E5E5] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === 'dark' ? <Sun className="h-5 w-5 text-[#00FFFF]" /> : <Moon className="h-5 w-5" />}
      </motion.div>
    </button>
  )
}
