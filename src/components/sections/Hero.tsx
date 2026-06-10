import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Suspense, useState } from 'react'
import { ParticleSystem } from '../3d/ParticleSystem'
import { GeometricShapes } from '../3d/GeometricShapes'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'
import { Loading3D } from '../3d/Loading3D'
import Toast from '../Toast'

export const Hero = () => {
  const [showToast, setShowToast] = useState(false)
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#070714]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
        >
          <Suspense fallback={<Loading3D />}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#d946ef" />
            <pointLight position={[0, -5, 5]} intensity={0.5} color="#00ff88" />
            <ParticleSystem count={typeof window !== 'undefined' && window.innerWidth < 768 ? 500 : 1500} color="#6366f1" />
            <GeometricShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtle Mesh Background Overlay */}
      <div className="absolute inset-0 bg-radial-mesh opacity-30 pointer-events-none z-1"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 max-w-7xl mx-auto w-full pt-16 md:pt-0">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-white/90 tracking-wide">
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
            <span className="bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.35)] font-extrabold">
              UIUX Experience
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Thư viện component mẫu chất lượng cao, thiết kế hiện đại, tương tác 3D mượt mà và hoàn toàn miễn phí.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap mb-14"
          >
            <Link to="/components">
              <Button variant="glow" className="px-8 py-4 text-base font-bold">Khám phá ngay</Button>
            </Link>
            <Button 
              variant="secondary"
              className="px-8 py-4 text-base font-medium bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-sm"
              onClick={() => setShowToast(true)}
            >
              Xem Demo
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto border-t border-white/10 pt-8"
          >
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white">45+</div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-1">Components</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-1">Free</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white">Modern</div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-1">Designs</div>
            </div>
          </motion.div>
        </div>

        {/* Floating Interactive Micro Cards (Only shown on Desktop) */}
        <div className="hidden lg:block absolute inset-x-0 bottom-24 pointer-events-none z-5 h-0 overflow-visible">
          <div className="max-w-7xl mx-auto w-full relative">
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              animate={{ opacity: 0.8, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="absolute left-8 bottom-4 w-52 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">🔘</div>
              <div>
                <div className="text-xs font-bold text-white">3D Push Button</div>
                <div className="text-[10px] text-slate-400">Click interactions ready</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, y: 30 }}
              animate={{ opacity: 0.8, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute right-8 bottom-12 w-56 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">🃏</div>
              <div>
                <div className="text-xs font-bold text-white">Glassmorphism Card</div>
                <div className="text-[10px] text-slate-400">Smooth hover transitions</div>
              </div>
            </motion.div>
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
          className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2.5 bg-white/50 rounded-full mt-1.5"
          />
        </motion.div>
      </motion.div>

      {/* Toast Notification */}
      <Toast
        message="Trang giới thiệu Demo đang được thiết lập!"
        isOpen={showToast}
        onClose={() => setShowToast(false)}
        duration={3000}
      />
    </section>
  )
}

