import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Lam Nguyen',
    role: 'Frontend Architect @ VinGroup',
    content: 'This component library reduced our UI development time by 50%. The hover effects and animations are incredibly smooth, and the code is clean and intuitive.',
    avatarColor: 'bg-indigo-500',
    initial: 'L',
    rating: 5
  },
  {
    name: 'Trang Pham',
    role: 'Senior UI/UX Designer @ VNG',
    content: 'Extremely modern and trendy design style. Our landing page conversion rates soared after integrating a few buttons and cards from ZenithUI.',
    avatarColor: 'bg-pink-500',
    initial: 'T',
    rating: 5
  },
  {
    name: 'Alex Dang',
    role: 'Full Stack Creator',
    content: 'Minimalist, raw CSS components that are easy to copy, paste, and customize. Perfect for indie creators who want to ship fast with polished designs.',
    avatarColor: 'bg-cyan-500',
    initial: 'A',
    rating: 5
  }
]

const stats = [
  { value: '15,000+', label: 'Downloads' },
  { value: '45+', label: 'Templates' },
  { value: '99.9%', label: 'Satisfaction' },
  { value: '4.9/5', label: 'Rating' }
]

export const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-primary py-24 border-t border-border-primary transition-colors duration-500">
      {/* Background Dot pattern */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs md:text-sm font-semibold text-indigo-500 dark:text-indigo-400 tracking-widest uppercase mb-3 block">
            Community Feedback
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-text-primary via-text-secondary to-indigo-500 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Trusted by Developers
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            What frontend developers and designers say about ZenithUI.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2 bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-text-muted font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bento-card h-full p-8 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-400 relative overflow-hidden bg-secondary">
                <div>
                  <Quote className="w-10 h-10 text-indigo-500/20 mb-6" />
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-text-secondary mb-8 text-base leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-border-primary pt-6 mt-auto">
                  {/* Avatar Circle */}
                  <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center font-bold text-white text-base shadow-lg`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm">{testimonial.name}</p>
                    <p className="text-text-muted text-xs mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
