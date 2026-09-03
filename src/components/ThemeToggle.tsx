import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="theme-toggle group relative flex h-9 w-[4.25rem] items-center rounded-full border border-border bg-charcoal-soft p-1 shadow-sm"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="theme-toggle-thumb absolute flex h-7 w-7 items-center justify-center rounded-full bg-cream shadow-md"
        style={{ left: isDark ? 'calc(100% - 1.85rem)' : '0.25rem' }}
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {isDark ? (
            <Moon size={13} className="text-charcoal" strokeWidth={2} />
          ) : (
            <Sun size={13} className="theme-toggle-icon-light" strokeWidth={2} />
          )}
        </motion.span>
      </motion.span>

      <span className="flex w-full items-center justify-between px-2">
        <Sun
          size={12}
          className={`transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-0'}`}
          aria-hidden="true"
        />
        <Moon
          size={12}
          className={`transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-30'}`}
          aria-hidden="true"
        />
      </span>
    </button>
  )
}
