import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Zap, Shield, Code, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Trải Nghiệm Tương Tác Cực Đỉnh',
    description: 'Các hiệu ứng chuyển động, hover, active và các animation 3D đỉnh cao được tối ưu hóa bằng CSS thuần và Framer Motion giúp giao diện trở nên sống động, tăng tỷ lệ chuyển đổi.',
    className: 'md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-[400px]',
    visual: (
      <div className="absolute right-0 bottom-0 top-1/2 md:top-0 w-full md:w-1/2 overflow-hidden opacity-20 md:opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent md:bg-gradient-to-l z-10"></div>
        <div className="w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl absolute -right-20 -bottom-20 animate-pulse"></div>
        <div className="w-64 h-64 rounded-full bg-pink-500/20 blur-3xl absolute right-16 top-16"></div>
      </div>
    )
  },
  {
    icon: Zap,
    title: 'Copy-Paste Ăn Ngay',
    description: 'Bỏ qua các bước cài đặt thư viện rườm rà. Chỉ cần chọn, click sao chép và dán trực tiếp mã nguồn vào dự án.',
    className: 'md:col-span-1',
  },
  {
    icon: Shield,
    title: 'Độ Tin Cậy Cao',
    description: 'Mã nguồn được tối ưu sạch sẽ, không có mã độc, tương thích với mọi framework hiện đại như React, Next.js, Vue.',
    className: 'md:col-span-1',
  },
  {
    icon: Smartphone,
    title: 'Tương Thích Di Động',
    description: 'Thiết kế chuẩn Mobile-First giúp mọi UI components đều hiển thị và hoạt động mượt mà trên màn hình nhỏ.',
    className: 'md:col-span-1',
  },
  {
    icon: Code,
    title: 'Tùy Biến Dễ Dàng',
    description: 'Cấu trúc code trực quan, sử dụng các biến CSS custom properties hoặc class Tailwind giúp bạn dễ dàng thay đổi màu sắc, khoảng cách và kích thước để phù hợp với ngôn ngữ thiết kế riêng.',
    className: 'md:col-span-2',
    visual: (
      <div className="absolute right-6 bottom-4 text-xs font-mono text-indigo-400/30 hidden md:block select-none pointer-events-none">
        {`const Button = () => {\n  return (\n    <button className="neon-btn">\n      Explore\n    </button>\n  )\n}`}
      </div>
    )
  }
]

export const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-[#050510] py-24 border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs md:text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-3 block">
            Tính năng nổi bật
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Xây Dựng Giao Diện Đẳng Cấp
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Nâng tầm trang web của bạn bằng các mảnh ghép được thiết kế tối ưu, chuyên nghiệp và bắt mắt nhất.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`${feature.className} group`}
            >
              <div
                onMouseMove={handleMouseMove}
                className="bento-card h-full p-8 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Highlight line on top */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent group-hover:via-indigo-500/50 transition-all duration-500"></div>

                <div className="z-10">
                  <div className="inline-flex p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-indigo-400 group-hover:text-pink-400 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-300 mb-6">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Optional visual elements inside grid card */}
                {'visual' in feature && feature.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

