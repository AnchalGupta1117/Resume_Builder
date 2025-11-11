import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Download, Eye, Star, TrendingUp, CheckCircle2, Search, Filter, Heart, Share2, Zap, Award, Clock, X } from 'lucide-react';
import Modal from '../components/Modal';

const TemplatesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [favorites, setFavorites] = useState([]);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const categories = [
    { id: 'all', name: 'All Templates', icon: '🎨', count: 8 },
    { id: 'professional', name: 'Professional', icon: '💼', count: 2 },
    { id: 'creative', name: 'Creative', icon: '✨', count: 2 },
    { id: 'modern', name: 'Modern', icon: '🚀', count: 2 },
    { id: 'minimalist', name: 'Minimalist', icon: '📋', count: 2 },
  ];

  const templates = [
    {
      id: 1,
      name: 'Executive Pro',
      category: 'professional',
      description: 'Perfect for senior positions and executive roles',
      image: '/templates/executive.jpg',
      popular: true,
      featured: true,
      color: 'from-violet-600 to-purple-600',
      rating: 4.9,
      downloads: '15k+',
      tags: ['ATS-Friendly', 'Executive', 'Leadership'],
      atsScore: 98,
      timeToComplete: '5 min'
    },
    {
      id: 2,
      name: 'Creative Vision',
      category: 'creative',
      description: 'Stand out with bold design for creative industries',
      image: '/templates/creative.jpg',
      popular: true,
      featured: false,
      color: 'from-fuchsia-600 to-pink-600',
      rating: 4.8,
      downloads: '12k+',
      tags: ['Portfolio', 'Design', 'Visual'],
      atsScore: 85,
      timeToComplete: '6 min'
    },
    {
      id: 3,
      name: 'Tech Modern',
      category: 'modern',
      description: 'Clean and modern for tech professionals',
      image: '/templates/modern.jpg',
      popular: false,
      featured: true,
      color: 'from-indigo-600 to-blue-600',
      rating: 4.7,
      downloads: '10k+',
      tags: ['Tech', 'Developer', 'IT'],
      atsScore: 95,
      timeToComplete: '4 min'
    },
    {
      id: 4,
      name: 'Simple Classic',
      category: 'minimalist',
      description: 'Timeless minimalist design that never fails',
      image: '/templates/minimal.jpg',
      popular: true,
      featured: false,
      color: 'from-slate-600 to-gray-600',
      rating: 4.9,
      downloads: '18k+',
      tags: ['Clean', 'Simple', 'Universal'],
      atsScore: 99,
      timeToComplete: '3 min'
    },
    {
      id: 5,
      name: 'Business Elite',
      category: 'professional',
      description: 'Professional template for business leaders',
      image: '/templates/business.jpg',
      popular: false,
      featured: true,
      color: 'from-purple-600 to-violet-600',
      rating: 4.6,
      downloads: '8k+',
      tags: ['Corporate', 'MBA', 'Finance'],
      atsScore: 96,
      timeToComplete: '5 min'
    },
    {
      id: 6,
      name: 'Designer Pro',
      category: 'creative',
      description: 'Showcase your design skills with style',
      image: '/templates/designer.jpg',
      popular: false,
      featured: false,
      color: 'from-orange-600 to-red-600',
      rating: 4.8,
      downloads: '9k+',
      tags: ['UX/UI', 'Graphic', 'Creative'],
      atsScore: 82,
      timeToComplete: '7 min'
    },
    {
      id: 7,
      name: 'Startup Ready',
      category: 'modern',
      description: 'Dynamic template for startup enthusiasts',
      image: '/templates/startup.jpg',
      popular: true,
      featured: false,
      color: 'from-emerald-600 to-teal-600',
      rating: 4.7,
      downloads: '11k+',
      tags: ['Startup', 'Innovation', 'Growth'],
      atsScore: 92,
      timeToComplete: '5 min'
    },
    {
      id: 8,
      name: 'Clean Pro',
      category: 'minimalist',
      description: 'Less is more - ultra clean design',
      image: '/templates/clean.jpg',
      popular: false,
      featured: false,
      color: 'from-blue-600 to-cyan-600',
      rating: 4.5,
      downloads: '7k+',
      tags: ['Minimal', 'Professional', 'Elegant'],
      atsScore: 97,
      timeToComplete: '4 min'
    },
  ];

  // Filter and sort templates
  const filteredTemplates = templates
    .filter(t => selectedCategory === 'all' || t.category === selectedCategory)
    .filter(t => 
      searchQuery === '' || 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'popular': return b.downloads.replace(/\D/g, '') - a.downloads.replace(/\D/g, '');
        case 'rating': return b.rating - a.rating;
        case 'newest': return b.id - a.id;
        case 'ats': return b.atsScore - a.atsScore;
        default: return 0;
      }
    });

  const toggleFavorite = (templateId) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };

  const handleShare = (template) => {
    if (navigator.share) {
      navigator.share({
        title: template.name,
        text: template.description,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handlePreview = (template) => {
    setPreviewTemplate(template);
  };

  const closePreview = () => {
    setPreviewTemplate(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-violet-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 text-violet-700 font-semibold hover:bg-violet-50 rounded-xl transition-all"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Home</span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 border border-violet-200 rounded-full">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-bold text-violet-700">Premium Templates</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
              <span className="text-slate-900">Build Your </span>
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                Dream Career
              </span>
              <span className="text-slate-900"> Journey</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Transform your career story with <span className="font-bold text-violet-600">AI-powered templates</span> designed by industry experts. 
              <span className="block mt-2">Stand out, get noticed, land your dream job! 🚀</span>
            </p>          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            {[
              { icon: <Download className="w-5 h-5" />, value: '80K+', label: 'Success Stories', gradient: 'from-violet-600 to-purple-600' },
              { icon: <Star className="w-5 h-5" />, value: '4.9★', label: 'User Satisfaction', gradient: 'from-orange-500 to-red-500' },
              { icon: <TrendingUp className="w-5 h-5" />, value: '95%', label: 'Interview Rate', gradient: 'from-emerald-500 to-teal-500' },
              { icon: <Zap className="w-5 h-5" />, value: '<5min', label: 'Build Time', gradient: 'from-blue-500 to-cyan-500' }
            ].map((stat, idx) => (
              <div key={idx} className="group flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-violet-100 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${stat.gradient} text-white`}>{stat.icon}</div>
                <div className="text-left">
                  <div className={`text-2xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400" />
              <input
                type="text"
                placeholder="Search templates by name, category, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-violet-100 rounded-2xl focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-100 transition-all text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 px-6 py-4 bg-white border-2 border-violet-100 rounded-2xl hover:border-violet-300 transition-all font-semibold text-slate-700"
              >
                <Filter className="w-5 h-5 text-violet-600" />
                Sort: {sortBy === 'popular' ? 'Most Popular' : sortBy === 'rating' ? 'Highest Rated' : sortBy === 'ats' ? 'Best ATS Score' : 'Newest'}
              </button>

              {showSortMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white border-2 border-violet-100 rounded-2xl shadow-2xl z-10 overflow-hidden">
                  {[
                    { id: 'popular', label: 'Most Popular', icon: '🔥' },
                    { id: 'rating', label: 'Highest Rated', icon: '⭐' },
                    { id: 'ats', label: 'Best ATS Score', icon: '🎯' },
                    { id: 'newest', label: 'Newest First', icon: '✨' }
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowSortMenu(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-violet-50 transition-colors flex items-center gap-3 ${
                        sortBy === option.id ? 'bg-violet-100 text-violet-700 font-bold' : 'text-slate-700'
                      }`}
                    >
                      <span>{option.icon}</span>
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory !== 'all') && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-slate-600 font-medium">Active filters:</span>
              {searchQuery && (
                <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold flex items-center gap-2">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-violet-900">×</button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 rounded-full text-sm font-semibold flex items-center gap-2">
                  Category: {categories.find(c => c.id === selectedCategory)?.name}
                  <button onClick={() => setSelectedCategory('all')} className="hover:text-fuchsia-900">×</button>
                </span>
              )}
              <span className="text-sm text-slate-500 ml-2">({filteredTemplates.length} templates found)</span>
            </div>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`
                group relative px-6 py-3 rounded-2xl font-bold transition-all duration-300
                ${selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-xl shadow-violet-200 scale-105'
                  : 'bg-white text-slate-700 border-2 border-violet-100 hover:border-violet-300 hover:bg-violet-50'
                }
              `}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
              {cat.count > 0 && (
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                  selectedCategory === cat.id 
                    ? 'bg-white/20' 
                    : 'bg-violet-100 text-violet-700 group-hover:bg-violet-200'
                }`}>
                  {cat.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-violet-100 hover:border-violet-300 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-200/50 hover:-translate-y-2"
            >
              {/* Favorite and Share Buttons */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={() => toggleFavorite(template.id)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                    favorites.includes(template.id)
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white/80 text-slate-600 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(template.id) ? 'fill-white' : ''}`} />
                </button>
                <button
                  onClick={() => handleShare(template)}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:bg-white transition-all"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {template.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                )}
                {template.popular && (
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                    🔥 Popular
                  </span>
                )}
              </div>

              {/* Template Preview */}
              <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Mock Resume Preview */}
                  <div className={`w-4/5 h-4/5 bg-gradient-to-br ${template.color} rounded-2xl shadow-2xl p-6 transform group-hover:scale-105 transition-transform duration-300`}>
                    <div className="bg-white/20 backdrop-blur-sm h-full rounded-xl p-4 space-y-3">
                      <div className="h-12 w-12 bg-white/40 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/60 rounded w-3/4"></div>
                        <div className="h-2 bg-white/40 rounded w-1/2"></div>
                      </div>
                      <div className="space-y-2 pt-4">
                        <div className="h-2 bg-white/50 rounded"></div>
                        <div className="h-2 bg-white/50 rounded w-5/6"></div>
                        <div className="h-2 bg-white/50 rounded w-4/6"></div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <div className="h-6 w-16 bg-white/40 rounded-full"></div>
                        <div className="h-6 w-20 bg-white/40 rounded-full"></div>
                        <div className="h-6 w-14 bg-white/40 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay with Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                  <button 
                    onClick={() => handlePreview(template)}
                    className="px-4 py-2 bg-white text-violet-700 font-bold rounded-xl hover:bg-violet-50 transition-all flex items-center gap-2">
                    <Eye size={18} />
                    Preview
                  </button>
                  <button 
                    onClick={() => navigate('/create-resume')}
                    className="px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <CheckCircle2 size={18} />
                    Use Template
                  </button>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900">{template.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{template.description}</p>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-violet-50 text-violet-700 text-xs font-semibold rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ATS Score & Time */}
                <div className="flex gap-3 pt-2">
                  <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-700">ATS {template.atsScore}%</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-blue-700">{template.timeToComplete}</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-violet-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <span className="text-sm font-bold text-slate-700">{template.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Download className="w-4 h-4" />
                    <span className="font-semibold">{template.downloads}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No templates found</h3>
            <p className="text-slate-500">Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-600 py-16 sm:py-20 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Ready to Create Your Perfect Resume?
          </h2>
          <p className="text-lg sm:text-xl text-violet-100 max-w-2xl mx-auto">
            Choose a template and start building your professional resume in minutes
          </p>
          <button
            onClick={() => navigate('/create-resume')}
            className="group relative px-10 py-4 bg-white text-violet-700 font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-3">
              Get Started Now
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-xl border-t border-violet-100/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600">
            Crafted with <span className="text-red-500">❤️</span> by{' '}
            <a 
              href="https://hexagonaldigitalservices.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent hover:underline"
            >
              Hexagonal Digital Services
            </a>
          </p>
        </div>
      </footer>

      {/* Preview Modal */}
      {previewTemplate && (
        <Modal isOpen={true} onClose={closePreview}>
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {previewTemplate.name}
                </h2>
                <p className="text-slate-600 mt-2">{previewTemplate.description}</p>
              </div>
            </div>

            {/* Template Preview */}
            <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden border-2 border-violet-100">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className={`w-full h-full bg-gradient-to-br ${previewTemplate.color} rounded-2xl shadow-2xl p-8`}>
                  <div className="bg-white/20 backdrop-blur-sm h-full rounded-xl p-6 space-y-4">
                    {/* Mock Resume Content */}
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 bg-white/40 rounded-full"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 bg-white/60 rounded w-2/3"></div>
                        <div className="h-3 bg-white/40 rounded w-1/2"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <div className="h-3 bg-white/50 rounded"></div>
                      <div className="h-3 bg-white/50 rounded w-5/6"></div>
                      <div className="h-3 bg-white/50 rounded w-4/6"></div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="h-4 bg-white/60 rounded w-1/3 mb-3"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-20 bg-white/40 rounded-full"></div>
                        <div className="h-8 w-24 bg-white/40 rounded-full"></div>
                        <div className="h-8 w-16 bg-white/40 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="h-4 bg-white/60 rounded w-1/3 mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/50 rounded"></div>
                        <div className="h-3 bg-white/50 rounded w-4/5"></div>
                        <div className="h-3 bg-white/50 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-4 rounded-2xl border border-violet-100">
                <div className="flex items-center gap-2 text-violet-600 mb-1">
                  <Star className="w-5 h-5 fill-violet-600" />
                  <span className="font-bold text-sm">Rating</span>
                </div>
                <div className="text-2xl font-black text-slate-900">{previewTemplate.rating}</div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                  <Award className="w-5 h-5" />
                  <span className="font-bold text-sm">ATS Score</span>
                </div>
                <div className="text-2xl font-black text-slate-900">{previewTemplate.atsScore}%</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-sm">Build Time</span>
                </div>
                <div className="text-2xl font-black text-slate-900">{previewTemplate.timeToComplete}</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-100">
                <div className="flex items-center gap-2 text-orange-600 mb-1">
                  <Download className="w-5 h-5" />
                  <span className="font-bold text-sm">Downloads</span>
                </div>
                <div className="text-2xl font-black text-slate-900">{previewTemplate.downloads}</div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Perfect For:</h3>
              <div className="flex flex-wrap gap-2">
                {previewTemplate.tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-violet-100 text-violet-700 text-sm font-semibold rounded-xl border border-violet-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => {
                  closePreview();
                  navigate('/create-resume');
                }}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={20} />
                Use This Template
              </button>
              <button
                onClick={closePreview}
                className="px-6 py-4 border-2 border-violet-200 text-slate-700 font-bold rounded-2xl hover:bg-violet-50 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TemplatesPage;
