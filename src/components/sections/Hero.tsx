import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'
import Toast from '../Toast'

export const Hero = () => {
  const [showToast, setShowToast] = useState(false)
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#fbfaf7] dark:bg-[#090915] transition-colors duration-500">
      
      {/* Modern Grid Line Pattern (Claude / SaaS style) */}
      <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12] pointer-events-none z-1">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-lines" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900/10 dark:text-white/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-lines)" />
        </svg>
      </div>

      {/* Abstract Glowing Blobs in Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-[100px] md:blur-[130px] animate-float-slow"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-pink-500/10 dark:bg-pink-500/10 blur-[90px] md:blur-[120px] animate-float-delayed"></div>
      </div>

      {/* Subtle Mesh Background Overlay */}
      <div className="absolute inset-0 bg-radial-mesh opacity-[0.15] dark:opacity-30 pointer-events-none z-1"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pb-24 md:pb-28 px-4 max-w-7xl mx-auto w-full pt-16 md:pt-0">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border-primary shadow-sm mb-6"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-text-primary tracking-wide">
              ✨ New Version v2.5: 45+ Beautiful Components
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-[1.1] select-none"
            style={{
              letterSpacing: '-2px',
            }}
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-indigo-100 dark:to-white bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(102,126,234,0.15)] dark:drop-shadow-[0_0_30px_rgba(168,85,247,0.35)] font-extrabold">
              ZenithUI Experience
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            High-quality component library, modern designs, smooth interactions, completely free.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap mb-14"
          >
            <Link to="/components">
              <Button variant="glow" className="px-8 py-4 text-base font-bold">Explore Now</Button>
            </Link>
            <Button 
              variant="secondary"
              className="px-8 py-4 text-base font-medium"
              onClick={() => setShowToast(true)}
            >
              View Demo
            </Button>
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto border-t border-border-primary pt-8"
          >
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-text-primary">45+</div>
              <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider font-semibold mt-1">Components</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-text-primary">100%</div>
              <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider font-semibold mt-1">Free</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-text-primary">Modern</div>
              <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider font-semibold mt-1">Designs</div>
            </div>
          </motion.div>
        </div>

        {/* Floating Interactive Micro Cards (SaaS Widgets style) */}
        <div className="hidden lg:block absolute inset-x-0 bottom-24 pointer-events-none z-5 h-0 overflow-visible">
          <div className="max-w-7xl mx-auto w-full relative">
            <Link to="/components/btn-3d-push" className="pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, x: -50, y: 30 }}
                animate={{ opacity: 0.9, x: 0, y: 0 }}
                whileHover={{ scale: 1.05, y: -4, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="absolute left-8 bottom-12 w-60 p-4 rounded-xl bg-secondary border border-border-primary shadow-sm flex items-center gap-3 cursor-pointer hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">🔘</div>
                <div>
                  <div className="text-xs font-bold text-text-primary">3D Push Button</div>
                  <div className="text-[10px] text-text-muted">Click to view component</div>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/components/card-glass" className="pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, x: 50, y: 30 }}
                animate={{ opacity: 0.9, x: 0, y: 0 }}
                whileHover={{ scale: 1.05, y: -4, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute right-8 bottom-12 w-60 p-4 rounded-xl bg-secondary border border-border-primary shadow-sm flex items-center gap-3 cursor-pointer hover:border-pink-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-pink-500/20 text-pink-600 dark:text-pink-400">🃏</div>
                <div>
                  <div className="text-xs font-bold text-text-primary">Glassmorphism Card</div>
                  <div className="text-[10px] text-text-muted">Click to view component</div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 border-2 border-border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2.5 bg-text-primary/50 rounded-full mt-1.5"
          />
        </motion.div>
      </motion.div>

      {/* Toast Notification */}
      <Toast
        message="Demo showcase is currently being set up!"
        isOpen={showToast}
        onClose={() => setShowToast(false)}
        duration={3000}
      />
    </section>
  )
}
