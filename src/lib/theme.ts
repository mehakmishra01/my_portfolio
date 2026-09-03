export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getInitialTheme(): Theme {
  return getStoredTheme() ?? 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
}

export function persistTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme)
}
