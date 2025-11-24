import { Search, Tag, Clock, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { Button } from './components/ui/button';
import { useState } from 'react';

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const articles: BlogArticle[] = [
  {
    id: 1,
    title: "L'Âge d'Or de l'Arcade : Comment les Années 80 ont Révolutionné le Gaming",
    excerpt: "Plongez dans l'histoire fascinante de l'arcade gaming des années 80-90. Découvrez comment Pac-Man, Space Invaders et Street Fighter ont créé une culture qui perdure encore aujourd'hui.",
    category: "Histoire",
    date: "8 novembre 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1583634852966-130c15654305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFyY2FkZSUyMGdhbWluZyUyMG5lb258ZW58MXx8fHwxNzYzOTc0NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    id: 2,
    title: "Débuter en Retro Gaming : Le Guide Complet 2026",
    excerpt: "Console idéale, émulation, jeux cultes : tout ce qu'il faut savoir pour débuter en retro gaming. Guide pratique avec conseils d'achat et sélection de jeux essentiels.",
    category: "Retro-Guide",
    date: "4 novembre 2025",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NjM4ODI0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Top 10 des Bornes d'Arcade les Plus Mythiques de Tous les Temps",
    excerpt: "De Donkey Kong à Street Fighter II, découvrez les bornes d'arcade qui ont marqué l'histoire du jeu vidéo et continuent d'inspirer les développeurs aujourd'hui.",
    category: "Top List",
    date: "29 octobre 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1635187834534-d1fa994fcabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNhZGUlMjBtYWNoaW5lJTIwdmludGFnZXxlbnwxfHx8fDE3NjM5NzQ2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "La Renaissance du Pixel Art : Pourquoi Cette Esthétique Domine en 2026",
    excerpt: "Analyse de la tendance pixel art dans les jeux indépendants modernes. Comment les développeurs utilisent les contraintes du retro pour créer des expériences uniques.",
    category: "Analyse",
    date: "22 octobre 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1688498410298-c319c5cf29a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMHNldHVwfGVufDF8fHx8MTc2Mzk3NDY0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Interview : Les Vétérans de PIXEL CLASH Partagent Leurs Secrets",
    excerpt: "Rencontre exclusive avec trois champions du tournoi. Ils partagent leurs stratégies, leurs souvenirs, et leurs conseils pour les nouveaux joueurs.",
    category: "Interview",
    date: "15 octobre 2025",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1583634852966-130c15654305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFyY2FkZSUyMGdhbWluZyUyMG5lb258ZW58MXx8fHwxNzYzOTc0NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "Émulation vs Console Originale : Le Débat qui Divise la Communauté",
    excerpt: "Authenticité versus praticité : deux visions du retro gaming s'affrontent. Nous explorons les arguments des deux camps avec objectivité.",
    category: "Débat",
    date: "8 octobre 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NjM4ODI0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const categories = ["Tous", "Histoire", "Retro-Guide", "Top List", "Analyse", "Interview", "Débat"];

export default function BlogListing({ onArticleClick }: { onArticleClick: () => void }) {
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
                <span className="text-[#00f3ff] text-sm tracking-widest flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  🗃️ DATA HUB
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
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
                <div className="text-3xl font-mono text-[#00f3ff] mb-1">127</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Articles</div>
              </div>
              <div className="w-px bg-cyan-500/20" />
              <div className="text-center">
                <div className="text-3xl font-mono text-[#ff00ff] mb-1">12K</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Lecteurs</div>
              </div>
              <div className="w-px bg-cyan-500/20" />
              <div className="text-center">
                <div className="text-3xl font-mono text-yellow-400 mb-1">8</div>
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
                    ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg shadow-cyan-500/50'
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
              <h2 className="text-2xl">
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
          <h2 className="text-2xl mb-8">
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
                <ArticleCard key={article.id} article={article} onArticleClick={onArticleClick} />
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
              <div className="px-3 py-1 rounded-full bg-yellow-400 text-[#0a0a1f] text-xs uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-yellow-400/50">
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

            <h3 className="text-3xl mb-4 leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00f3ff] group-hover:to-[#ff00ff] group-hover:bg-clip-text transition-all">
              {article.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{article.date}</span>
              <Button 
                variant="ghost"
                className="text-[#00f3ff] hover:text-white border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all group/btn"
              >
                Lire l'article
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Article Card Component
function ArticleCard({ article, onArticleClick }: { article: BlogArticle, onArticleClick: () => void }) {
  return (
    <button onClick={onArticleClick} className="group relative w-full text-left">
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
          <h3 className="text-xl mb-3 leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00f3ff] group-hover:to-[#ff00ff] group-hover:bg-clip-text transition-all">
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
    </button>
  );
}