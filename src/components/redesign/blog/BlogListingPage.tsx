/**
 * BlogListingPage - Conforme Figma Make
 * 
 * Sections :
 * 1. Hero avec stats (127 articles, 12K lecteurs, 8 contributeurs)
 * 2. Search & Filters (terminal-style + category pills)
 * 3. Featured Article (2 colonnes)
 * 4. Articles Grid (3 colonnes)
 */

import { Search, Tag, Clock, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const categories = ["Tous", "Histoire", "Retro-Guide", "Top List", "Analyse", "Interview", "Débat"];

interface BlogListingPageProps {
  articles: BlogArticle[];
}

export default function BlogListingPage({ articles }: BlogListingPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  const filteredArticles = regularArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.1
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff] via-[#0a0a1f] to-[#00f3ff] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-block mb-6">
              <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
                <span className="text-[#00f3ff] text-sm tracking-widest flex items-center gap-2 justify-center">
                  <TrendingUp className="w-4 h-4" />
                  🗃️ DATA HUB
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight font-bold">
              <span className="block bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
                UNIVERS RETRO GAMING
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Histoire, guides, actualités et culture gaming.
            </p>
            <p className="text-lg text-gray-400">
              Plongez dans l'âge d'or de l'arcade.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-mono text-[#00f3ff] mb-1 font-bold">{articles.length}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Articles</div>
              </div>
              <div className="w-px bg-cyan-500/20" />
              <div className="text-center">
                <div className="text-3xl font-mono text-[#ff00ff] mb-1 font-bold">12K</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Lecteurs</div>
              </div>
              <div className="w-px bg-cyan-500/20" />
              <div className="text-center">
                <div className="text-3xl font-mono text-yellow-400 mb-1 font-bold">8</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Contributeurs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters Section */}
      <section className="relative py-8 border-y border-cyan-500/20">
        <div className="container mx-auto px-4 relative z-10">
          {/* Terminal-style Search Bar */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00f3ff] font-mono flex items-center gap-2">
                <span className="text-xl">›</span>
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-mono transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg shadow-cyan-500/50 font-bold'
                    : 'bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/20 text-gray-400 hover:text-white hover:border-cyan-500/50'
                }`}
              >
                <span className="flex items-center gap-2 text-sm">
                  <Tag className="w-3 h-3" />
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'Tous' && !searchQuery && (
        <section className="relative py-12">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h2 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  ARTICLE À LA UNE
                </span>
              </h2>
            </div>

            <FeaturedCard article={featuredArticle} />
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl mb-8 font-bold">
            <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
              TOUS LES ARTICLES
            </span>
          </h2>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-400">Aucun article trouvé</p>
              <p className="text-gray-500 mt-2">Essayez une autre recherche ou catégorie</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Featured Card Component
function FeaturedCard({ article }: { article: BlogArticle }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10" />
      
      <div className="relative bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/30 group-hover:border-yellow-400/60 transition-all overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1f] to-transparent md:opacity-100 opacity-50" />
            
            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <div className="px-3 py-1 rounded-full bg-yellow-400 text-[#0a0a1f] text-xs uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-yellow-400/50 font-bold">
                <Zap className="w-3 h-3" />
                Featured
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>

            <h3 className="text-3xl mb-4 leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00f3ff] group-hover:to-[#ff00ff] group-hover:bg-clip-text transition-all font-bold">
              {article.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{article.date}</span>
              <a 
                href={`/blog-redesign/${article.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-[#00f3ff] hover:text-white border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all rounded-lg font-bold"
              >
                Lire l'article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Article Card Component
function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <a href={`/blog-redesign/${article.id}`} className="group relative w-full block">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
      
      <div className="relative h-full rounded-2xl overflow-hidden bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-400/60 transition-all">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1f]/80" />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full bg-[#0a0a1f]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-xs uppercase tracking-wider">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl mb-3 leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00f3ff] group-hover:to-[#ff00ff] group-hover:bg-clip-text transition-all font-bold">
            {article.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-cyan-500/10">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{article.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
}
