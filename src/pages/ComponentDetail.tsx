import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Eye, Heart, Copy, Check, Sparkles, Code2, Maximize2, Download, Share2, Send, MessageSquare, X } from 'lucide-react'
import Header from '../components/layout/Header'
import { componentsData, UIComponent } from '../data/components'
import ComponentPreview from '../components/ComponentPreview'

interface Comment {
  id: string
  author: string
  content: string
  createdAt: string
  avatar: string
}

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [component, setComponent] = useState<UIComponent | null>(null)
  const [relatedComponents, setRelatedComponents] = useState<UIComponent[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html')
  const [copied, setCopied] = useState<string | null>(null)
  const [isFullscreenPreview, setIsFullscreenPreview] = useState(false)
  const [flyingHearts, setFlyingHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  
  // Local likes state
  const [likesCount, setLikesCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [viewsCount, setViewsCount] = useState(0)

  // Local comments state
  const [comments, setComments] = useState<Comment[]>([])
  const [newCommentName, setNewCommentName] = useState('')
  const [newCommentText, setNewCommentText] = useState('')

  // Share and Export UI state
  const [showShareTooltip, setShowShareTooltip] = useState(false)
  const [showDownloadMenu, setShowDownloadMenu] = useState(false)

  useEffect(() => {
    const fetchComponent = () => {
      if (!id) return
      setLoading(true)
      
      const found = componentsData.find(c => c.id === id)
      if (found) {
        setComponent(found)
        setLikesCount(found.likes)
        
        // Simulating views increment
        setViewsCount(found.views + 1)
        
        // Check if liked before
        const likedBefore = localStorage.getItem(`liked-${id}`)
        if (likedBefore === 'true') {
          setHasLiked(true)
        }

        // Fetch related components
        const related = componentsData
          .filter(c => c.category === found.category && c.id !== found.id)
          .slice(0, 4)
        setRelatedComponents(related)
      } else {
        setComponent(null)
      }
      setLoading(false)
    }

    fetchComponent()
  }, [id])

  // Load and manage local comments
  useEffect(() => {
    if (!id) return
    const stored = localStorage.getItem(`comments-${id}`)
    if (stored) {
      setComments(JSON.parse(stored))
    } else {
      const initial: Comment[] = [
        {
          id: '1',
          author: 'Lâm Nguyễn',
          content: 'Code cực kỳ tối ưu và viết rất dễ hiểu. Layout CSS mượt mà lắm!',
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80&q=80'
        },
        {
          id: '2',
          author: 'Trần Minh Hoàng',
          content: 'Hiệu ứng đẹp thực sự. Mong tác giả làm thêm bản JSX/Tailwind nữa nhé.',
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80'
        }
      ]
      setComments(initial)
      localStorage.setItem(`comments-${id}`, JSON.stringify(initial))
    }
  }, [id])

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (hasLiked || !id) return
    
    // Get button position for heart animation
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    // Add flying heart animation
    const heartId = Date.now()
    setFlyingHearts(prev => [...prev, { id: heartId, x, y }])
    
    // Remove heart after animation
    setTimeout(() => {
      setFlyingHearts(prev => prev.filter(h => h.id !== heartId))
    }, 1500)
    
    setLikesCount(prev => prev + 1)
    setHasLiked(true)
    localStorage.setItem(`liked-${id}`, 'true')
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCommentText.trim() || !newCommentName.trim() || !id) return
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: newCommentName.trim(),
      content: newCommentText.trim(),
      createdAt: new Date().toISOString(),
      avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 999999)}?auto=format&fit=crop&w=80&h=80&q=80`
    }
    
    const updated = [comment, ...comments]
    setComments(updated)
    localStorage.setItem(`comments-${id}`, JSON.stringify(updated))
    setNewCommentText('')
  }

  const handleCopy = async (code: string, type: string) => {
    await navigator.clipboard.writeText(code)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowShareTooltip(true)
    setTimeout(() => setShowShareTooltip(false), 2000)
  }

  const downloadCode = (type: 'html' | 'css' | 'js' | 'all') => {
    if (!component) return
    let content = ''
    let filename = ''
    let mimeType = 'text/plain'
    
    if (type === 'html') {
      content = component.htmlCode
      filename = `${component.id}.html`
      mimeType = 'text/html'
    } else if (type === 'css') {
      content = component.cssCode
      filename = `${component.id}.css`
      mimeType = 'text/css'
    } else if (type === 'js') {
      content = component.jsCode || ''
      filename = `${component.id}.js`
      mimeType = 'text/javascript'
    } else if (type === 'all') {
      content = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${component.name} - Demo Preview</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ${component.cssCode}
  </style>
</head>
<body>
  ${component.htmlCode}
  ${component.jsCode ? `<script>${component.jsCode}</script>` : ''}
</body>
</html>`
      filename = `${component.id}-full-demo.html`
      mimeType = 'text/html'
    }
    
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    setShowDownloadMenu(false)
  }

  const getCodeByTab = () => {
    if (!component) return ''
    switch (activeTab) {
      case 'html':
        return component.htmlCode
      case 'css':
        return component.cssCode
      case 'js':
        return component.jsCode || '// Không có mã nguồn JavaScript cho component này.'
      default:
        return ''
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-primary text-text-primary flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    )
  }

  if (!component) {
    return (
      <div className="min-h-screen bg-primary text-text-primary flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center px-4">
          <h2 className="text-2xl font-bold mb-4">Component không tồn tại</h2>
          <Link to="/components" className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Quay lại thư viện
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary text-text-primary transition-colors duration-500">
      <Header />
      
      <div className="container mx-auto px-4 pt-28 pb-16 max-w-7xl">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/components"
            className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary hover:bg-secondary border border-border-primary rounded-full text-text-secondary hover:text-text-primary transition-all duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Thư viện component
          </Link>
        </motion.div>

        {/* Component Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-secondary border border-border-primary rounded-3xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-text-primary via-text-primary to-text-secondary bg-clip-text text-transparent">
                {component.name}
              </h1>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                {component.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {component.category}
                </span>
                <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {component.framework}
                </span>
                {component.tags && component.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-tertiary text-text-muted border border-border-primary rounded-full text-xs">
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Dashboard */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleLike}
                disabled={hasLiked}
                whileHover={!hasLiked ? { scale: 1.05 } : {}}
                whileTap={!hasLiked ? { scale: 0.95 } : {}}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold transition-all border ${
                  hasLiked 
                    ? 'bg-pink-500/10 text-pink-500 border-pink-500/30' 
                    : 'bg-tertiary hover:bg-secondary border-border-primary text-text-secondary hover:text-text-primary'
                }`}
              >
                <Heart className={`w-5 h-5 ${hasLiked ? 'fill-pink-500 text-pink-500' : ''}`} />
                <span>{likesCount}</span>
              </motion.button>
              
              <div className="flex items-center gap-2 px-5 py-2.5 bg-tertiary border border-border-primary text-text-secondary rounded-2xl font-bold">
                <Eye className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <span>{viewsCount}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Preview (Left) & Code Editor (Right) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Live Preview */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="bg-secondary border border-border-primary rounded-3xl overflow-hidden flex flex-col h-full">
              {/* Toolbar */}
              <div className="p-4 bg-tertiary border-b border-border-primary flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-sm font-semibold text-text-secondary">Live Preview</span>
                </div>
                
                <button
                  onClick={() => setIsFullscreenPreview(true)}
                  className="p-2 hover:bg-text-primary/[0.05] rounded-lg text-text-secondary hover:text-text-primary transition-colors"
                  title="Xem toàn màn hình"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>

              {/* Rendering Area */}
              <div className="p-6 bg-[#0c0c1e] flex-grow flex items-center justify-center min-h-[450px] relative">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <style>
                          body {
                            margin: 0;
                            padding: 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 90vh;
                            background: #0d0d1e;
                          }
                          ${component.cssCode}
                        </style>
                      </head>
                      <body>
                        ${component.htmlCode}
                        ${component.jsCode ? `<script>${component.jsCode}</script>` : ''}
                      </body>
                    </html>
                  `}
                  className="w-full h-[400px] border-0 rounded-2xl bg-[#0d0d1e]"
                  title="Component Live Rendering"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>

              {/* Action bar below preview */}
              <div className="p-4 bg-tertiary border-t border-border-primary flex items-center justify-between flex-wrap gap-4 relative">
                {/* Heart animation containers */}
                {flyingHearts.map((heart) => (
                  <motion.div
                    key={heart.id}
                    initial={{ x: heart.x - 20, y: heart.y - 20, scale: 1, opacity: 1 }}
                    animate={{ 
                      y: heart.y - 120, 
                      x: heart.x + (Math.random() * 80 - 40), 
                      scale: [1, 1.6, 0], 
                      opacity: [1, 1, 0] 
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="fixed pointer-events-none z-50 text-pink-500"
                    style={{ left: heart.x, top: heart.y }}
                  >
                    <Heart className="w-8 h-8 fill-current" />
                  </motion.div>
                ))}

                <div className="flex gap-2">
                  {/* Share button */}
                  <div className="relative">
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2.5 bg-tertiary hover:bg-secondary border border-border-primary rounded-xl text-text-secondary hover:text-text-primary transition-colors font-semibold text-sm"
                    >
                      <Share2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                      <span>Chia sẻ</span>
                    </button>
                    {showShareTooltip && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-indigo-600 text-white text-[11px] px-3 py-1 rounded-md font-bold shadow-xl border border-indigo-400 z-30 whitespace-nowrap">
                        Đã copy link vào clipboard!
                      </div>
                    )}
                  </div>

                  {/* Download dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-tertiary hover:bg-secondary border border-border-primary rounded-xl text-text-secondary hover:text-text-primary transition-colors font-semibold text-sm"
                    >
                      <Download className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      <span>Tải code</span>
                    </button>
                    {showDownloadMenu && (
                      <div className="absolute bottom-full left-0 mb-2 bg-secondary border border-border-primary rounded-xl p-2 shadow-2xl z-30 min-w-[160px]">
                        <button onClick={() => downloadCode('html')} className="w-full text-left px-3 py-2 text-xs text-text-secondary hover:text-text-primary hover:bg-tertiary rounded-lg">HTML Code</button>
                        <button onClick={() => downloadCode('css')} className="w-full text-left px-3 py-2 text-xs text-text-secondary hover:text-text-primary hover:bg-tertiary rounded-lg">CSS Code</button>
                        {component.jsCode && <button onClick={() => downloadCode('js')} className="w-full text-left px-3 py-2 text-xs text-text-secondary hover:text-text-primary hover:bg-tertiary rounded-lg">JavaScript Code</button>}
                        <div className="h-px bg-border-primary my-1" />
                        <button onClick={() => downloadCode('all')} className="w-full text-left px-3 py-2 text-xs font-semibold text-emerald-500 dark:text-emerald-400 hover:bg-tertiary rounded-lg">Trọn gói HTML/CSS</button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-xs text-text-muted italic">
                  * Nhấp tải code trọn gói để lấy đầy đủ file HTML, CSS mẫu.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="bg-[#0c0c1e] border border-border-primary rounded-3xl overflow-hidden flex flex-col h-full">
              {/* Tab Selector */}
              <div className="flex bg-tertiary/50 border-b border-border-primary">
                {(['html', 'css', 'js'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-4 font-bold text-sm tracking-wider uppercase transition-all border-b-2 ${
                      activeTab === tab
                        ? 'text-indigo-500 dark:text-indigo-400 border-indigo-500 bg-secondary/10'
                        : 'text-text-muted border-transparent hover:text-text-secondary'
                    }`}
                  >
                    {tab === 'js' ? 'Javascript' : tab}
                  </button>
                ))}
              </div>

              {/* Code viewer container */}
              <div className="p-6 flex-grow flex flex-col min-h-[450px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs text-text-muted font-mono">Source Editor</span>
                  </div>
                  
                  <button
                    onClick={() => handleCopy(getCodeByTab(), activeTab)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-tertiary hover:bg-secondary border border-border-primary text-text-secondary hover:text-text-primary text-xs font-semibold rounded-lg transition-colors"
                  >
                    {copied === activeTab ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-500" />
                        <span className="text-green-500">Đã copy!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex-grow bg-[#0d1117] border border-border-primary rounded-2xl p-4 overflow-auto max-h-[350px]">
                  <pre className="text-white/80 text-xs font-mono leading-relaxed whitespace-pre-wrap">
                    <code>{getCodeByTab()}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Local comments & Reviews section */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-secondary border border-border-primary rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <span>Bình luận ({comments.length})</span>
              </h3>

              {/* Comments form */}
              <form onSubmit={handleAddComment} className="mb-8 bg-tertiary/50 border border-border-primary p-5 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-text-secondary font-bold uppercase tracking-wider mb-2">Tên của bạn</label>
                    <input
                      type="text"
                      placeholder="Nhập tên..."
                      required
                      value={newCommentName}
                      onChange={(e) => setNewCommentName(e.target.value)}
                      className="w-full px-4 py-2 bg-tertiary border border-border-primary text-text-primary outline-none focus:ring-1 focus:ring-indigo-500 text-sm rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-text-secondary font-bold uppercase tracking-wider mb-2">Nội dung bình luận</label>
                  <textarea
                    rows={3}
                    placeholder="Chia sẻ ý kiến của bạn về component này..."
                    required
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    className="w-full px-4 py-3 bg-tertiary border border-border-primary text-text-primary outline-none focus:ring-1 focus:ring-indigo-500 text-sm resize-none rounded-xl"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-colors"
                  >
                    <span>Gửi bình luận</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Comments display */}
              <div className="space-y-6 max-h-[400px] overflow-auto pr-2">
                {comments.length === 0 ? (
                  <p className="text-text-muted text-sm italic">Chưa có bình luận nào. Hãy trở thành người đầu tiên!</p>
                ) : (
                  comments.map((c) => (
                    <div key={c.id} className="flex gap-4 border-b border-border-primary pb-6 last:border-0 last:pb-0">
                      <img
                        src={c.avatar}
                        alt={c.author}
                        className="w-10 h-10 rounded-full object-cover border border-border-primary bg-secondary"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80&q=80'
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-text-primary">{c.author}</h4>
                          <span className="text-[10px] text-text-muted">{new Date(c.createdAt).toLocaleDateString('vi-VN')}</span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">{c.content}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Quick tips panel */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-border-primary rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-bold text-lg mb-3 text-indigo-500 dark:text-indigo-300">💡 Hướng dẫn tích hợp</h3>
              <ul className="text-xs text-text-secondary space-y-3 leading-relaxed">
                <li>• Nhấn nút <strong className="text-text-primary">Copy Code</strong> để sao chép mã nguồn HTML, CSS tương ứng vào clipboard.</li>
                <li>• Bạn cần chèn mã CSS vào file css dự án của mình hoặc đặt trong thẻ <code className="bg-black/5 dark:bg-white/5 px-1 py-0.5 rounded text-indigo-500 dark:text-indigo-300 font-mono">&lt;style&gt;</code>.</li>
                <li>• Nếu component có chứa Javascript (tab Javascript), hãy copy đoạn mã Javascript đó đặt trước thẻ đóng <code className="bg-black/5 dark:bg-white/5 px-1 py-0.5 rounded text-indigo-500 dark:text-indigo-300 font-mono">&lt;/body&gt;</code>.</li>
                <li>• Toàn bộ component đều là CSS thuần và HTML tĩnh, dễ dàng chỉnh sửa hoặc chuyển đổi sang React JSX / Tailwind CSS.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Components */}
        {relatedComponents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <div className="flex items-center justify-between mb-8 border-b border-border-primary pb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                Các Component Cùng Danh Mục
              </h2>
              <Link
                to={`/components?category=${component.category}`}
                className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-semibold text-sm flex items-center gap-1.5 transition-colors"
              >
                Xem tất cả <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedComponents.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-secondary border border-border-primary rounded-2xl overflow-hidden hover:border-indigo-500/20 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <Link
                    to={`/components/${related.id}`}
                    className="block relative aspect-video bg-tertiary overflow-hidden"
                  >
                    {related.htmlCode && related.cssCode ? (
                      <ComponentPreview
                        htmlCode={related.htmlCode}
                        cssCode={related.cssCode}
                        jsCode={related.jsCode || undefined}
                        name={related.name}
                        height={160}
                        lazy={true}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code2 className="w-12 h-12 text-text-primary/20" />
                      </div>
                    )}
                  </Link>
                  <div className="p-4 flex flex-col flex-1">
                    <Link to={`/components/${related.id}`}>
                      <h4 className="font-bold text-sm text-text-primary hover:text-indigo-500 transition-colors line-clamp-1 mb-1">
                        {related.name}
                      </h4>
                    </Link>
                    <p className="text-[11px] text-text-secondary line-clamp-2 mb-3 flex-1">{related.description}</p>
                    <div className="flex items-center gap-3 text-[10px] text-text-muted pt-2.5 border-t border-border-primary">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{related.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-pink-500/80 fill-pink-500/10" />
                        <span>{related.likes}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {isFullscreenPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#090912] flex flex-col"
          >
            {/* Header controls */}
            <div className="bg-secondary px-6 py-4 flex items-center justify-between border-b border-border-primary">
              <div>
                <h3 className="font-bold text-text-primary text-base md:text-lg">{component.name}</h3>
                <p className="text-text-muted text-xs italic">Xem thử nghiệm chế độ toàn màn hình</p>
              </div>
              <button
                onClick={() => setIsFullscreenPreview(false)}
                className="p-2 bg-tertiary hover:bg-secondary border border-border-primary rounded-xl text-text-secondary hover:text-text-primary transition-all"
                title="Đóng chế độ phóng to"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Rendering full-screen */}
            <div className="flex-1 bg-[#0d0d1e] p-6 relative">
              <iframe
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <meta charset="UTF-8">
                      <style>
                        body {
                          margin: 0;
                          padding: 40px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          min-height: 90vh;
                          background: #0d0d1e;
                        }
                        ${component.cssCode}
                      </style>
                    </head>
                    <body>
                      ${component.htmlCode}
                      ${component.jsCode ? `<script>${component.jsCode}</script>` : ''}
                    </body>
                  </html>
                `}
                className="w-full h-full border-0 rounded-2xl bg-[#0d0d1e]"
                title="Fullscreen Preview Pane"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ComponentDetail
