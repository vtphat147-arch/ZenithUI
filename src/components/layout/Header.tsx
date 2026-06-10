import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Menu, X, Sparkles, Github, Sun, Moon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { componentsData } from '../../data/components'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Theme support
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light'
      }
      return 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const navItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/components', label: 'Components' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/80 backdrop-blur-2xl shadow-lg border-b border-border-primary'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll Gradient Bottom Border Line */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-neon-purple rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-r from-accent-400 to-neon-purple p-2.5 rounded-xl">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-text-primary tracking-tight">
                ZenithUI
              </span>
              <span className="text-[10px] text-text-muted font-medium uppercase tracking-[0.2em]">
                Free Library
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-5 py-2 font-medium transition-all duration-300 group"
                >
                  <span
                    className={`relative z-10 text-sm transition-colors duration-300 flex items-center gap-1.5 ${
                      active ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.path === '/components' && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-500 dark:text-indigo-300 border border-indigo-500/30 font-bold font-mono">
                        {componentsData.length}
                      </span>
                    )}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-text-primary/[0.06] rounded-lg border border-text-primary/[0.06]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA & Tools */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-text-primary/[0.06] transition-all duration-300"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            {/* Github link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-text-primary/[0.06] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <Link
              to="/components"
              className="group relative px-5 py-2.5 bg-gradient-to-r from-accent-400 to-neon-purple text-white rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Khám phá
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>

          {/* Mobile Actions block */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-text-primary/[0.06] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-text-secondary hover:bg-text-primary/[0.06] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-2xl border-t border-border-primary"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-accent-400/10 text-accent-400 border border-accent-400/20'
                        : 'text-text-secondary hover:bg-text-primary/[0.04] hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-3"
              >
                <Link
                  to="/components"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-accent-400 to-neon-purple text-white rounded-xl font-semibold text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Khám phá Components
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
