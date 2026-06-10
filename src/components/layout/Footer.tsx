import { Code2, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative border-t border-border-primary bg-primary transition-colors duration-500">
      {/* Gradient glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-accent-400 to-neon-purple p-2 rounded-xl">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-text-primary">ZenithUI</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Kho UI/UX component miễn phí dành cho developers và designers. 
              Copy code và sử dụng ngay trong dự án của bạn.
            </p>
            <div className="flex items-center gap-1.5 text-sm text-text-muted">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-neon-pink fill-neon-pink" />
              <span>in Vietnam</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-text-primary/60 uppercase tracking-[0.15em] mb-5">
              Navigation
            </h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300">
                Trang chủ
              </Link>
              <Link to="/components" className="block text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300">
                Components
              </Link>
              <Link to="/components?category=buttons" className="block text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300">
                Buttons
              </Link>
              <Link to="/components?category=cards" className="block text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300">
                Cards
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-primary/60 uppercase tracking-[0.15em] mb-5">
              Categories
            </h4>
            <div className="space-y-3">
              <Link to="/components?category=animations" className="block text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300">
                Animations
              </Link>
              <Link to="/components?category=heroes" className="block text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300">
                Hero Sections
              </Link>
              <Link to="/components?category=forms" className="block text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300">
                Forms
              </Link>
              <Link to="/components?category=loaders" className="block text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300">
                Loaders
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border-primary flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} ZenithUI. Free & Open Source.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              GitHub
            </a>
            <span className="text-xs text-text-muted/40">•</span>
            <span className="text-xs text-text-muted">
              Built with React + Vite
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
