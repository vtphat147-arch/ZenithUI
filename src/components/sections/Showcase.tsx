import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Heart, ExternalLink } from 'lucide-react'
import { componentsData } from '../../data/components'

export const Showcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Select 10 featured components or some premium ones
  const showcaseComponents = componentsData.filter(c => c.featured || c.likes > 400).slice(0, 12)
  
  // Split into two rows
  const row1 = showcaseComponents.slice(0, 6)
  const row2 = showcaseComponents.slice(6, 12).length > 0 ? showcaseComponents.slice(6, 12) : showcaseComponents.slice(0, 6)

  // Helper to generate dynamic colored placeholder gradients
  const getGradientClass = (category: string) => {
    switch (category) {
      case 'buttons': return 'from-indigo-600 to-purple-600'
      case 'cards': return 'from-pink-600 to-rose-600'
      case 'navbars': return 'from-cyan-600 to-blue-600'
      case 'heroes': return 'from-violet-600 to-indigo-900'
      case 'forms': return 'from-emerald-600 to-teal-600'
      case 'loaders': return 'from-amber-600 to-orange-600'
      case 'toggles': return 'from-fuchsia-600 to-purple-700'
      case 'tooltips': return 'from-sky-600 to-blue-700'
      default: return 'from-indigo-600 via-purple-600 to-pink-600'
    }
  }

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'buttons': return '🔘'
      case 'cards': return '🃏'
      case 'navbars': return '🧭'
      case 'heroes': return '🦸'
      case 'forms': return '📝'
      case 'loaders': return '⏳'
      case 'animations': return '✨'
      case 'layouts': return '📐'
      case 'modals': return '💬'
      case 'toggles': return '🎛️'
      case 'tooltips': return 'ℹ️'
      default: return '🎨'
    }
  }

  const renderCard = (component: any) => (
    <Link
      to={`/components/${component.id}`}
      key={`${component.id}-${Math.random()}`}
      className="block w-[280px] md:w-[320px] flex-shrink-0 group"
    >
      <div className="component-card h-full p-6 flex flex-col justify-between border-border-primary hover:border-indigo-500/30 transition-all duration-400 select-none">
        <div>
          {/* Card Visual Header (CSS gradient preview) */}
          <div className={`relative h-36 mb-5 rounded-xl overflow-hidden bg-gradient-to-br ${getGradientClass(component.category)} flex items-center justify-center border border-border-primary`}>
            {/* Mesh effect */}
            <div className="absolute inset-0 bg-radial-mesh opacity-30"></div>
            
            {/* Floating emoji overlay */}
            <div className="text-5xl group-hover:scale-125 transition-transform duration-500 z-10 filter drop-shadow-lg">
              {getCategoryEmoji(component.category)}
            </div>

            {/* View Source indicator on hover */}
            <div className="preview-overlay flex items-center justify-center gap-2 text-white font-semibold text-xs tracking-wider z-20">
              <span>Xem Code</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-indigo-500 dark:text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/10">
              {component.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors duration-300">
            {component.name}
          </h3>
          <p className="text-xs md:text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {component.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-text-muted mt-6 pt-4 border-t border-border-primary">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {component.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-pink-500/70" />
              {component.likes}
            </span>
          </div>
          <span className="font-mono text-[10px] text-text-muted">{component.framework}</span>
        </div>
      </div>
    </Link>
  )

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-secondary py-24 border-t border-border-primary transition-colors duration-500 flex flex-col justify-center">
      {/* Background blobs */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full mb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs md:text-sm font-semibold text-pink-500 dark:text-pink-400 tracking-widest uppercase mb-3 block">
            Thư viện thiết kế
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-text-primary via-text-secondary to-pink-500 dark:to-pink-400 bg-clip-text text-transparent leading-tight">
            Thư Viện Component Mẫu
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Xem trước một số thiết kế nổi bật. Hover chuột vào thẻ để tạm dừng hoặc click để lấy toàn bộ code.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 w-full overflow-hidden relative z-10">
        {/* Shadow Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-secondary to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-secondary to-transparent z-20 pointer-events-none"></div>

        {/* Row 1: Scrolls Left */}
        <div className="flex w-full overflow-hidden">
          <div className="marquee-track animate-marquee">
            {row1.map(renderCard)}
            {row1.map(renderCard)} {/* Duplicate for seamless loop */}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="flex w-full overflow-hidden">
          <div className="marquee-track animate-marquee-reverse">
            {row2.map(renderCard)}
            {row2.map(renderCard)} {/* Duplicate for seamless loop */}
          </div>
        </div>
      </div>
    </section>
  )
}
