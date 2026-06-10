import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'

export const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative min-h-[80vh] w-full overflow-hidden bg-primary py-24 flex items-center justify-center border-t border-border-primary transition-colors duration-500">
      {/* CSS Mesh background pattern */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>
      
      {/* Colorful mesh blob backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[100px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="gradient-border-animated max-w-3xl mx-auto rounded-[32px]"
        >
          {/* Inner Card Content */}
          <div className="bg-secondary/90 backdrop-blur-2xl px-8 py-16 md:p-20 text-center rounded-[32px] border border-border-primary relative overflow-hidden transition-colors duration-500">
            {/* Mesh glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 blur-3xl pointer-events-none"></div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-text-primary via-text-secondary to-indigo-500 dark:from-indigo-200 dark:via-purple-300 dark:to-pink-200 bg-clip-text text-transparent leading-tight"
            >
              Sẵn Sàng Nâng Tầm Giao Diện?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-xl text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Bắt đầu tạo ra những trang web tuyệt vời và thu hút người dùng của bạn ngay hôm nay với thư viện UI hoàn toàn miễn phí.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex gap-4 justify-center flex-wrap relative z-10"
            >
              <Link to="/components">
                <Button variant="glow" className="px-8 py-4 font-bold text-base">Xem tất cả Components</Button>
              </Link>
              <Button 
                variant="secondary"
                className="px-8 py-4 font-medium text-base bg-tertiary border-border-primary hover:bg-secondary text-text-primary backdrop-blur-sm"
                onClick={() => {
                  window.location.href = 'mailto:support@zenithui.com?subject=Liên%20hệ%20từ%20ZenithUI'
                }}
              >
                Liên hệ chúng tôi
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
