import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Eye, Heart, Code2, Sparkles, Filter, SlidersHorizontal } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { componentsData, UIComponent, categories } from '../data/components'
import ComponentPreview from '../components/ComponentPreview'

const Components = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(() => {
    // Read category from URL query params
    return searchParams.get('category') || 'all'
  })
  const [selectedFramework, setSelectedFramework] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [components, setComponents] = useState<UIComponent[]>([])
  const [pagination, setPagination] = useState({ page: 1, pageSize: 9, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', selectedCategory)
    }
    setSearchParams(searchParams, { replace: true })
    setPagination(prev => ({ ...prev, page: 1 }))
  }, [selectedCategory, setSearchParams])

  // Read category from URL on mount and when URL changes
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl)
      setPagination(prev => ({ ...prev, page: 1 }))
    }
  }, [searchParams])

  // Search, filter, sorting, and pagination logic
  useEffect(() => {
    setLoading(true)
    
    // Introduce a tiny timeout to simulate smooth loading transitions
    const timer = setTimeout(() => {
      let filtered = [...componentsData]
      
      // 1. Search term filter
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase().trim()
        filtered = filtered.filter(item => 
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.tags.some(tag => tag.toLowerCase().includes(term))
        )
      }
      
      // 2. Category filter
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory)
      }
      
      // 3. Framework filter
      if (selectedFramework !== 'all') {
        const fw = selectedFramework.toLowerCase()
        filtered = filtered.filter(item => {
          if (fw === 'html') return item.framework.toLowerCase().includes('html')
          if (fw === 'react') return item.framework.toLowerCase().includes('react')
          if (fw === 'vue') return item.framework.toLowerCase().includes('vue')
          if (fw === 'tailwind') return item.tags.some(t => t.toLowerCase().includes('tailwind')) || item.description.toLowerCase().includes('tailwind')
          return true
        })
      }
      
      // 4. Sort
      if (sortBy === 'popular') {
        filtered.sort((a, b) => b.views - a.views)
      } else if (sortBy === 'newest') {
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      } else if (sortBy === 'mostLiked') {
        filtered.sort((a, b) => b.likes - a.likes)
      } else if (sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name))
      }
      
      // 5. Pagination
      const total = filtered.length
      const pageSize = pagination.pageSize
      const totalPages = Math.ceil(total / pageSize)
      const page = Math.min(pagination.page, totalPages || 1)
      
      const startIndex = (page - 1) * pageSize
      const paginated = filtered.slice(startIndex, startIndex + pageSize)
      
      setComponents(paginated)
      setPagination(prev => ({
        ...prev,
        page,
        total,
        totalPages
      }))
      
      setLoading(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [searchTerm, selectedCategory, selectedFramework, sortBy, pagination.page, pagination.pageSize])

  return (
    <div className="min-h-screen bg-primary text-text-primary flex flex-col transition-colors duration-500">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs md:text-sm font-semibold text-indigo-500 dark:text-indigo-400 tracking-widest uppercase mb-3 block">
              ZenithUI Library Templates
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-text-primary via-text-primary/90 to-indigo-500 dark:to-indigo-400 bg-clip-text text-transparent">
              ZenithUI Components
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Explore, copy, and customize dozens of handcrafted, production-ready interface components using HTML, CSS, and JS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Library Controls & Feed */}
      <main className="flex-grow py-8 border-t border-border-primary bg-secondary/30 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Controls Bar: Search & Select Filter inline */}
          <div className="flex flex-col gap-6 mb-10">
            {/* Search and Quick Options */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
              {/* Search input */}
              <div className="relative flex-grow max-w-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by name, tag, or utility..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setPagination(prev => ({ ...prev, page: 1 }))
                  }}
                  className="w-full pl-11 pr-5 py-3 bg-tertiary border border-border-primary rounded-2xl focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-300 text-text-primary placeholder-text-muted hover:bg-secondary"
                />
              </div>

              {/* Inline Selects (Framework & Sort) */}
              <div className="flex gap-3">
                <div className="relative flex items-center bg-tertiary border border-border-primary rounded-2xl px-3 hover:bg-secondary transition-colors">
                  <Filter className="w-3.5 h-3.5 text-text-muted mr-2" />
                  <select
                    value={selectedFramework}
                    onChange={(e) => {
                      setSelectedFramework(e.target.value)
                      setPagination(prev => ({ ...prev, page: 1 }))
                    }}
                    className="bg-transparent py-3 pr-2 text-xs md:text-sm text-text-secondary outline-none cursor-pointer font-medium"
                  >
                    <option value="all" className="bg-secondary text-text-primary">All Frameworks</option>
                    <option value="html" className="bg-secondary text-text-primary">HTML / CSS / JS</option>
                    <option value="react" className="bg-secondary text-text-primary">React / JSX</option>
                    <option value="vue" className="bg-secondary text-text-primary">Vue / SFC</option>
                    <option value="tailwind" className="bg-secondary text-text-primary">Tailwind CSS</option>
                  </select>
                </div>

                <div className="relative flex items-center bg-tertiary border border-border-primary rounded-2xl px-3 hover:bg-secondary transition-colors">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-text-muted mr-2" />
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value)
                      setPagination(prev => ({ ...prev, page: 1 }))
                    }}
                    className="bg-transparent py-3 pr-2 text-xs md:text-sm text-text-secondary outline-none cursor-pointer font-medium"
                  >
                    <option value="popular" className="bg-secondary text-text-primary">Popular</option>
                    <option value="newest" className="bg-secondary text-text-primary">Newest</option>
                    <option value="mostLiked" className="bg-secondary text-text-primary">Most Liked</option>
                    <option value="name" className="bg-secondary text-text-primary">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Horizontal Scrollable Categories List */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-6 px-6 hide-scrollbar scroll-smooth">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`category-pill ${selectedCategory === cat.value ? 'active' : ''}`}
                >
                  <span className="mr-1.5">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
            
            {/* Info Summary Row */}
            <div className="flex items-center justify-between pb-4 border-b border-border-primary">
              <span className="text-xs md:text-sm text-text-muted font-medium">
                Showing <span className="text-text-primary font-bold">{components.length}</span> of <span className="text-text-primary font-bold">{pagination.total}</span> components
              </span>
              <span className="text-xs text-text-muted font-mono">
                Page {pagination.page} / {pagination.totalPages || 1}
              </span>
            </div>
          </div>

          {/* Grid display */}
          {loading ? (
            <div className="text-center py-32">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500 mx-auto mb-4"></div>
              <p className="text-text-muted text-sm">Loading components...</p>
            </div>
          ) : components.length === 0 ? (
            <div className="text-center py-24 bg-tertiary border border-border-primary rounded-3xl max-w-4xl mx-auto">
              <Code2 className="w-16 h-16 text-text-muted/60 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No components found</h3>
              <p className="text-text-muted text-sm max-w-sm mx-auto">
                Try changing your search keywords or choosing another category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {components.map((component, index) => (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="component-card flex flex-col group border-border-primary h-full"
                >
                  {/* Preview Area */}
                  <Link to={`/components/${component.id}`} className="relative bg-tertiary overflow-hidden block">
                    <div className="relative w-full aspect-video bg-gradient-to-br from-text-primary/[0.01] to-text-primary/[0.02]">
                      {component.htmlCode && component.cssCode ? (
                        <ComponentPreview
                          htmlCode={component.htmlCode}
                          cssCode={component.cssCode}
                          jsCode={component.jsCode || undefined}
                          name={component.name}
                          height={192}
                          lazy={true}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Code2 className="w-12 h-12 text-text-primary/20" />
                        </div>
                      )}
                      
                      {/* Floating Category Indicator badge */}
                      <div className="absolute top-3 right-3 bg-secondary/90 dark:bg-black/80 backdrop-blur-md text-text-secondary px-3 py-1 rounded-full text-xs font-semibold border border-border-primary z-10 flex items-center gap-1.5">
                        <span>{categories.find(c => c.value === component.category)?.icon}</span>
                        <span>{categories.find(c => c.value === component.category)?.label || component.category}</span>
                      </div>

                      {/* Featured Badge if featured */}
                      {component.featured && (
                        <div className="absolute top-3 left-3 bg-indigo-500/20 backdrop-blur-md text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-500/30 z-10 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Featured</span>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="preview-overlay flex items-center justify-center gap-2 text-white font-semibold text-xs tracking-wider z-20">
                        <span>Details & Code</span>
                        <Code2 className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>

                  {/* Component Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <Link to={`/components/${component.id}`} className="inline-block mb-2">
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-1">
                        {component.name}
                      </h3>
                    </Link>
                    <p className="text-xs md:text-sm text-text-secondary mb-5 line-clamp-2 leading-relaxed flex-grow">
                      {component.description}
                    </p>

                    {/* Tags */}
                    {component.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {component.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-tertiary text-text-muted rounded-md border border-border-primary">
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats & Metadata */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-primary text-xs text-text-muted">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {component.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 text-pink-500/70" />
                          {component.likes.toLocaleString()}
                        </span>
                      </div>
                      
                      {component.framework && (
                        <span className="text-[10px] font-semibold font-mono text-indigo-500 dark:text-indigo-400 uppercase bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/10">
                          {component.framework}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
                disabled={pagination.page === 1}
                className="px-4 py-2 bg-tertiary border border-border-primary rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary transition-colors text-sm text-text-secondary font-semibold"
              >
                Prev
              </button>
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setPagination(prev => ({ ...prev, page }))}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                    pagination.page === page
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-tertiary border-border-primary text-text-muted hover:bg-secondary'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: Math.min(pagination.totalPages, prev.page + 1) }))}
                disabled={pagination.page === pagination.totalPages}
                className="px-4 py-2 bg-tertiary border border-border-primary rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary transition-colors text-sm text-text-secondary font-semibold"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Components
