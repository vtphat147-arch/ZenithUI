export interface UIComponent {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  htmlCode: string
  cssCode: string
  jsCode?: string
  framework: string
  views: number
  likes: number
  createdAt: string
  featured?: boolean
}

export const categories = [
  { value: 'all', label: 'Tất cả', icon: '🎨' },
  { value: 'buttons', label: 'Buttons', icon: '🔘' },
  { value: 'cards', label: 'Cards', icon: '🃏' },
  { value: 'navbars', label: 'Navigation', icon: '🧭' },
  { value: 'heroes', label: 'Hero Sections', icon: '🦸' },
  { value: 'forms', label: 'Forms', icon: '📝' },
  { value: 'footers', label: 'Footers', icon: '🔻' },
  { value: 'animations', label: 'Animations', icon: '✨' },
  { value: 'layouts', label: 'Layouts', icon: '📐' },
  { value: 'modals', label: 'Modals', icon: '💬' },
  { value: 'loaders', label: 'Loaders', icon: '⏳' },
  { value: 'toggles', label: 'Toggles', icon: '🎛️' },
  { value: 'tooltips', label: 'Tooltips', icon: 'ℹ️' },
]

export const componentsData: UIComponent[] = [
  // ═══════════════════════════════════════
  // BUTTONS
  // ═══════════════════════════════════════
  {
    id: 'btn-neon-glow',
    name: 'Neon Glow Button',
    description: 'Button với hiệu ứng neon phát sáng tuyệt đẹp, hover để xem animation rực rỡ.',
    category: 'buttons',
    tags: ['neon', 'glow', 'animation', 'hover'],
    framework: 'HTML/CSS',
    views: 2847,
    likes: 421,
    createdAt: '2025-12-01',
    featured: true,
    htmlCode: `<button class="neon-btn">Neon Glow</button>
<button class="neon-btn neon-pink">Pink Neon</button>
<button class="neon-btn neon-cyan">Cyan Neon</button>`,
    cssCode: `.neon-btn {
  position: relative;
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #00ff88;
  background: transparent;
  border: 2px solid #00ff88;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  margin: 12px;
  font-family: 'Segoe UI', sans-serif;
}
.neon-btn:hover {
  color: #0a0a0a;
  background: #00ff88;
  box-shadow: 0 0 20px #00ff88, 0 0 60px #00ff88, 0 0 100px #00ff8844;
  text-shadow: none;
}
.neon-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0,255,136,0.3), transparent);
  transition: left 0.5s;
}
.neon-btn:hover::before { left: 100%; }
.neon-pink { color: #ff00aa; border-color: #ff00aa; }
.neon-pink:hover { background: #ff00aa; color: #0a0a0a; box-shadow: 0 0 20px #ff00aa, 0 0 60px #ff00aa; }
.neon-pink::before { background: linear-gradient(90deg, transparent, rgba(255,0,170,0.3), transparent); }
.neon-cyan { color: #00d4ff; border-color: #00d4ff; }
.neon-cyan:hover { background: #00d4ff; color: #0a0a0a; box-shadow: 0 0 20px #00d4ff, 0 0 60px #00d4ff; }
.neon-cyan::before { background: linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent); }
body { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0a; }`
  },
  {
    id: 'btn-morphing',
    name: 'Morphing Gradient Button',
    description: 'Button với gradient chuyển động liên tục, tạo hiệu ứng morphing cực đẹp.',
    category: 'buttons',
    tags: ['gradient', 'morphing', 'animated'],
    framework: 'HTML/CSS',
    views: 1923,
    likes: 318,
    createdAt: '2025-11-15',
    htmlCode: `<button class="morph-btn">Explore Now</button>
<button class="morph-btn morph-sunset">Sunset Vibes</button>`,
    cssCode: `@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.morph-btn {
  padding: 18px 52px;
  font-size: 17px;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #667eea);
  background-size: 300% 300%;
  animation: gradient-shift 4s ease infinite;
  box-shadow: 0 8px 32px rgba(102,126,234,0.4);
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 12px;
  font-family: 'Segoe UI', sans-serif;
  letter-spacing: 1px;
}
.morph-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 16px 48px rgba(102,126,234,0.6);
}
.morph-sunset {
  background: linear-gradient(135deg, #f093fb, #f5576c, #fda085, #f093fb);
  box-shadow: 0 8px 32px rgba(245,87,108,0.4);
}
.morph-sunset:hover { box-shadow: 0 16px 48px rgba(245,87,108,0.6); }
body { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; min-height: 100vh; background: #0f0f1a; gap: 16px; }`
  },
  {
    id: 'btn-liquid',
    name: 'Liquid Fill Button',
    description: 'Hiệu ứng nước chảy tràn lên nút khi hover, sử dụng CSS thuần.',
    category: 'buttons',
    tags: ['liquid', 'fill', 'creative', 'hover'],
    framework: 'HTML/CSS',
    views: 3102,
    likes: 534,
    createdAt: '2025-10-20',
    featured: true,
    htmlCode: `<button class="liquid-btn"><span>Liquid Fill</span></button>
<button class="liquid-btn liquid-purple"><span>Purple Wave</span></button>`,
    cssCode: `@keyframes liquid {
  0%, 100% { border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%; transform: rotate(0deg); }
  25% { border-radius: 62% 38% 46% 54% / 60% 44% 56% 40%; }
  50% { border-radius: 45% 55% 62% 38% / 53% 63% 37% 47%; transform: rotate(180deg); }
  75% { border-radius: 55% 45% 38% 62% / 40% 56% 44% 60%; }
}
.liquid-btn {
  position: relative;
  padding: 18px 56px;
  font-size: 17px;
  font-weight: 700;
  color: #00d4ff;
  background: transparent;
  border: 2px solid #00d4ff;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.5s;
  margin: 12px;
  font-family: 'Segoe UI', sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.liquid-btn span { position: relative; z-index: 1; }
.liquid-btn::before {
  content: '';
  position: absolute;
  left: -10%; bottom: -120%;
  width: 120%; height: 200%;
  background: #00d4ff;
  animation: liquid 4s ease-in-out infinite;
  transition: bottom 0.6s ease;
}
.liquid-btn:hover::before { bottom: -20%; }
.liquid-btn:hover { color: #0a0a0a; }
.liquid-purple { color: #a855f7; border-color: #a855f7; }
.liquid-purple::before { background: #a855f7; }
.liquid-purple:hover { color: #0a0a0a; }
body { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0a; gap: 16px; }`
  },

  // ═══════════════════════════════════════
  // CARDS
  // ═══════════════════════════════════════
  {
    id: 'card-glass',
    name: 'Glassmorphism Card',
    description: 'Card với hiệu ứng kính mờ (glassmorphism) đẹp mắt, backdrop blur và border gradient.',
    category: 'cards',
    tags: ['glass', 'blur', 'modern', 'premium'],
    framework: 'HTML/CSS',
    views: 4521,
    likes: 876,
    createdAt: '2025-12-10',
    featured: true,
    htmlCode: `<div class="glass-container">
  <div class="glass-card">
    <div class="card-icon">🚀</div>
    <h3>Premium Plan</h3>
    <p>Truy cập không giới hạn mọi tính năng cao cấp</p>
    <div class="price">$29<span>/tháng</span></div>
    <button class="card-btn">Bắt đầu ngay</button>
  </div>
  <div class="glass-card featured">
    <div class="badge">Popular</div>
    <div class="card-icon">💎</div>
    <h3>Enterprise</h3>
    <p>Giải pháp tùy chỉnh cho doanh nghiệp lớn</p>
    <div class="price">$99<span>/tháng</span></div>
    <button class="card-btn">Liên hệ</button>
  </div>
</div>`,
    cssCode: `.glass-container {
  display: flex; gap: 24px; padding: 40px; min-height: 100vh;
  align-items: center; justify-content: center; flex-wrap: wrap;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
}
.glass-card {
  position: relative;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 24px;
  padding: 40px 32px;
  width: 280px;
  text-align: center;
  color: white;
  transition: all 0.4s ease;
  overflow: hidden;
}
.glass-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
}
.glass-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 24px 64px rgba(102,126,234,0.25);
  border-color: rgba(255,255,255,0.2);
}
.glass-card.featured {
  background: rgba(102,126,234,0.15);
  border-color: rgba(102,126,234,0.3);
  transform: scale(1.05);
}
.glass-card.featured:hover { transform: scale(1.05) translateY(-12px); }
.badge {
  position: absolute; top: 16px; right: -28px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 4px 40px; font-size: 12px; font-weight: 700;
  transform: rotate(45deg); letter-spacing: 1px;
}
.card-icon { font-size: 48px; margin-bottom: 16px; }
.glass-card h3 { font-size: 24px; font-weight: 800; margin-bottom: 12px; }
.glass-card p { color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
.price { font-size: 42px; font-weight: 900; margin-bottom: 24px; }
.price span { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.5); }
.card-btn {
  width: 100%; padding: 14px; border: none; border-radius: 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; font-size: 16px; font-weight: 700; cursor: pointer;
  transition: all 0.3s;
}
.card-btn:hover { box-shadow: 0 8px 24px rgba(102,126,234,0.5); transform: translateY(-2px); }`
  },
  {
    id: 'card-hover-3d',
    name: '3D Hover Card',
    description: 'Card với hiệu ứng xoay 3D khi hover chuột, perspective transform đẹp mắt.',
    category: 'cards',
    tags: ['3d', 'perspective', 'hover', 'transform'],
    framework: 'HTML/CSS/JS',
    views: 3215,
    likes: 612,
    createdAt: '2025-11-28',
    htmlCode: `<div class="cards-3d">
  <div class="card-3d" onmousemove="handleMove(event)" onmouseleave="handleLeave(event)">
    <div class="card-3d-inner">
      <div class="card-3d-glow"></div>
      <span class="card-emoji">🎯</span>
      <h3>Interactive 3D</h3>
      <p>Di chuyển chuột trên card để xem hiệu ứng 3D tương tác</p>
    </div>
  </div>
  <div class="card-3d" onmousemove="handleMove(event)" onmouseleave="handleLeave(event)">
    <div class="card-3d-inner">
      <div class="card-3d-glow"></div>
      <span class="card-emoji">⚡</span>
      <h3>Lightning Fast</h3>
      <p>Hiệu suất cao với CSS transform và GPU acceleration</p>
    </div>
  </div>
</div>`,
    cssCode: `.cards-3d {
  display: flex; gap: 32px; padding: 40px; min-height: 100vh;
  align-items: center; justify-content: center; flex-wrap: wrap;
  background: #0a0a0f;
}
.card-3d {
  perspective: 1000px;
  width: 300px; height: 380px;
}
.card-3d-inner {
  position: relative; width: 100%; height: 100%;
  background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 40px 28px;
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; color: white; overflow: hidden;
}
.card-3d-glow {
  position: absolute; width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(102,126,234,0.3), transparent);
  border-radius: 50%; pointer-events: none;
  transition: all 0.1s ease; opacity: 0;
}
.card-3d:hover .card-3d-glow { opacity: 1; }
.card-emoji { font-size: 56px; margin-bottom: 20px; transform: translateZ(40px); }
.card-3d-inner h3 { font-size: 22px; font-weight: 800; margin-bottom: 12px; transform: translateZ(30px); }
.card-3d-inner p { color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.7; transform: translateZ(20px); }`,
    jsCode: `function handleMove(e) {
  const card = e.currentTarget;
  const inner = card.querySelector('.card-3d-inner');
  const glow = card.querySelector('.card-3d-glow');
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (y - centerY) / 12;
  const rotateY = (centerX - x) / 12;
  inner.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
  if (glow) {
    glow.style.left = (x - 100) + 'px';
    glow.style.top = (y - 100) + 'px';
  }
}
function handleLeave(e) {
  const inner = e.currentTarget.querySelector('.card-3d-inner');
  inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
}`
  },

  // ═══════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════
  {
    id: 'nav-floating',
    name: 'Floating Glassmorphism Navbar',
    description: 'Thanh điều hướng nổi với hiệu ứng kính mờ, blur backdrop và animation tinh tế.',
    category: 'navbars',
    tags: ['floating', 'glass', 'blur', 'sticky'],
    framework: 'HTML/CSS',
    views: 5124,
    likes: 932,
    createdAt: '2025-12-05',
    featured: true,
    htmlCode: `<nav class="float-nav">
  <div class="nav-logo">
    <span class="logo-icon">◆</span>
    <span>Brand</span>
  </div>
  <div class="nav-links">
    <a href="#" class="nav-link active">Home</a>
    <a href="#" class="nav-link">Products</a>
    <a href="#" class="nav-link">About</a>
    <a href="#" class="nav-link">Contact</a>
  </div>
  <button class="nav-cta">Get Started</button>
</nav>
<div class="demo-content">
  <h1>Floating Navbar Demo</h1>
  <p>Scroll down to see the navbar effect</p>
</div>`,
    cssCode: `body { margin: 0; background: #0a0a0f; color: white; font-family: 'Segoe UI', sans-serif; }
.float-nav {
  position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 32px;
  padding: 14px 32px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 100px;
  z-index: 100;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
.nav-logo {
  display: flex; align-items: center; gap: 8px;
  font-weight: 800; font-size: 20px;
}
.logo-icon {
  color: #667eea; font-size: 24px;
  animation: pulse-icon 2s ease infinite;
}
@keyframes pulse-icon {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}
.nav-links { display: flex; gap: 8px; }
.nav-link {
  padding: 8px 18px; border-radius: 50px;
  color: rgba(255,255,255,0.6); text-decoration: none;
  font-size: 14px; font-weight: 500;
  transition: all 0.3s;
}
.nav-link:hover, .nav-link.active {
  color: white;
  background: rgba(255,255,255,0.1);
}
.nav-cta {
  padding: 10px 24px; border: none; border-radius: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; font-weight: 700; font-size: 14px;
  cursor: pointer; transition: all 0.3s;
}
.nav-cta:hover {
  box-shadow: 0 4px 20px rgba(102,126,234,0.5);
  transform: translateY(-2px);
}
.demo-content {
  min-height: 200vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding-top: 120px;
}
.demo-content h1 { font-size: 48px; margin-bottom: 16px; }
.demo-content p { color: rgba(255,255,255,0.5); font-size: 18px; }`
  },

  // ═══════════════════════════════════════
  // HERO SECTIONS
  // ═══════════════════════════════════════
  {
    id: 'hero-gradient-mesh',
    name: 'Gradient Mesh Hero',
    description: 'Hero section với gradient mesh background animation, typography đẹp và CTA buttons.',
    category: 'heroes',
    tags: ['gradient', 'mesh', 'landing', 'animated'],
    framework: 'HTML/CSS',
    views: 6234,
    likes: 1089,
    createdAt: '2025-12-12',
    featured: true,
    htmlCode: `<section class="hero-mesh">
  <div class="mesh-bg">
    <div class="mesh-blob blob-1"></div>
    <div class="mesh-blob blob-2"></div>
    <div class="mesh-blob blob-3"></div>
  </div>
  <div class="hero-content">
    <span class="hero-badge">✨ New Release v2.0</span>
    <h1 class="hero-title">Build Beautiful<br/><span class="gradient-text">Digital Experiences</span></h1>
    <p class="hero-desc">Nền tảng thiết kế UI component hiện đại. Tạo giao diện đẹp mắt chỉ trong vài phút.</p>
    <div class="hero-actions">
      <button class="hero-btn primary">Get Started Free</button>
      <button class="hero-btn secondary">Watch Demo →</button>
    </div>
    <div class="hero-stats">
      <div class="stat"><strong>10K+</strong><span>Components</span></div>
      <div class="stat"><strong>50K+</strong><span>Developers</span></div>
      <div class="stat"><strong>99%</strong><span>Satisfaction</span></div>
    </div>
  </div>
</section>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }
.hero-mesh {
  position: relative; min-height: 100vh; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  background: #050510; font-family: 'Segoe UI', sans-serif;
}
.mesh-bg { position: absolute; inset: 0; overflow: hidden; filter: blur(80px); }
@keyframes float-blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -50px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(50px, 50px) scale(1.05); }
}
.mesh-blob {
  position: absolute; border-radius: 50%;
  animation: float-blob 8s ease-in-out infinite;
}
.blob-1 { width: 500px; height: 500px; background: rgba(102,126,234,0.4); top: -10%; left: -5%; animation-delay: 0s; }
.blob-2 { width: 400px; height: 400px; background: rgba(168,85,247,0.35); top: 40%; right: -5%; animation-delay: -3s; }
.blob-3 { width: 350px; height: 350px; background: rgba(236,72,153,0.3); bottom: -5%; left: 30%; animation-delay: -5s; }
.hero-content {
  position: relative; z-index: 1; text-align: center;
  max-width: 800px; padding: 40px 24px; color: white;
}
.hero-badge {
  display: inline-block; padding: 8px 20px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50px; font-size: 14px; font-weight: 600;
  margin-bottom: 28px; color: rgba(255,255,255,0.8);
}
.hero-title { font-size: 64px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; letter-spacing: -2px; }
.gradient-text {
  background: linear-gradient(135deg, #667eea, #a855f7, #ec4899);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-desc { font-size: 20px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 36px; max-width: 600px; margin-left: auto; margin-right: auto; }
.hero-actions { display: flex; gap: 16px; justify-content: center; margin-bottom: 48px; flex-wrap: wrap; }
.hero-btn {
  padding: 16px 36px; border-radius: 14px; font-size: 16px; font-weight: 700;
  cursor: pointer; transition: all 0.3s; border: none;
}
.hero-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; box-shadow: 0 8px 24px rgba(102,126,234,0.4);
}
.hero-btn.primary:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(102,126,234,0.6); }
.hero-btn.secondary {
  background: rgba(255,255,255,0.06); color: white;
  border: 1px solid rgba(255,255,255,0.15);
}
.hero-btn.secondary:hover { background: rgba(255,255,255,0.12); }
.hero-stats { display: flex; gap: 48px; justify-content: center; flex-wrap: wrap; }
.stat { text-align: center; }
.stat strong { display: block; font-size: 28px; font-weight: 900; }
.stat span { font-size: 13px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; }`
  },

  // ═══════════════════════════════════════
  // FORMS
  // ═══════════════════════════════════════
  {
    id: 'form-floating-labels',
    name: 'Floating Labels Form',
    description: 'Form đăng nhập đẹp với floating label animation, validation states và gradient border.',
    category: 'forms',
    tags: ['floating-label', 'login', 'validation', 'animated'],
    framework: 'HTML/CSS',
    views: 3874,
    likes: 691,
    createdAt: '2025-11-20',
    htmlCode: `<div class="form-container">
  <form class="floating-form">
    <h2>Welcome Back</h2>
    <p class="form-subtitle">Đăng nhập vào tài khoản của bạn</p>
    <div class="input-group">
      <input type="email" id="email" required placeholder=" ">
      <label for="email">Email Address</label>
      <span class="input-line"></span>
    </div>
    <div class="input-group">
      <input type="password" id="password" required placeholder=" ">
      <label for="password">Password</label>
      <span class="input-line"></span>
    </div>
    <div class="form-options">
      <label class="checkbox"><input type="checkbox"><span class="checkmark"></span>Remember me</label>
      <a href="#">Forgot password?</a>
    </div>
    <button type="submit" class="form-submit">Sign In</button>
    <p class="form-footer">Chưa có tài khoản? <a href="#">Đăng ký ngay</a></p>
  </form>
</div>`,
    cssCode: `.form-container {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  font-family: 'Segoe UI', sans-serif;
}
.floating-form {
  width: 400px; padding: 48px 40px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px; color: white;
}
.floating-form h2 { font-size: 28px; font-weight: 800; margin-bottom: 8px; }
.form-subtitle { color: rgba(255,255,255,0.5); margin-bottom: 32px; font-size: 14px; }
.input-group { position: relative; margin-bottom: 28px; }
.input-group input {
  width: 100%; padding: 16px 0 8px 0;
  background: transparent; border: none;
  border-bottom: 2px solid rgba(255,255,255,0.15);
  color: white; font-size: 16px; outline: none;
  transition: border-color 0.3s;
}
.input-group label {
  position: absolute; left: 0; top: 16px;
  color: rgba(255,255,255,0.4); font-size: 16px;
  pointer-events: none; transition: all 0.3s;
}
.input-group input:focus ~ label,
.input-group input:not(:placeholder-shown) ~ label {
  top: -8px; font-size: 12px;
  color: #667eea; font-weight: 600;
}
.input-group input:focus { border-bottom-color: #667eea; }
.input-line {
  position: absolute; bottom: 0; left: 0; width: 0; height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s;
}
.input-group input:focus ~ .input-line { width: 100%; }
.form-options { display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px; font-size: 13px; }
.checkbox { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.6); cursor: pointer; }
.checkbox input { display: none; }
.checkmark {
  width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.2);
  border-radius: 4px; transition: all 0.3s;
}
.checkbox input:checked ~ .checkmark {
  background: #667eea; border-color: #667eea;
}
.form-options a { color: #667eea; text-decoration: none; }
.form-submit {
  width: 100%; padding: 16px; border: none; border-radius: 14px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; font-size: 16px; font-weight: 700;
  cursor: pointer; transition: all 0.3s;
}
.form-submit:hover { box-shadow: 0 8px 24px rgba(102,126,234,0.5); transform: translateY(-2px); }
.form-footer { text-align: center; margin-top: 24px; color: rgba(255,255,255,0.5); font-size: 14px; }
.form-footer a { color: #667eea; text-decoration: none; font-weight: 600; }`
  },

  // ═══════════════════════════════════════
  // LOADERS
  // ═══════════════════════════════════════
  {
    id: 'loader-orbit',
    name: 'Orbit Loader',
    description: 'Loader với các vòng tròn quay quỹ đạo 3D, hiệu ứng không gian ấn tượng.',
    category: 'loaders',
    tags: ['orbit', '3d', 'space', 'spinner'],
    framework: 'HTML/CSS',
    views: 2156,
    likes: 398,
    createdAt: '2025-11-10',
    htmlCode: `<div class="loaders-demo">
  <div class="orbit-loader">
    <div class="orbit orbit-1"><div class="planet"></div></div>
    <div class="orbit orbit-2"><div class="planet"></div></div>
    <div class="orbit orbit-3"><div class="planet"></div></div>
    <div class="core"></div>
  </div>
  <p class="loader-text">Loading...</p>
</div>`,
    cssCode: `.loaders-demo {
  min-height: 100vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  background: #0a0a0f; font-family: 'Segoe UI', sans-serif;
}
.orbit-loader {
  position: relative; width: 120px; height: 120px;
}
.orbit {
  position: absolute; inset: 0;
  border: 2px solid rgba(255,255,255,0.05);
  border-radius: 50%;
}
.orbit-1 { animation: spin 3s linear infinite; }
.orbit-2 { inset: 15px; animation: spin 2s linear infinite reverse; }
.orbit-3 { inset: 30px; animation: spin 1.5s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.planet {
  position: absolute; top: -5px; left: 50%; transform: translateX(-50%);
  width: 10px; height: 10px; border-radius: 50%;
}
.orbit-1 .planet { background: #667eea; box-shadow: 0 0 12px #667eea; }
.orbit-2 .planet { background: #a855f7; box-shadow: 0 0 12px #a855f7; width: 8px; height: 8px; }
.orbit-3 .planet { background: #ec4899; box-shadow: 0 0 12px #ec4899; width: 6px; height: 6px; }
.core {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 16px; height: 16px; border-radius: 50%;
  background: white;
  box-shadow: 0 0 20px rgba(255,255,255,0.5);
  animation: pulse-core 1.5s ease-in-out infinite;
}
@keyframes pulse-core {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.7; }
}
.loader-text { margin-top: 32px; color: rgba(255,255,255,0.5); font-size: 14px; letter-spacing: 3px; text-transform: uppercase; }`
  },
  {
    id: 'loader-wave-dots',
    name: 'Wave Dots Loader',
    description: 'Loader dạng sóng với các chấm nhảy nhịp nhàng, gradient colors đẹp mắt.',
    category: 'loaders',
    tags: ['dots', 'wave', 'bouncing', 'minimal'],
    framework: 'HTML/CSS',
    views: 1876,
    likes: 312,
    createdAt: '2025-10-25',
    htmlCode: `<div class="wave-demo">
  <div class="wave-dots">
    <span style="--i:0"></span>
    <span style="--i:1"></span>
    <span style="--i:2"></span>
    <span style="--i:3"></span>
    <span style="--i:4"></span>
  </div>
</div>`,
    cssCode: `.wave-demo {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: #0a0a0f;
}
.wave-dots { display: flex; gap: 10px; }
.wave-dots span {
  width: 16px; height: 16px; border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #a855f7);
  animation: wave-bounce 1.2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes wave-bounce {
  0%, 80%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
  40% { transform: translateY(-28px) scale(1.2); opacity: 1; }
}
.wave-dots span:nth-child(2) { background: linear-gradient(135deg, #764ba2, #ec4899); }
.wave-dots span:nth-child(3) { background: linear-gradient(135deg, #ec4899, #f093fb); }
.wave-dots span:nth-child(4) { background: linear-gradient(135deg, #f093fb, #667eea); }
.wave-dots span:nth-child(5) { background: linear-gradient(135deg, #667eea, #00d4ff); }`
  },

  // ═══════════════════════════════════════
  // ANIMATIONS
  // ═══════════════════════════════════════
  {
    id: 'anim-text-reveal',
    name: 'Text Reveal Animation',
    description: 'Hiệu ứng text hiện ra từng chữ với gradient và glow effect.',
    category: 'animations',
    tags: ['text', 'reveal', 'gradient', 'typewriter'],
    framework: 'HTML/CSS',
    views: 4567,
    likes: 823,
    createdAt: '2025-12-08',
    featured: true,
    htmlCode: `<div class="text-reveal-demo">
  <h1 class="reveal-text">
    <span class="reveal-line">Design the</span>
    <span class="reveal-line delay-1">Future of</span>
    <span class="reveal-line delay-2 gradient">Web UI</span>
  </h1>
</div>`,
    cssCode: `.text-reveal-demo {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: #050510; font-family: 'Segoe UI', sans-serif;
}
.reveal-text { text-align: center; }
.reveal-line {
  display: block; font-size: 72px; font-weight: 900;
  color: white; letter-spacing: -2px; line-height: 1.1;
  overflow: hidden;
  animation: reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  opacity: 0; transform: translateY(100%);
}
.delay-1 { animation-delay: 0.3s; }
.delay-2 { animation-delay: 0.6s; }
@keyframes reveal {
  to { opacity: 1; transform: translateY(0); }
}
.gradient {
  background: linear-gradient(135deg, #667eea, #a855f7, #ec4899, #f093fb);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards, shimmer 3s ease-in-out infinite;
  animation-delay: 0.6s;
}
@keyframes shimmer {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}`
  },
  {
    id: 'anim-particle-bg',
    name: 'Particle Background',
    description: 'Background với các hạt particle bay ngẫu nhiên, tạo hiệu ứng không gian sâu.',
    category: 'animations',
    tags: ['particle', 'background', 'space', 'ambient'],
    framework: 'HTML/CSS',
    views: 3421,
    likes: 567,
    createdAt: '2025-11-05',
    htmlCode: `<div class="particle-bg">
  <div class="particle" style="--x: 10%; --y: 20%; --duration: 6s; --delay: 0s; --size: 3px;"></div>
  <div class="particle" style="--x: 25%; --y: 60%; --duration: 8s; --delay: 1s; --size: 2px;"></div>
  <div class="particle" style="--x: 40%; --y: 30%; --duration: 7s; --delay: 2s; --size: 4px;"></div>
  <div class="particle" style="--x: 55%; --y: 80%; --duration: 5s; --delay: 0.5s; --size: 2px;"></div>
  <div class="particle" style="--x: 70%; --y: 15%; --duration: 9s; --delay: 3s; --size: 3px;"></div>
  <div class="particle" style="--x: 85%; --y: 50%; --duration: 6s; --delay: 1.5s; --size: 5px;"></div>
  <div class="particle" style="--x: 15%; --y: 75%; --duration: 7s; --delay: 4s; --size: 2px;"></div>
  <div class="particle" style="--x: 60%; --y: 45%; --duration: 8s; --delay: 2.5s; --size: 3px;"></div>
  <div class="particle" style="--x: 90%; --y: 70%; --duration: 5s; --delay: 1s; --size: 4px;"></div>
  <div class="particle" style="--x: 35%; --y: 90%; --duration: 6s; --delay: 3.5s; --size: 2px;"></div>
  <div class="content-overlay">
    <h1>Deep Space</h1>
    <p>Ambient particle background</p>
  </div>
</div>`,
    cssCode: `.particle-bg {
  position: relative; min-height: 100vh; overflow: hidden;
  background: radial-gradient(ellipse at center, #0a0a2a 0%, #050510 100%);
  font-family: 'Segoe UI', sans-serif;
}
@keyframes float-particle {
  0%, 100% { transform: translate(0, 0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(calc(var(--x) - 50%), -100vh); opacity: 0; }
}
.particle {
  position: absolute; left: var(--x); top: 100%;
  width: var(--size); height: var(--size);
  background: white; border-radius: 50%;
  box-shadow: 0 0 calc(var(--size) * 2) rgba(102,126,234,0.6);
  animation: float-particle var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}
.particle:nth-child(even) {
  box-shadow: 0 0 calc(var(--size) * 2) rgba(168,85,247,0.6);
}
.content-overlay {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  min-height: 100vh; color: white; text-align: center;
}
.content-overlay h1 {
  font-size: 72px; font-weight: 900; letter-spacing: -2px;
  margin-bottom: 12px;
}
.content-overlay p { color: rgba(255,255,255,0.5); font-size: 18px; letter-spacing: 4px; text-transform: uppercase; }`
  },

  // ═══════════════════════════════════════
  // MODALS
  // ═══════════════════════════════════════
  {
    id: 'modal-glass',
    name: 'Glassmorphism Modal',
    description: 'Modal popup với hiệu ứng glassmorphism, animation mở/đóng mượt mà.',
    category: 'modals',
    tags: ['glass', 'popup', 'dialog', 'overlay'],
    framework: 'HTML/CSS/JS',
    views: 2987,
    likes: 521,
    createdAt: '2025-11-18',
    htmlCode: `<div class="modal-demo">
  <button class="open-modal-btn" onclick="document.getElementById('glass-modal').classList.add('active')">
    Open Modal
  </button>
  <div class="glass-modal-overlay" id="glass-modal" onclick="if(event.target===this) this.classList.remove('active')">
    <div class="glass-modal">
      <button class="modal-close" onclick="document.getElementById('glass-modal').classList.remove('active')">✕</button>
      <div class="modal-icon">🎉</div>
      <h2>Congratulations!</h2>
      <p>Bạn đã hoàn thành setup thành công. Bắt đầu khám phá các tính năng mới ngay!</p>
      <div class="modal-actions">
        <button class="modal-btn primary" onclick="document.getElementById('glass-modal').classList.remove('active')">Bắt đầu ngay</button>
        <button class="modal-btn secondary" onclick="document.getElementById('glass-modal').classList.remove('active')">Để sau</button>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `.modal-demo {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  font-family: 'Segoe UI', sans-serif;
}
.open-modal-btn {
  padding: 18px 48px; border: none; border-radius: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; font-size: 18px; font-weight: 700;
  cursor: pointer; transition: all 0.3s;
}
.open-modal-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(102,126,234,0.5); }
.glass-modal-overlay {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s;
}
.glass-modal-overlay.active { opacity: 1; pointer-events: all; }
.glass-modal {
  position: relative; width: 440px; padding: 48px 40px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 28px; color: white;
  text-align: center;
  transform: scale(0.8) translateY(20px);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.glass-modal-overlay.active .glass-modal { transform: scale(1) translateY(0); }
.modal-close {
  position: absolute; top: 16px; right: 20px;
  background: rgba(255,255,255,0.1); border: none;
  color: white; width: 36px; height: 36px; border-radius: 50%;
  font-size: 16px; cursor: pointer; transition: all 0.3s;
}
.modal-close:hover { background: rgba(255,255,255,0.2); }
.modal-icon { font-size: 56px; margin-bottom: 20px; }
.glass-modal h2 { font-size: 28px; font-weight: 800; margin-bottom: 12px; }
.glass-modal p { color: rgba(255,255,255,0.6); font-size: 15px; line-height: 1.7; margin-bottom: 32px; }
.modal-actions { display: flex; gap: 12px; justify-content: center; }
.modal-btn {
  padding: 14px 28px; border-radius: 12px; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: all 0.3s; border: none;
}
.modal-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}
.modal-btn.primary:hover { box-shadow: 0 8px 24px rgba(102,126,234,0.5); }
.modal-btn.secondary {
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.7);
  border: 1px solid rgba(255,255,255,0.15);
}
.modal-btn.secondary:hover { background: rgba(255,255,255,0.12); }`
  },

  // ═══════════════════════════════════════
  // FOOTERS
  // ═══════════════════════════════════════
  {
    id: 'footer-modern',
    name: 'Modern Dark Footer',
    description: 'Footer hiện đại với grid layout, social links và gradient accents.',
    category: 'footers',
    tags: ['dark', 'social', 'grid', 'modern'],
    framework: 'HTML/CSS',
    views: 2543,
    likes: 445,
    createdAt: '2025-12-02',
    htmlCode: `<footer class="modern-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <h3><span class="brand-dot">◆</span> Brand</h3>
      <p>Xây dựng những trải nghiệm số tuyệt vời với component library hiện đại.</p>
      <div class="social-links">
        <a href="#" class="social-link">𝕏</a>
        <a href="#" class="social-link">in</a>
        <a href="#" class="social-link">▶</a>
      </div>
    </div>
    <div class="footer-links">
      <h4>Product</h4>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Changelog</a>
      <a href="#">Documentation</a>
    </div>
    <div class="footer-links">
      <h4>Company</h4>
      <a href="#">About</a>
      <a href="#">Careers</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
    <div class="footer-links">
      <h4>Legal</h4>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">License</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Brand. All rights reserved.</p>
    <p>Made with ❤ in Vietnam</p>
  </div>
</footer>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }
.modern-footer {
  background: #0a0a0f; color: white; padding: 64px 48px 24px;
  font-family: 'Segoe UI', sans-serif;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.footer-grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px; max-width: 1200px; margin: 0 auto;
  padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer-brand h3 { font-size: 24px; font-weight: 800; margin-bottom: 16px; }
.brand-dot { color: #667eea; margin-right: 4px; }
.footer-brand p { color: rgba(255,255,255,0.5); font-size: 15px; line-height: 1.7; margin-bottom: 24px; max-width: 300px; }
.social-links { display: flex; gap: 12px; }
.social-link {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  color: white; text-decoration: none; font-weight: 700;
  transition: all 0.3s;
}
.social-link:hover { background: #667eea; border-color: #667eea; transform: translateY(-3px); }
.footer-links h4 { font-size: 15px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; }
.footer-links a {
  display: block; color: rgba(255,255,255,0.5); text-decoration: none;
  font-size: 14px; margin-bottom: 12px; transition: color 0.3s;
}
.footer-links a:hover { color: #667eea; }
.footer-bottom {
  display: flex; justify-content: space-between;
  max-width: 1200px; margin: 0 auto; padding-top: 24px;
  color: rgba(255,255,255,0.3); font-size: 13px;
}
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
}`
  },

  // ═══════════════════════════════════════
  // LAYOUTS
  // ═══════════════════════════════════════
  {
    id: 'layout-bento-grid',
    name: 'Bento Grid Layout',
    description: 'Layout dạng Bento grid (giống Apple) với các card có kích thước khác nhau, hover effects.',
    category: 'layouts',
    tags: ['bento', 'grid', 'apple', 'dashboard'],
    framework: 'HTML/CSS',
    views: 5678,
    likes: 1023,
    createdAt: '2025-12-15',
    featured: true,
    htmlCode: `<div class="bento-grid">
  <div class="bento-item span-2 span-row-2">
    <div class="bento-content">
      <span class="bento-icon">📊</span>
      <h3>Analytics Dashboard</h3>
      <p>Theo dõi hiệu suất realtime</p>
    </div>
  </div>
  <div class="bento-item">
    <div class="bento-content">
      <span class="bento-icon">🔒</span>
      <h3>Security</h3>
      <p>End-to-end encryption</p>
    </div>
  </div>
  <div class="bento-item accent">
    <div class="bento-content">
      <span class="bento-icon">⚡</span>
      <h3>Performance</h3>
      <p>Lightning fast</p>
    </div>
  </div>
  <div class="bento-item span-2">
    <div class="bento-content">
      <span class="bento-icon">🎨</span>
      <h3>Design System</h3>
      <p>50+ components có sẵn cho mọi dự án</p>
    </div>
  </div>
  <div class="bento-item">
    <div class="bento-content">
      <span class="bento-icon">🌍</span>
      <h3>Global CDN</h3>
      <p>200+ locations</p>
    </div>
  </div>
  <div class="bento-item">
    <div class="bento-content">
      <span class="bento-icon">🤖</span>
      <h3>AI Powered</h3>
      <p>Smart automation</p>
    </div>
  </div>
</div>`,
    cssCode: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0a0a0f; padding: 40px; font-family: 'Segoe UI', sans-serif; }
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px; max-width: 900px; width: 100%;
}
.bento-item {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 20px;
  padding: 28px 24px;
  transition: all 0.4s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}
.bento-item::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(102,126,234,0.1), transparent);
  opacity: 0; transition: opacity 0.4s;
}
.bento-item:hover::before { opacity: 1; }
.bento-item:hover {
  transform: translateY(-4px);
  border-color: rgba(102,126,234,0.3);
  box-shadow: 0 16px 48px rgba(102,126,234,0.15);
}
.span-2 { grid-column: span 2; }
.span-row-2 { grid-row: span 2; }
.bento-item.accent {
  background: linear-gradient(135deg, rgba(102,126,234,0.2), rgba(168,85,247,0.1));
  border-color: rgba(102,126,234,0.2);
}
.bento-content { position: relative; z-index: 1; color: white; }
.bento-icon { font-size: 36px; display: block; margin-bottom: 16px; }
.bento-content h3 { font-size: 18px; font-weight: 800; margin-bottom: 8px; }
.bento-content p { color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.6; }
.span-row-2 .bento-content { display: flex; flex-direction: column; justify-content: center; height: 100%; }
.span-row-2 .bento-icon { font-size: 48px; }
.span-row-2 h3 { font-size: 24px; }
.span-row-2 p { font-size: 15px; }
@media (max-width: 768px) {
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
  .span-row-2 { grid-row: span 1; }
}`
  },
  {
    id: 'btn-ripple',
    name: 'Ripple Effect Button',
    description: 'Button với hiệu ứng gợn sóng nước (ripple effect) mượt mà khi click, mô phỏng Material Design.',
    category: 'buttons',
    tags: ['ripple', 'material', 'click', 'animation'],
    framework: 'HTML/CSS/JS',
    views: 1420,
    likes: 245,
    createdAt: '2026-01-10',
    htmlCode: `<button class="ripple-btn" onclick="createRipple(event)">
  <span>Click Me!</span>
</button>`,
    cssCode: `.ripple-btn {
  position: relative; overflow: hidden;
  padding: 16px 40px; font-size: 16px; font-weight: 700;
  color: white; background: #667eea; border: none;
  border-radius: 12px; cursor: pointer;
  box-shadow: 0 4px 15px rgba(102,126,234,0.4);
  transition: background 0.3s, transform 0.2s;
  font-family: 'Segoe UI', sans-serif;
}
.ripple-btn:active { transform: scale(0.98); }
.ripple {
  position: absolute; background: rgba(255, 255, 255, 0.4);
  border-radius: 50%; transform: scale(0);
  animation: ripple-effect 0.6s linear; pointer-events: none;
}
@keyframes ripple-effect {
  to { transform: scale(4); opacity: 0; }
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0f0f1a; }`
  },
  {
    id: 'btn-3d-push',
    name: '3D Push Button',
    description: 'Nút nhấn phong cách 3D chân thực, lõm xuống khi click cực đã tay.',
    category: 'buttons',
    tags: ['3d', 'push', 'click', 'retro'],
    framework: 'HTML/CSS',
    views: 1890,
    likes: 310,
    createdAt: '2026-01-12',
    htmlCode: `<button class="btn-3d">
  <span class="btn-3d-top">Push Me</span>
</button>`,
    cssCode: `.btn-3d {
  background: #473a80; border: none; border-radius: 12px;
  padding: 0; cursor: pointer; outline-offset: 4px;
  transition: filter 250ms;
}
.btn-3d-top {
  display: block; padding: 16px 36px; border-radius: 12px;
  font-size: 18px; font-weight: 700; color: white;
  background: #667eea;
  transform: translateY(-6px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
  font-family: 'Segoe UI', sans-serif;
}
.btn-3d:hover .btn-3d-top {
  transform: translateY(-8px);
  transition: transform 250ms cubic-bezier(.3, .7, .4, 1);
}
.btn-3d:active .btn-3d-top {
  transform: translateY(-2px);
  transition: transform 34ms;
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`
  },
  {
    id: 'btn-glow-slide',
    name: 'Glow Slide Button',
    description: 'Nút có hiệu ứng trượt màu gradient phát sáng từ trái sang phải vô cùng thời thượng.',
    category: 'buttons',
    tags: ['hover', 'slide', 'gradient', 'glow'],
    framework: 'HTML/CSS',
    views: 2020,
    likes: 412,
    createdAt: '2026-01-15',
    htmlCode: `<button class="btn-glow-slide">
  <span>Hover Me</span>
</button>`,
    cssCode: `.btn-glow-slide {
  position: relative; padding: 18px 48px;
  font-size: 16px; font-weight: 700; color: white;
  background: #111; border: none; border-radius: 50px;
  cursor: pointer; overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
  letter-spacing: 1px;
}
.btn-glow-slide::before {
  content: ''; position: absolute; top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4);
  transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
.btn-glow-slide:hover::before { left: 0; }
.btn-glow-slide span { position: relative; z-index: 2; }
.btn-glow-slide:hover {
  box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #07070b; }`
  },
  {
    id: 'btn-social-share',
    name: 'Social Share Expand Button',
    description: 'Button chia sẻ mở rộng theo chiều ngang khi click hoặc hover, chứa các icon MXH.',
    category: 'buttons',
    tags: ['social', 'expand', 'hover', 'interactive'],
    framework: 'HTML/CSS',
    views: 1250,
    likes: 198,
    createdAt: '2026-01-20',
    htmlCode: `<div class="social-share-container">
  <button class="share-trigger">Share</button>
  <div class="share-icons">
    <a href="#" class="share-icon fb">F</a>
    <a href="#" class="share-icon tw">T</a>
    <a href="#" class="share-icon ln">L</a>
  </div>
</div>`,
    cssCode: `.social-share-container {
  display: flex; align-items: center; background: #1e1b4b;
  border-radius: 50px; padding: 6px; position: relative;
  overflow: hidden; max-width: 60px;
  transition: max-width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.social-share-container:hover { max-width: 240px; }
.share-trigger {
  padding: 10px 24px; border: none; border-radius: 50px;
  background: #667eea; color: white; font-weight: 700;
  cursor: pointer; z-index: 2; font-family: 'Segoe UI', sans-serif;
}
.share-icons {
  display: flex; gap: 8px; margin-left: 12px; opacity: 0;
  transition: opacity 0.3s;
}
.social-share-container:hover .share-icons { opacity: 1; }
.share-icon {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; text-decoration: none; font-weight: bold;
  background: rgba(255,255,255,0.1); transition: background 0.3s;
}
.share-icon:hover { background: rgba(255,255,255,0.25); }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0d0d18; }`
  },
  {
    id: 'card-flip',
    name: 'Hover 3D Flip Card',
    description: 'Card xoay 180 độ lật mặt sau với hiệu ứng chuyển đổi 3D chân thực.',
    category: 'cards',
    tags: ['flip', 'card', '3d', 'hover'],
    framework: 'HTML/CSS',
    views: 2900,
    likes: 480,
    createdAt: '2026-01-22',
    htmlCode: `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>Frontend Dev</h2>
      <p>Hover to see my stack</p>
    </div>
    <div class="flip-card-back">
      <h3>Skills</h3>
      <p>React, TypeScript, CSS, Node</p>
    </div>
  </div>
</div>`,
    cssCode: `.flip-card {
  background-color: transparent; width: 300px; height: 200px;
  perspective: 1000px; font-family: 'Segoe UI', sans-serif;
}
.flip-card-inner {
  position: relative; width: 100%; height: 100%;
  text-align: center; transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back {
  position: absolute; width: 100%; height: 100%;
  -webkit-backface-visibility: hidden; backface-visibility: hidden;
  border-radius: 16px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; padding: 20px;
}
.flip-card-front {
  background: linear-gradient(135deg, #2e0854, #18032b);
  color: white; border: 1px solid rgba(255,255,255,0.1);
}
.flip-card-back {
  background: linear-gradient(135deg, #18032b, #2e0854);
  color: #a855f7; transform: rotateY(180deg);
  border: 1px solid rgba(168, 85, 247, 0.3);
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #09090f; }`
  },
  {
    id: 'card-product',
    name: 'Premium Product Card',
    description: 'Card sản phẩm thương mại điện tử sang trọng, ảnh phóng to nhẹ và nút chọn size.',
    category: 'cards',
    tags: ['product', 'e-commerce', 'premium', 'hover'],
    framework: 'HTML/CSS',
    views: 3410,
    likes: 560,
    createdAt: '2026-01-25',
    htmlCode: `<div class="product-card">
  <div class="product-img-container">
    <div class="product-badge">Hot</div>
    <div class="product-img">👟</div>
  </div>
  <div class="product-info">
    <h3 class="product-title">Nike Air Max 2026</h3>
    <p class="product-price">$189.00</p>
    <div class="product-sizes">
      <span class="size active">US 8</span>
      <span class="size">US 9</span>
      <span class="size">US 10</span>
    </div>
    <button class="add-to-cart">Add to Cart</button>
  </div>
</div>`,
    cssCode: `.product-card {
  width: 300px; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05); border-radius: 24px;
  overflow: hidden; font-family: 'Segoe UI', sans-serif; color: white;
  transition: transform 0.3s, box-shadow 0.3s;
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.product-img-container {
  height: 200px; background: linear-gradient(135deg, #1e293b, #0f172a);
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.product-badge {
  position: absolute; top: 16px; left: 16px;
  background: #ef4444; color: white; padding: 4px 12px;
  border-radius: 20px; font-size: 12px; font-weight: bold;
}
.product-img { font-size: 80px; transition: transform 0.5s; }
.product-card:hover .product-img { transform: scale(1.15) rotate(-10deg); }
.product-info { padding: 24px; }
.product-title { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
.product-price { font-size: 24px; font-weight: 800; color: #a855f7; margin-bottom: 16px; }
.product-sizes { display: flex; gap: 8px; margin-bottom: 20px; }
.size {
  padding: 6px 12px; font-size: 12px; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 6px; cursor: pointer; transition: all 0.3s;
}
.size.active, .size:hover { background: white; color: black; border-color: white; }
.add-to-cart {
  width: 100%; padding: 12px; border: none; border-radius: 12px;
  background: #a855f7; color: white; font-weight: 700; cursor: pointer;
  transition: opacity 0.3s;
}
.add-to-cart:hover { opacity: 0.9; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0c0f1d; }`
  },
  {
    id: 'card-stats',
    name: 'Stats Progress Card',
    description: 'Card hiển thị chỉ số đo lường với thanh tiến trình tròn chạy animation.',
    category: 'cards',
    tags: ['stats', 'progress', 'circle', 'dashboard'],
    framework: 'HTML/CSS',
    views: 2200,
    likes: 395,
    createdAt: '2026-01-28',
    htmlCode: `<div class="stats-card">
  <div class="stats-header">
    <h3>Storage Usage</h3>
    <span class="stats-icon">💾</span>
  </div>
  <div class="stats-body">
    <div class="circle-progress" style="--percent: 75">
      <div class="inner-circle">75%</div>
    </div>
    <div class="stats-details">
      <p class="used">150 GB Used</p>
      <p class="total">of 200 GB total</p>
    </div>
  </div>
</div>`,
    cssCode: `.stats-card {
  width: 280px; background: #111827; border-radius: 20px;
  padding: 24px; color: white; font-family: 'Segoe UI', sans-serif;
  border: 1px solid rgba(255,255,255,0.05);
}
.stats-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 24px;
}
.stats-header h3 { font-size: 16px; color: rgba(255,255,255,0.7); }
.stats-body { display: flex; align-items: center; gap: 24px; }
.circle-progress {
  position: relative; width: 80px; height: 80px;
  border-radius: 50%;
  background: conic-gradient(#3b82f6 calc(var(--percent) * 1%), #1f2937 0);
  display: flex; align-items: center; justify-content: center;
}
.inner-circle {
  width: 66px; height: 66px; background: #111827;
  border-radius: 50%; display: flex; align-items: center;
  justify-content: center; font-size: 16px; font-weight: bold;
}
.stats-details .used { font-size: 18px; font-weight: bold; }
.stats-details .total { font-size: 12px; color: rgba(255,255,255,0.4); }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #030712; }`
  },
  {
    id: 'card-team',
    name: 'Team Profile Card',
    description: 'Card giới thiệu thành viên dự án, hover hiển thị info mạng xã hội.',
    category: 'cards',
    tags: ['team', 'profile', 'hover', 'social'],
    framework: 'HTML/CSS',
    views: 1800,
    likes: 274,
    createdAt: '2026-02-01',
    htmlCode: `<div class="team-card">
  <div class="member-avatar">👤</div>
  <div class="member-info">
    <h4>Sarah Connor</h4>
    <p>Lead UI Designer</p>
  </div>
  <div class="member-socials">
    <a href="#">𝕏</a>
    <a href="#">in</a>
    <a href="#">🎨</a>
  </div>
</div>`,
    cssCode: `.team-card {
  width: 260px; padding: 32px 24px; background: #1f2937;
  border-radius: 24px; text-align: center; color: white;
  position: relative; overflow: hidden; font-family: 'Segoe UI', sans-serif;
  border: 1px solid rgba(255,255,255,0.05);
}
.member-avatar {
  font-size: 64px; width: 100px; height: 100px;
  background: rgba(255,255,255,0.05); border-radius: 50%;
  margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;
}
.member-info h4 { font-size: 18px; margin-bottom: 6px; }
.member-info p { font-size: 14px; color: rgba(255,255,255,0.5); margin-bottom: 24px; }
.member-socials {
  display: flex; justify-content: center; gap: 16px;
  transform: translateY(60px); opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}
.team-card:hover .member-socials {
  transform: translateY(0); opacity: 1;
}
.member-socials a {
  color: white; text-decoration: none; font-size: 16px;
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,0.05); display: flex;
  align-items: center; justify-content: center; transition: background 0.3s;
}
.member-socials a:hover { background: #3b82f6; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #111827; }`
  },
  {
    id: 'nav-sidebar',
    name: 'Floating Sidebar Menu',
    description: 'Thanh menu bên hông dạng nổi, tự động phóng to hiển thị chữ khi hover.',
    category: 'navbars',
    tags: ['sidebar', 'navigation', 'floating', 'hover'],
    framework: 'HTML/CSS',
    views: 2750,
    likes: 489,
    createdAt: '2026-02-05',
    htmlCode: `<aside class="floating-sidebar">
  <div class="sidebar-logo">◆</div>
  <nav class="sidebar-nav">
    <a href="#" class="sidebar-item active">
      <span class="icon">🏠</span>
      <span class="label">Home</span>
    </a>
    <a href="#" class="sidebar-item">
      <span class="icon">📂</span>
      <span class="label">Projects</span>
    </a>
    <a href="#" class="sidebar-item">
      <span class="icon">📈</span>
      <span class="label">Stats</span>
    </a>
    <a href="#" class="sidebar-item">
      <span class="icon">⚙️</span>
      <span class="label">Settings</span>
    </a>
  </nav>
</aside>`,
    cssCode: `.floating-sidebar {
  position: fixed; left: 20px; top: 50%; transform: translateY(-50%);
  width: 64px; background: rgba(255,255,255,0.03);
  backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 20px 8px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden; font-family: 'Segoe UI', sans-serif;
}
.floating-sidebar:hover { width: 180px; }
.sidebar-logo {
  font-size: 24px; color: #a855f7; text-align: center;
  margin-bottom: 40px; font-weight: bold;
}
.sidebar-nav { display: flex; flex-direction: column; gap: 12px; }
.sidebar-item {
  display: flex; align-items: center; gap: 16px;
  padding: 10px; border-radius: 12px; color: rgba(255,255,255,0.6);
  text-decoration: none; white-space: nowrap; transition: all 0.3s;
}
.sidebar-item:hover, .sidebar-item.active {
  background: rgba(255,255,255,0.08); color: white;
}
.sidebar-item .icon { font-size: 20px; }
.sidebar-item .label { opacity: 0; transition: opacity 0.2s; }
.floating-sidebar:hover .sidebar-item .label { opacity: 1; }
body { min-height: 100vh; background: #030712; }`
  },
  {
    id: 'nav-segmented',
    name: 'Segmented Tab Control',
    description: 'Thanh tab chuyển đổi với nền trượt mượt mà theo tab được chọn.',
    category: 'navbars',
    tags: ['tabs', 'segmented', 'slide', 'navigation'],
    framework: 'HTML/CSS/JS',
    views: 2110,
    likes: 376,
    createdAt: '2026-02-08',
    htmlCode: `<div class="segmented-control">
  <div class="slider"></div>
  <button class="tab active" onclick="moveSlider(this, 0)">Design</button>
  <button class="tab" onclick="moveSlider(this, 1)">Develop</button>
  <button class="tab" onclick="moveSlider(this, 2)">Deploy</button>
</div>`,
    cssCode: `.segmented-control {
  position: relative; display: flex; background: rgba(255,255,255,0.05);
  padding: 4px; border-radius: 50px; width: 320px;
  border: 1px solid rgba(255,255,255,0.08);
  font-family: 'Segoe UI', sans-serif;
}
.tab {
  flex: 1; background: transparent; border: none; outline: none;
  padding: 12px; color: rgba(255,255,255,0.6); font-weight: bold;
  cursor: pointer; position: relative; z-index: 2; transition: color 0.3s;
}
.tab.active { color: white; }
.slider {
  position: absolute; top: 4px; bottom: 4px; left: 4px;
  width: calc(100% / 3 - 8px); background: #3b82f6;
  border-radius: 50px; z-index: 1;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59,130,246,0.3);
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`,
    jsCode: `function moveSlider(tab, index) {
  const tabs = tab.parentElement.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const slider = tab.parentElement.querySelector('.slider');
  const width = tab.offsetWidth;
  slider.style.transform = 'translateX(' + (index * width) + 'px)';
}`
  },
  {
    id: 'hero-split',
    name: 'Modern Split Hero Section',
    description: 'Bố cục Hero chia đôi, bên trái là tiêu đề bắt mắt, bên phải là card tương tác.',
    category: 'heroes',
    tags: ['hero', 'split', 'layout', 'landing'],
    framework: 'HTML/CSS',
    views: 3560,
    likes: 620,
    createdAt: '2026-02-12',
    htmlCode: `<div class="hero-split-container">
  <div class="split-left">
    <span class="promo-badge">Now Open Source</span>
    <h1>Redefine Digital Layouts</h1>
    <p>Hệ thống component mẫu được làm thủ công bằng cả trái tim để hỗ trợ bạn thiết kế web nhanh hơn.</p>
    <div class="btn-group">
      <button class="btn-primary">Explore Now</button>
      <button class="btn-secondary">GitHub</button>
    </div>
  </div>
  <div class="split-right">
    <div class="floating-panel">
      <div class="panel-header"><span>●</span><span>●</span><span>●</span></div>
      <div class="panel-body">
        <h3>Design System</h3>
        <p>Tailwind CSS & Vanilla CSS</p>
        <div class="bar bar-1"></div>
        <div class="bar bar-2"></div>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `.hero-split-container {
  display: grid; grid-template-columns: 1.2fr 0.8fr;
  max-width: 1200px; margin: 0 auto; min-height: 100vh;
  align-items: center; gap: 64px; padding: 40px;
  font-family: 'Segoe UI', sans-serif; color: white;
}
.split-left h1 { font-size: 56px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
.split-left p { color: rgba(255,255,255,0.6); font-size: 18px; line-height: 1.6; margin-bottom: 32px; }
.promo-badge {
  display: inline-block; padding: 6px 14px; background: rgba(59,130,246,0.15);
  color: #3b82f6; border-radius: 50px; font-size: 14px; font-weight: 600; margin-bottom: 16px;
}
.btn-group { display: flex; gap: 16px; }
.btn-primary {
  padding: 16px 32px; background: #3b82f6; color: white; border: none;
  border-radius: 12px; font-weight: bold; cursor: pointer; transition: transform 0.2s;
}
.btn-secondary {
  padding: 16px 32px; background: rgba(255,255,255,0.05); color: white;
  border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; font-weight: bold; cursor: pointer;
}
.floating-panel {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 24px; backdrop-filter: blur(12px);
  animation: float-panel 6s ease-in-out infinite;
}
@keyframes float-panel {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.panel-header { display: flex; gap: 6px; margin-bottom: 20px; color: rgba(255,255,255,0.3); }
.panel-body h3 { font-size: 20px; margin-bottom: 8px; }
.panel-body p { font-size: 14px; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
.bar { height: 8px; border-radius: 4px; background: rgba(255,255,255,0.1); margin-bottom: 12px; }
.bar-1 { width: 80%; background: #a855f7; }
.bar-2 { width: 50%; }
@media (max-width: 900px) {
  .hero-split-container { grid-template-columns: 1fr; text-align: center; }
  .btn-group { justify-content: center; }
}
body { background: #07070d; }`
  },
  {
    id: 'hero-video-bg',
    name: 'Video Background Hero',
    description: 'Trang chủ với background video lặp vô tận phủ lớp màu tối cho text nổi bật.',
    category: 'heroes',
    tags: ['hero', 'video', 'background', 'landing'],
    framework: 'HTML/CSS',
    views: 3120,
    likes: 540,
    createdAt: '2026-02-15',
    htmlCode: `<div class="hero-video-container">
  <div class="video-overlay"></div>
  <div class="video-placeholder"></div>
  <div class="hero-video-content">
    <h1>Experience True Power</h1>
    <p>Tối ưu hóa quy trình làm việc và chất lượng sản phẩm.</p>
    <button class="hero-video-btn">Start Designing</button>
  </div>
</div>`,
    cssCode: `.hero-video-container {
  position: relative; min-height: 100vh; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Segoe UI', sans-serif; color: white;
}
.video-overlay {
  position: absolute; inset: 0; background: rgba(0,0,0,0.65); z-index: 2;
}
.video-placeholder {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #1e0b36, #090312);
  z-index: 1;
}
.hero-video-content {
  position: relative; z-index: 3; text-align: center; max-width: 800px;
}
.hero-video-content h1 { font-size: 64px; font-weight: 900; margin-bottom: 20px; }
.hero-video-content p { font-size: 20px; color: rgba(255,255,255,0.7); margin-bottom: 32px; }
.hero-video-btn {
  padding: 16px 40px; background: white; color: black; border: none;
  border-radius: 50px; font-weight: bold; cursor: pointer; transition: transform 0.2s;
}
.hero-video-btn:hover { transform: scale(1.05); }`
  },
  {
    id: 'form-contact',
    name: 'Glassmorphism Contact Form',
    description: 'Form liên hệ tinh xảo, chống lóa mắt, bo góc mềm mại phong cách Glassmorphism.',
    category: 'forms',
    tags: ['contact', 'form', 'glassmorphism', 'submit'],
    framework: 'HTML/CSS',
    views: 2840,
    likes: 489,
    createdAt: '2026-02-20',
    htmlCode: `<div class="contact-form-container">
  <form class="glass-contact-form">
    <h3>Send a Message</h3>
    <div class="form-row">
      <input type="text" placeholder="Your Name" required>
    </div>
    <div class="form-row">
      <input type="email" placeholder="Email Address" required>
    </div>
    <div class="form-row">
      <textarea rows="4" placeholder="Your Message..." required></textarea>
    </div>
    <button type="submit" class="submit-contact-btn">Send Message</button>
  </form>
</div>`,
    cssCode: `.contact-form-container {
  display: flex; align-items: center; justify-content: center; min-height: 100vh;
  background: radial-gradient(circle, #2e0854 0%, #0c0714 100%);
  font-family: 'Segoe UI', sans-serif;
}
.glass-contact-form {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(20px); width: 400px; padding: 40px; border-radius: 28px;
  color: white; box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}
.glass-contact-form h3 { font-size: 24px; font-weight: 700; margin-bottom: 24px; text-align: center; }
.form-row { margin-bottom: 20px; }
.glass-contact-form input, .glass-contact-form textarea {
  width: 100%; padding: 14px; background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
  color: white; outline: none; font-size: 14px; transition: border-color 0.3s;
}
.glass-contact-form input:focus, .glass-contact-form textarea:focus {
  border-color: #a855f7;
}
.submit-contact-btn {
  width: 100%; padding: 14px; background: #a855f7; border: none;
  border-radius: 12px; color: white; font-weight: bold; cursor: pointer;
  transition: opacity 0.3s;
}
.submit-contact-btn:hover { opacity: 0.9; }`
  },
  {
    id: 'form-search',
    name: 'Interactive Search Bar',
    description: 'Thanh tìm kiếm phản hồi nhanh, mở rộng nhẹ khi click và gợi ý kết quả.',
    category: 'forms',
    tags: ['search', 'input', 'interactive', 'suggest'],
    framework: 'HTML/CSS/JS',
    views: 2210,
    likes: 382,
    createdAt: '2026-02-22',
    htmlCode: `<div class="search-box">
  <div class="search-input-wrapper">
    <input type="text" placeholder="Type here..." oninput="handleSearch(this)">
    <span class="search-icon">🔍</span>
  </div>
  <div class="search-suggestions">
    <div class="suggestion-item">React Components</div>
    <div class="suggestion-item">Tailwind Styles</div>
    <div class="suggestion-item">Animation effects</div>
  </div>
</div>`,
    cssCode: `.search-box {
  position: relative; width: 340px; font-family: 'Segoe UI', sans-serif;
}
.search-input-wrapper {
  position: relative; display: flex; align-items: center;
}
.search-box input {
  width: 100%; padding: 14px 44px 14px 20px; background: #1e1b4b;
  border: 1px solid rgba(255,255,255,0.1); border-radius: 14px;
  color: white; outline: none; transition: all 0.3s;
}
.search-box input:focus {
  border-color: #3b82f6; box-shadow: 0 0 15px rgba(59,130,246,0.3);
}
.search-icon {
  position: absolute; right: 16px; color: rgba(255,255,255,0.4); pointer-events: none;
}
.search-suggestions {
  position: absolute; top: calc(100% + 8px); left: 0; right: 0;
  background: #111827; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; display: none; overflow: hidden; z-index: 10;
}
.search-box.active .search-suggestions { display: block; }
.suggestion-item {
  padding: 12px 20px; color: rgba(255,255,255,0.7); cursor: pointer;
  transition: background 0.3s, color 0.3s;
}
.suggestion-item:hover { background: #3b82f6; color: white; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #09090f; }`,
    jsCode: `function handleSearch(input) {
  const box = input.closest('.search-box');
  if (input.value.length > 0) {
    box.classList.add('active');
  } else {
    box.classList.remove('active');
  }
}`
  },
  {
    id: 'form-newsletter',
    name: 'Newsletter Signup Card',
    description: 'Card đăng ký nhận tin với thiết kế ngang gọn gàng, hiệu ứng phản hồi gửi thành công.',
    category: 'forms',
    tags: ['newsletter', 'signup', 'card', 'feedback'],
    framework: 'HTML/CSS',
    views: 1980,
    likes: 310,
    createdAt: '2026-02-25',
    htmlCode: `<div class="newsletter-card">
  <h4>Keep in Touch</h4>
  <p>Nhận bài viết và components mới nhất hàng tuần.</p>
  <div class="newsletter-form">
    <input type="email" placeholder="enter@email.com">
    <button class="subscribe-btn">Subscribe</button>
  </div>
</div>`,
    cssCode: `.newsletter-card {
  width: 380px; padding: 28px; background: #111;
  border-radius: 20px; border: 1px solid rgba(255,255,255,0.06);
  color: white; font-family: 'Segoe UI', sans-serif;
}
.newsletter-card h4 { font-size: 18px; margin-bottom: 8px; font-weight: bold; }
.newsletter-card p { font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
.newsletter-form { display: flex; gap: 8px; }
.newsletter-form input {
  flex: 1; padding: 12px 16px; background: #222; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px; color: white; outline: none; font-size: 14px;
}
.subscribe-btn {
  padding: 12px 20px; background: #3b82f6; border: none; border-radius: 10px;
  color: white; font-weight: bold; cursor: pointer; transition: background 0.3s;
}
.subscribe-btn:hover { background: #2563eb; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`
  },
  {
    id: 'footer-minimal',
    name: 'Minimalist Social Footer',
    description: 'Footer tối giản, cấu trúc hàng ngang cân đối, liên kết mạng xã hội sang trọng.',
    category: 'footers',
    tags: ['footer', 'minimal', 'social', 'dark'],
    framework: 'HTML/CSS',
    views: 2010,
    likes: 321,
    createdAt: '2026-02-28',
    htmlCode: `<footer class="minimal-footer">
  <div class="footer-left">
    <span>© 2026 ZenithUI.</span>
  </div>
  <div class="footer-center">
    <a href="#">About</a>
    <a href="#">License</a>
    <a href="#">Support</a>
  </div>
  <div class="footer-right">
    <a href="#" class="social-icon-btn">𝕏</a>
    <a href="#" class="social-icon-btn">🐈</a>
  </div>
</footer>`,
    cssCode: `.minimal-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding: 24px 40px; background: #09090b; color: rgba(255,255,255,0.4);
  font-family: 'Segoe UI', sans-serif; font-size: 14px;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.footer-center a {
  color: rgba(255,255,255,0.4); text-decoration: none; margin: 0 12px;
  transition: color 0.3s;
}
.footer-center a:hover { color: white; }
.footer-right { display: flex; gap: 12px; }
.social-icon-btn {
  color: rgba(255,255,255,0.4); text-decoration: none; font-size: 16px;
  transition: color 0.3s;
}
.social-icon-btn:hover { color: white; }
@media (max-width: 600px) {
  .minimal-footer { flex-direction: column; gap: 16px; text-align: center; }
}`
  },
  {
    id: 'anim-marquee',
    name: 'Infinite Marquee Carousel',
    description: 'Dải chữ chạy vô tận bằng CSS thuần, lý tưởng làm băng rôn đối tác hoặc thông báo.',
    category: 'animations',
    tags: ['marquee', 'infinite', 'text', 'carousel'],
    framework: 'HTML/CSS',
    views: 3120,
    likes: 512,
    createdAt: '2026-03-01',
    htmlCode: `<div class="marquee-wrapper">
  <div class="marquee-content">
    <span>BUILD SCALABLE INTERFACES</span>
    <span>•</span>
    <span>CREATIVE DESIGN SYSTEM</span>
    <span>•</span>
    <span>FLEXIBLE LAYOUTS</span>
    <span>•</span>
    <span>LIGHTNING SPEED PERFORMANCE</span>
    <span>•</span>
  </div>
  <div class="marquee-content" aria-hidden="true">
    <span>BUILD SCALABLE INTERFACES</span>
    <span>•</span>
    <span>CREATIVE DESIGN SYSTEM</span>
    <span>•</span>
    <span>FLEXIBLE LAYOUTS</span>
    <span>•</span>
    <span>LIGHTNING SPEED PERFORMANCE</span>
    <span>•</span>
  </div>
</div>`,
    cssCode: `.marquee-wrapper {
  overflow: hidden; width: 100%; display: flex;
  background: #111; padding: 20px 0; border-top: 1.5px solid rgba(255,255,255,0.05);
  border-bottom: 1.5px solid rgba(255,255,255,0.05);
  font-family: 'Segoe UI', sans-serif;
}
.marquee-content {
  display: flex; gap: 40px; white-space: nowrap;
  animation: marquee-scroll 18s linear infinite;
}
.marquee-content span {
  font-size: 20px; font-weight: 900; color: white;
  letter-spacing: 2px;
}
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #000; }`
  },
  {
    id: 'anim-hover-underline',
    name: 'Hover Underline Wave',
    description: 'Hiệu ứng gạch chân sóng lượn khi hover chuột qua liên kết menu.',
    category: 'animations',
    tags: ['hover', 'underline', 'menu', 'link'],
    framework: 'HTML/CSS',
    views: 1840,
    likes: 279,
    createdAt: '2026-03-03',
    htmlCode: `<nav class="underline-nav">
  <a href="#" class="underline-link">Dashboard</a>
  <a href="#" class="underline-link">Analytics</a>
  <a href="#" class="underline-link">Settings</a>
</nav>`,
    cssCode: `.underline-nav { display: flex; gap: 32px; font-family: 'Segoe UI', sans-serif; }
.underline-link {
  position: relative; color: white; text-decoration: none;
  font-size: 16px; font-weight: 600; padding: 8px 0;
}
.underline-link::before {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 100%; height: 2px; background: #a855f7;
  transform: scaleX(0); transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}
.underline-link:hover::before {
  transform: scaleX(1); transform-origin: left;
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0d0d18; }`
  },
  {
    id: 'anim-counter',
    name: 'Stats Counter Reveal',
    description: 'Hiệu ứng đếm số tăng dần từ 0 chạy bằng JavaScript cực kì trơn tru.',
    category: 'animations',
    tags: ['counter', 'countup', 'javascript', 'stats'],
    framework: 'HTML/CSS/JS',
    views: 2530,
    likes: 419,
    createdAt: '2026-03-05',
    htmlCode: `<div class="counter-box">
  <div class="number" data-target="99">0</div>
  <div class="counter-label">Customer Satisfaction %</div>
</div>`,
    cssCode: `.counter-box {
  text-align: center; font-family: 'Segoe UI', sans-serif; color: white;
}
.number {
  font-size: 80px; font-weight: 900; background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}
.counter-label { font-size: 14px; text-transform: uppercase; color: rgba(255,255,255,0.5); letter-spacing: 2px; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #08080f; }`,
    jsCode: `const numEl = document.querySelector('.number');
const target = +numEl.getAttribute('data-target');
let count = 0;
const updateCount = () => {
  const speed = target / 100;
  if (count < target) {
    count += speed;
    numEl.innerText = Math.ceil(count);
    setTimeout(updateCount, 15);
  } else {
    numEl.innerText = target;
  }
};
updateCount();`
  },
  {
    id: 'layout-masonry',
    name: 'Modern Masonry Grid',
    description: 'Layout dạng lưới Masonry (như Pinterest) tự do, linh hoạt, hỗ trợ ảnh kích thước khác nhau.',
    category: 'layouts',
    tags: ['masonry', 'grid', 'pinterest', 'gallery'],
    framework: 'HTML/CSS',
    views: 3420,
    likes: 590,
    createdAt: '2026-03-08',
    htmlCode: `<div class="masonry-container">
  <div class="masonry-item" style="height: 150px;">Art 1</div>
  <div class="masonry-item" style="height: 250px;">Art 2</div>
  <div class="masonry-item" style="height: 180px;">Art 3</div>
  <div class="masonry-item" style="height: 300px;">Art 4</div>
  <div class="masonry-item" style="height: 120px;">Art 5</div>
  <div class="masonry-item" style="height: 220px;">Art 6</div>
</div>`,
    cssCode: `.masonry-container {
  columns: 3; gap: 16px; width: 600px; max-width: 100%;
}
.masonry-item {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px; margin-bottom: 16px; display: inline-flex;
  align-items: center; justify-content: center; width: 100%;
  color: white; font-family: 'Segoe UI', sans-serif; font-weight: bold;
  break-inside: avoid; transition: transform 0.3s;
}
.masonry-item:hover { transform: scale(1.03); }
@media (max-width: 600px) {
  .masonry-container { columns: 2; }
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`
  },
  {
    id: 'layout-split-screen',
    name: 'Split Screen Layout',
    description: 'Layout chia đôi màn hình độc đáo, cuộn độc lập giữa 2 phần trái và phải.',
    category: 'layouts',
    tags: ['split-screen', 'layout', 'scrolling', 'independent'],
    framework: 'HTML/CSS',
    views: 2900,
    likes: 470,
    createdAt: '2026-03-10',
    htmlCode: `<div class="split-screen-wrapper">
  <div class="screen-half left-half">
    <h2>Explore Design</h2>
  </div>
  <div class="screen-half right-half">
    <h2>Master Code</h2>
  </div>
</div>`,
    cssCode: `.split-screen-wrapper {
  display: flex; width: 100vw; height: 100vh; overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}
.screen-half {
  flex: 1; display: flex; align-items: center; justify-content: center;
  color: white; font-size: 32px; font-weight: 800;
  transition: flex-grow 0.5s ease-in-out;
}
.left-half { background: #3b82f6; }
.right-half { background: #8b5cf6; }
.screen-half:hover { flex-grow: 1.3; }`
  },
  {
    id: 'modal-confirm',
    name: 'Confirm Dialog Alert',
    description: 'Hộp thoại xác nhận cảnh báo hành động hủy hoại (xóa dữ liệu) trực quan, bảo mật.',
    category: 'modals',
    tags: ['confirm', 'dialog', 'modal', 'danger'],
    framework: 'HTML/CSS/JS',
    views: 2100,
    likes: 312,
    createdAt: '2026-03-12',
    htmlCode: `<div class="confirm-demo">
  <button class="trigger-confirm" onclick="toggleConfirm(true)">Delete Account</button>
  <div class="confirm-overlay" id="confirm-modal" onclick="if(event.target===this) toggleConfirm(false)">
    <div class="confirm-card">
      <h3>Are you sure?</h3>
      <p>Hành động này không thể hoàn tác. Dữ liệu của bạn sẽ bị xóa vĩnh viễn.</p>
      <div class="confirm-actions">
        <button class="btn-cancel" onclick="toggleConfirm(false)">Cancel</button>
        <button class="btn-delete" onclick="alert('Account Deleted'); toggleConfirm(false)">Delete</button>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `.confirm-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px); display: none; align-items: center;
  justify-content: center; z-index: 100;
}
.confirm-overlay.active { display: flex; }
.confirm-card {
  width: 340px; padding: 28px; background: #1f2937; border-radius: 16px;
  color: white; font-family: 'Segoe UI', sans-serif; border: 1px solid rgba(255,255,255,0.08);
}
.confirm-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
.confirm-card p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.5; margin-bottom: 24px; }
.confirm-actions { display: flex; justify-content: flex-end; gap: 12px; }
.btn-cancel {
  padding: 10px 16px; background: transparent; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px; color: white; cursor: pointer;
}
.btn-delete {
  padding: 10px 16px; background: #ef4444; border: none; border-radius: 8px;
  color: white; font-weight: bold; cursor: pointer;
}
.trigger-confirm {
  padding: 14px 28px; background: #ef4444; color: white; border: none;
  border-radius: 10px; cursor: pointer; font-weight: bold;
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`,
    jsCode: `function toggleConfirm(show) {
  const modal = document.getElementById('confirm-modal');
  if (show) modal.classList.add('active');
  else modal.classList.remove('active');
}`
  },
  {
    id: 'modal-toast',
    name: 'Toast Notification Stack',
    description: 'Thanh thông báo nổi góc màn hình tự ẩn đi sau 3 giây rất dễ sử dụng.',
    category: 'modals',
    tags: ['toast', 'notification', 'alert', 'pop'],
    framework: 'HTML/CSS/JS',
    views: 2490,
    likes: 410,
    createdAt: '2026-03-15',
    htmlCode: `<div class="toast-demo">
  <button class="trigger-toast" onclick="showToast()">Show Success Toast</button>
  <div class="toast-container" id="toast-box"></div>
</div>`,
    cssCode: `.toast-container {
  position: fixed; top: 20px; right: 20px; display: flex;
  flex-direction: column; gap: 12px; z-index: 1000;
  font-family: 'Segoe UI', sans-serif;
}
.toast {
  background: #10b981; color: white; padding: 16px 24px;
  border-radius: 12px; display: flex; align-items: center; gap: 12px;
  box-shadow: 0 10px 25px rgba(16,185,129,0.3);
  animation: slide-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@keyframes slide-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.trigger-toast {
  padding: 14px 28px; background: #10b981; color: white; border: none;
  border-radius: 10px; cursor: pointer; font-weight: bold;
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`,
    jsCode: `function showToast() {
  const container = document.getElementById('toast-box');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<span>✅</span> Success: Action Completed!';
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}`
  },
  {
    id: 'loader-skeleton',
    name: 'Skeleton Card Loader',
    description: 'Hiệu ứng nhấp nháy chuyển màu (skeleton shimmer) giả lập nội dung đang tải của Facebook.',
    category: 'loaders',
    tags: ['skeleton', 'shimmer', 'loading', 'bento'],
    framework: 'HTML/CSS',
    views: 3100,
    likes: 512,
    createdAt: '2026-03-18',
    htmlCode: `<div class="skeleton-card">
  <div class="skeleton avatar shimmer"></div>
  <div class="skeleton-text-group">
    <div class="skeleton title shimmer"></div>
    <div class="skeleton body-line shimmer"></div>
    <div class="skeleton body-line shimmer" style="width: 80%;"></div>
  </div>
</div>`,
    cssCode: `.skeleton-card {
  width: 320px; padding: 24px; background: #1e1b4b;
  border-radius: 20px; display: flex; gap: 16px;
  font-family: 'Segoe UI', sans-serif;
}
.skeleton {
  background: rgba(255,255,255,0.05); border-radius: 8px;
}
.avatar { width: 48px; height: 48px; border-radius: 50%; }
.skeleton-text-group { flex: 1; display: flex; flex-direction: column; gap: 10px; }
.title { height: 16px; width: 60%; }
.body-line { height: 12px; width: 100%; }
.shimmer {
  position: relative; overflow: hidden;
}
.shimmer::after {
  content: ''; position: absolute; inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  animation: shimmer-swipe 1.6s infinite;
}
@keyframes shimmer-swipe {
  to { transform: translateX(100%); }
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`
  },
  {
    id: 'loader-circular',
    name: 'Circular Progress Tracker',
    description: 'Loader hình tròn xoay vô hạn với gradient mềm mại tuyệt đẹp.',
    category: 'loaders',
    tags: ['loader', 'spinner', 'circle', 'gradient'],
    framework: 'HTML/CSS',
    views: 1890,
    likes: 298,
    createdAt: '2026-03-20',
    htmlCode: `<div class="circular-spinner"></div>`,
    cssCode: `.circular-spinner {
  width: 60px; height: 60px; border-radius: 50%;
  border: 4px dashed #8b5cf6;
  border-top-color: transparent;
  animation: spin-clockwise 1.2s linear infinite;
}
@keyframes spin-clockwise {
  to { transform: rotate(360deg); }
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`
  },
  {
    id: 'loader-typing',
    name: 'Typing Status Dot Loader',
    description: 'Hiệu ứng ba dấu chấm nhấp nháy lơ lửng, giả lập trạng thái đối phương đang gõ tin nhắn.',
    category: 'loaders',
    tags: ['typing', 'chat', 'status', 'dots'],
    framework: 'HTML/CSS',
    views: 1780,
    likes: 289,
    createdAt: '2026-03-22',
    htmlCode: `<div class="typing-bubble">
  <span class="typing-dot"></span>
  <span class="typing-dot"></span>
  <span class="typing-dot"></span>
</div>`,
    cssCode: `.typing-bubble {
  display: flex; gap: 6px; padding: 12px 20px;
  background: #1f2937; border-radius: 20px; width: fit-content;
}
.typing-dot {
  width: 8px; height: 8px; background: rgba(255,255,255,0.5);
  border-radius: 50%; animation: pulse-dots 1.4s infinite ease-in-out;
}
.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes pulse-dots {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1.1); opacity: 1; }
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0c0f16; }`
  },
  {
    id: 'toggle-switch',
    name: 'Smooth Switch Toggle',
    description: 'Công tắc bật/tắt (switch control) phong cách iOS với bóng đổ mượt mà.',
    category: 'toggles',
    tags: ['toggle', 'switch', 'checkbox', 'ios'],
    framework: 'HTML/CSS',
    views: 2840,
    likes: 512,
    createdAt: '2026-03-24',
    htmlCode: `<label class="switch-toggle">
  <input type="checkbox">
  <span class="switch-slider"></span>
</label>`,
    cssCode: `.switch-toggle {
  position: relative; display: inline-block; width: 60px; height: 34px;
}
.switch-toggle input { display: none; }
.switch-slider {
  position: absolute; cursor: pointer; inset: 0;
  background-color: #374151; border-radius: 34px;
  transition: background-color 0.4s;
}
.switch-slider::before {
  content: ''; position: absolute; height: 26px; width: 26px;
  left: 4px; bottom: 4px; background-color: white;
  border-radius: 50%; transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 2px 5px rgba(0,0,0,0.25);
}
.switch-toggle input:checked + .switch-slider {
  background-color: #10b981;
}
.switch-toggle input:checked + .switch-slider::before {
  transform: translateX(26px);
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`
  },
  {
    id: 'toggle-theme',
    name: 'Dark Mode Theme Switcher',
    description: 'Nút chuyển đổi chế độ sáng/tối với animation mặt trời xoay biến thành mặt trăng.',
    category: 'toggles',
    tags: ['theme', 'darkmode', 'sun', 'moon'],
    framework: 'HTML/CSS/JS',
    views: 3490,
    likes: 671,
    createdAt: '2026-03-26',
    htmlCode: `<button class="theme-toggle" onclick="toggleTheme(this)">
  <span class="toggle-icon">☀️</span>
</button>`,
    cssCode: `.theme-toggle {
  width: 50px; height: 50px; border-radius: 50%;
  background: #1f2937; border: 1px solid rgba(255,255,255,0.1);
  font-size: 22px; cursor: pointer; display: flex;
  align-items: center; justify-content: center; outline: none;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.theme-toggle.dark {
  background: #f3f4f6; color: #111;
  transform: rotate(360deg);
}
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`,
    jsCode: `function toggleTheme(btn) {
  btn.classList.toggle('dark');
  const isDark = btn.classList.contains('dark');
  btn.querySelector('.toggle-icon').innerText = isDark ? '🌙' : '☀️';
}`
  },
  {
    id: 'tooltip-animated',
    name: 'Animated Rich Tooltip',
    description: 'Chú giải (tooltip) hiển thị thông tin nâng cao, trượt mượt mà lên trên khi hover.',
    category: 'tooltips',
    tags: ['tooltip', 'hover', 'animated', 'card'],
    framework: 'HTML/CSS',
    views: 2410,
    likes: 418,
    createdAt: '2026-03-28',
    htmlCode: `<div class="tooltip-wrapper">
  <span class="tooltip-trigger">Hover Over Me</span>
  <div class="tooltip-box">
    <h5>Tip of the Day</h5>
    <p>Use keyboard shortcuts to improve speed.</p>
  </div>
</div>`,
    cssCode: `.tooltip-wrapper {
  position: relative; display: inline-block;
  font-family: 'Segoe UI', sans-serif;
}
.tooltip-trigger {
  color: #3b82f6; font-weight: bold; cursor: pointer;
  border-bottom: 2px dashed #3b82f6;
}
.tooltip-box {
  position: absolute; bottom: calc(100% + 12px); left: 50%;
  transform: translateX(-50%) translateY(10px);
  width: 200px; padding: 12px; background: #1f2937;
  border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;
  color: white; opacity: 0; pointer-events: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}
.tooltip-wrapper:hover .tooltip-box {
  opacity: 1; pointer-events: all;
  transform: translateX(-50%) translateY(0);
}
.tooltip-box h5 { font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #3b82f6; }
.tooltip-box p { font-size: 11px; color: rgba(255,255,255,0.7); line-height: 1.4; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`
  },
  {
    id: 'tooltip-popover',
    name: 'Interactive Popover Menu',
    description: 'Menu nhỏ (popover) xuất hiện khi click, chứa danh sách hành động nhanh.',
    category: 'tooltips',
    tags: ['popover', 'menu', 'click', 'interactive'],
    framework: 'HTML/CSS/JS',
    views: 2200,
    likes: 389,
    createdAt: '2026-03-30',
    htmlCode: `<div class="popover-wrapper">
  <button class="popover-btn" onclick="togglePopover(this)">Actions</button>
  <div class="popover-menu" id="actions-popover">
    <a href="#" class="popover-item">Edit Project</a>
    <a href="#" class="popover-item">Share Link</a>
    <hr>
    <a href="#" class="popover-item danger">Archive</a>
  </div>
</div>`,
    cssCode: `.popover-wrapper {
  position: relative; display: inline-block; font-family: 'Segoe UI', sans-serif;
}
.popover-btn {
  padding: 12px 24px; background: #1e1b4b; border: 1px solid rgba(255,255,255,0.15);
  color: white; font-weight: bold; border-radius: 8px; cursor: pointer;
}
.popover-menu {
  position: absolute; top: calc(100% + 8px); left: 0; width: 160px;
  background: #111827; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px; display: none; flex-direction: column; padding: 4px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3); z-index: 50;
}
.popover-menu.active { display: flex; }
.popover-item {
  padding: 10px 12px; color: rgba(255,255,255,0.7); text-decoration: none;
  font-size: 13px; border-radius: 6px; transition: background 0.3s, color 0.3s;
}
.popover-item:hover { background: rgba(255,255,255,0.05); color: white; }
.popover-item.danger { color: #f87171; }
.popover-item.danger:hover { background: rgba(248,113,113,0.1); }
hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 4px 0; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0a0a0f; }`,
    jsCode: `function togglePopover(btn) {
  const menu = btn.parentElement.querySelector('.popover-menu');
  menu.classList.toggle('active');
}`
  }
]

// Helper functions
export const getComponentById = (id: string): UIComponent | undefined => {
  return componentsData.find(c => c.id === id)
}

export const getComponentsByCategory = (category: string): UIComponent[] => {
  if (category === 'all') return componentsData
  return componentsData.filter(c => c.category === category)
}

export const searchComponents = (query: string): UIComponent[] => {
  const lower = query.toLowerCase()
  return componentsData.filter(c =>
    c.name.toLowerCase().includes(lower) ||
    c.description.toLowerCase().includes(lower) ||
    c.tags.some(t => t.toLowerCase().includes(lower)) ||
    c.category.toLowerCase().includes(lower)
  )
}

export const getFeaturedComponents = (): UIComponent[] => {
  return componentsData.filter(c => c.featured)
}
