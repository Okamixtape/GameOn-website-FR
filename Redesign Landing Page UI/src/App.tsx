import { ImageWithFallback } from './components/figma/ImageWithFallback';
import heroImage from 'figma:asset/6542b6378f264f7ce825d8efe6376de84525fe91.png';
import { Trophy, Users, Gamepad2, Star, ArrowRight, Github, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from './components/ui/button';
import { useState } from 'react';
import TournamentDetails from './TournamentDetails';
import AboutUs from './AboutUs';
import BlogListing from './BlogListing';
import BlogArticle from './BlogArticle';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'tournament' | 'about' | 'blog' | 'article'>('home');

  return (
    <>
      {/* Full Header - Fixed at top */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a1f]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-2xl tracking-wider hover:opacity-80 transition-opacity"
            >
              <span className="text-[#00f3ff]">PIXEL</span>{' '}
              <span className="text-[#ff00ff]">CLASH</span>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-5 py-2 rounded-lg transition-all ${
                  currentPage === 'home'
                    ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg shadow-cyan-500/50'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Accueil
              </button>
              <button
                onClick={() => setCurrentPage('tournament')}
                className={`px-5 py-2 rounded-lg transition-all ${
                  currentPage === 'tournament'
                    ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg shadow-pink-500/50'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Le Tournoi
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`px-5 py-2 rounded-lg transition-all ${
                  currentPage === 'about'
                    ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Notre Histoire
              </button>
              <button
                onClick={() => setCurrentPage('blog')}
                className={`px-5 py-2 rounded-lg transition-all ${
                  currentPage === 'blog' || currentPage === 'article'
                    ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg shadow-cyan-500/50'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Blog
              </button>
            </nav>

            {/* CTA Button */}
            <Button 
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white border-0 shadow-lg shadow-purple-500/40"
            >
              S'inscrire
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-cyan-400">
              <Gamepad2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="pt-20">
        {currentPage === 'home' ? <HomePage /> : 
         currentPage === 'tournament' ? <TournamentDetails /> : 
         currentPage === 'about' ? <AboutUs /> :
         currentPage === 'blog' ? <BlogListing onArticleClick={() => setCurrentPage('article')} /> :
         <BlogArticle onBackClick={() => setCurrentPage('blog')} />}
      </div>
    </>
  );
}

function HomePage() {
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
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={heroImage} 
            alt="Retro gaming setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1f] via-[#0a0a1f]/95 to-[#0a0a1f]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1f]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow - Brand Presentation */}
            <div className="inline-block mb-4">
              <span className="text-[#ff00ff] tracking-widest text-sm uppercase">
                PIXEL CLASH PRESENTS
              </span>
            </div>

            {/* Main H1 - SEO Optimized */}
            <h1 className="mb-8">
              <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight mb-2 text-white leading-tight">
                CHAMPIONNAT
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
                  RÉTRO GAMING 2026
                </span>
              </span>
            </h1>

            {/* Date & Location Badges - Critical Info Above Fold */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-5 py-3 rounded-xl bg-[#0a0a1f]/70 border border-cyan-500/40 backdrop-blur-lg flex items-center gap-3 shadow-lg shadow-cyan-500/20">
                <Calendar className="w-5 h-5 text-[#00f3ff]" />
                <div>
                  <div className="text-xs text-gray-400 uppercase">Date</div>
                  <div className="text-white">15-17 Juin 2026</div>
                </div>
              </div>
              <div className="px-5 py-3 rounded-xl bg-[#0a0a1f]/70 border border-pink-500/40 backdrop-blur-lg flex items-center gap-3 shadow-lg shadow-pink-500/20">
                <MapPin className="w-5 h-5 text-[#ff00ff]" />
                <div>
                  <div className="text-xs text-gray-400 uppercase">Lieu</div>
                  <div className="text-white">Paris La Défense Arena</div>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mb-4">
              <Button 
                size="lg"
                className="text-lg px-8 py-7 bg-gradient-to-r from-[#ff00ff] via-[#ff0080] to-[#ff00ff] hover:from-[#ff00ff]/90 hover:to-[#ff00ff]/70 text-white border-0 shadow-2xl shadow-pink-500/60 hover:shadow-pink-500/80 transition-all animate-pulse hover:animate-none relative group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  S'INSCRIRE AU TOURNOI
                  <ArrowRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity rounded-md" />
              </Button>
            </div>

            {/* Combined Badge - Social Proof + Cashprize + Urgency */}
            <div className="inline-flex flex-wrap items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500/10 via-yellow-500/10 to-red-500/10 border border-green-500/30 backdrop-blur-md mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">✓ 487 inscrits</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold">15,000€ cashprize</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm">Places limitées !</span>
              </div>
            </div>

            {/* Secondary CTA */}
            <div>
              <Button 
                size="lg"
                variant="ghost"
                className="bg-transparent border border-white/30 text-white hover:bg-white/5 hover:border-white/50 transition-all"
              >
                Voir le Teaser
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0a2e] to-[#0a0a1f]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
                <span className="text-[#00f3ff] text-sm">🎯 POURQUOI PARTICIPER</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                REJOIGNEZ L'AVENTURE
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              4 raisons de ne pas manquer PIXEL CLASH Championship 2026
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative h-full p-6 rounded-2xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">15,000€ de Cashprize</h3>
                <p className="text-gray-400">
                  Remportez la 1ère place.
                </p>
                <p className="text-gray-400">
                  Un prize pool qui récompensera le talent de tous les joueurs.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative h-full p-6 rounded-2xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_25px_rgba(255,0,255,0.3)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">Communauté Passionnée</h3>
                <p className="text-gray-400">
                  Rencontrez 125 joueurs qui partagent votre amour pour le retro gaming.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative h-full p-6 rounded-2xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-purple-500/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">Ambiance Arcade</h3>
                <p className="text-gray-400">
                  Plongez dans une atmosphère authentique avec néons, bornes d'arcade en musiue 16bit.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative h-full p-6 rounded-2xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_25px_rgba(255,0,255,0.3)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">Expérience Unique</h3>
                <p className="text-gray-400">
                  3 jours inoubliables de compétitions, rencontres et célébration du gaming classique.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white border-0 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
            >
              Je m'inscris maintenant
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <p className="text-gray-500 text-sm mt-4">Places limitées • Inscription gratuite</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl tracking-wider mb-4">
                <span className="text-[#00f3ff]">PIXEL</span>{' '}
                <span className="text-[#ff00ff]">CLASH</span>
              </div>
              <p className="text-gray-400 mb-2">Le championnat retro gaming</p>
              <p className="text-gray-400 mb-2">qui célèbre les racines du jeu vidéo.</p>
              <p className="text-gray-500 text-sm">© 2025 Tous droits réservés.</p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[#00f3ff] mb-4">NAVIGATION</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Le tournoi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Notre histoire</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-[#ff00ff] mb-4">LÉGAL</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CGU</a></li>
              </ul>
            </div>
          </div>

          {/* Developer Info */}
          <div className="pt-8 border-t border-cyan-500/20 text-center">
            <p className="text-lg mb-1">
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                Designed & Coded by Loup Aubour
              </span>
              <span className="ml-2">⚡️</span>
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Projet Portfolio • Développeur Full-Stack
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-transparent border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50"
              >
                <Users className="mr-2 w-4 h-4" />
                À propos du développeur
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-transparent border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50"
              >
                <Github className="mr-2 w-4 h-4" />
                GitHub
              </Button>
            </div>
            <p className="text-gray-600 text-xs mt-4">
              Lancement PRO : Ce projet est une démonstration technique et n'est pas lié à un vrai événement.
            </p>
            <p className="text-gray-600 text-xs">
              Contactez-moi pour vos projets de développement technique.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}