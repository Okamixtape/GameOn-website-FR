import { Clock, User, Trophy, TrendingUp, ArrowLeft, Share2, Bookmark, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from './components/ui/button';
import { useEffect, useState } from 'react';

export default function BlogArticle({ onBackClick }: { onBackClick: () => void }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');

  // Progress Bar Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'golden-age', label: 'L\'Âge d\'Or' },
    { id: 'arcade-boom', label: 'Le Boom des Arcades' },
    { id: 'iconic-games', label: 'Jeux Iconiques' },
    { id: 'cultural-impact', label: 'Impact Culturel' },
    { id: 'modern-legacy', label: 'L\'Héritage Moderne' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      {/* Neon Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#0a0a1f] z-[200]">
        <div 
          className="h-full bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] shadow-lg shadow-cyan-500/50 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

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
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1583634852966-130c15654305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFyY2FkZSUyMGdhbWluZyUyMG5lb258ZW58MXx8fHwxNzYzOTc0NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Retro arcade gaming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f]/70 via-[#0a0a1f]/80 to-[#0a0a1f]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <div className="max-w-4xl">
            {/* Back Button */}
            <Button 
              variant="ghost"
              className="mb-6 text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
              onClick={onBackClick}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Retour au Blog
            </Button>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md text-cyan-400 text-sm uppercase tracking-wider">
                Histoire
              </span>
              <span className="text-gray-400 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min de lecture
              </span>
              <span className="text-gray-400 text-sm">8 novembre 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
                L'ÂGE D'OR DE L'ARCADE :
              </span>
              <br />
              <span className="text-white">
                COMMENT LES ANNÉES 80 ONT RÉVOLUTIONNÉ LE GAMING
              </span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 leading-relaxed">
              Plongez dans l'histoire fascinante de l'arcade gaming des années 80-90. Découvrez comment Pac-Man, Space Invaders et Street Fighter ont créé une culture qui perdure encore aujourd'hui.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area with TOC */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sticky Table of Contents - HUD Style */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-24">
                <div className="p-6 rounded-2xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                  {/* HUD Header */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-cyan-500/20">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400 text-sm font-mono uppercase tracking-wider">System Status</span>
                  </div>

                  {/* Navigation */}
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg shadow-cyan-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-cyan-500/10'
                        }`}
                      >
                        <span className="text-xs text-gray-500 mr-2">{String(index + 1).padStart(2, '0')}</span>
                        {section.label}
                      </a>
                    ))}
                  </nav>

                  {/* Reading Stats */}
                  <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-cyan-400 font-mono">{Math.round(scrollProgress)}%</span>
                      </div>
                      <div className="h-1 bg-[#0a0a1f] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] transition-all"
                          style={{ width: `${scrollProgress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Share Actions */}
                  <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Partager</p>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center justify-center">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center justify-center">
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center justify-center">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center justify-center">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9">
              <div className="max-w-3xl mx-auto">
                {/* Introduction */}
                <section id="intro" className="mb-12">
                  <h2 className="text-3xl mb-4">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      Introduction
                    </span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Les années 1980 marquent un tournant décisif dans l'histoire du jeu vidéo. C'est l'époque où les salles d'arcade deviennent des lieux de rassemblement social, où les jeunes se retrouvent après l'école pour affronter des défis pixelisés et repousser leurs limites.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    De Space Invaders à Street Fighter II, ces jeux ont non seulement défini un genre, mais ont créé une culture entière qui influence encore aujourd'hui le développement de jeux vidéo modernes.
                  </p>
                </section>

                {/* Golden Age */}
                <section id="golden-age" className="mb-12">
                  <h2 className="text-3xl mb-4">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      L'Âge d'Or (1978-1983)
                    </span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tout commence en 1978 avec <strong className="text-white">Space Invaders</strong>, développé par Taito. Le jeu devient un phénomène mondial instantané, générant plus de 2 milliards de dollars de revenus et causant même une pénurie de pièces de 100 yens au Japon.
                  </p>
                  <div className="p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/20 my-6">
                    <p className="text-cyan-400 italic">
                      "Space Invaders n'était pas juste un jeu, c'était un phénomène culturel qui a transformé les salles d'arcade en destinations sociales." - Nolan Bushnell, fondateur d'Atari
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    En 1980, <strong className="text-white">Pac-Man</strong> fait son apparition et révolutionne le genre. Contrairement aux shoot'em ups violents de l'époque, Pac-Man propose un gameplay accessible et addictif qui attire un public plus large, notamment féminin.
                  </p>
                </section>

                {/* Arcade Boom */}
                <section id="arcade-boom" className="mb-12">
                  <h2 className="text-3xl mb-4">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      Le Boom des Arcades
                    </span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Entre 1980 et 1985, les salles d'arcade connaissent une croissance explosive. Aux États-Unis, l'industrie génère plus de 5 milliards de dollars par an, surpassant même l'industrie musicale et cinématographique combinées.
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong className="text-white">1981:</strong> Donkey Kong introduit Mario (alors appelé Jumpman) et popularise le genre platformer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong className="text-white">1982:</strong> Ms. Pac-Man devient le jeu d'arcade le plus vendu en Amérique du Nord</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong className="text-white">1983:</strong> Dragon's Lair repousse les limites techniques avec des animations LaserDisc</span>
                    </li>
                  </ul>
                </section>

                {/* Iconic Games */}
                <section id="iconic-games" className="mb-12">
                  <h2 className="text-3xl mb-4">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      Les Jeux Iconiques
                    </span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 rounded-xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-purple-500/30">
                      <h3 className="text-xl mb-2 text-[#ff00ff]">Street Fighter II (1991)</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Définit le genre du jeu de combat moderne avec ses combos, ses personnages variés et son système de gameplay profond.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/30">
                      <h3 className="text-xl mb-2 text-[#00f3ff]">Galaga (1981)</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Améliore la formule de Space Invaders avec des formations d'ennemis complexes et un système de capture de vaisseau.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Cultural Impact */}
                <section id="cultural-impact" className="mb-12">
                  <h2 className="text-3xl mb-4">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      L'Impact Culturel
                    </span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Les arcades des années 80 ont créé une culture sociale unique. Contrairement au gaming moderne souvent pratiqué en solitaire à la maison, les arcades étaient des espaces communautaires où les joueurs se rencontraient, partageaient des techniques et formaient des amitiés.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Les high scores affichés sur les bornes créaient une compétition féroce, poussant les joueurs à revenir encore et encore pour prouver leur talent. Cette culture compétitive a jeté les bases des esports modernes.
                  </p>
                </section>

                {/* Modern Legacy */}
                <section id="modern-legacy" className="mb-12">
                  <h2 className="text-3xl mb-4">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      L'Héritage Moderne
                    </span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    L'influence de l'âge d'or de l'arcade est omniprésente dans le gaming moderne. Les mécaniques de gameplay introduites dans les années 80 - le scoring, les power-ups, les boss de fin de niveau - sont devenues des standards de l'industrie.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Le retour récent de l'esthétique pixel art dans les jeux indépendants témoigne de la nostalgie collective pour cette époque. Des titres comme <em className="text-cyan-400">Celeste</em>, <em className="text-cyan-400">Shovel Knight</em> et <em className="text-cyan-400">Undertale</em> prouvent que les principes du game design arcade restent pertinents et engageants.
                  </p>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                  <h2 className="text-3xl mb-4">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      Conclusion
                    </span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Les années 80 ont posé les fondations du jeu vidéo tel que nous le connaissons aujourd'hui. Plus qu'une simple période nostalgique, l'âge d'or de l'arcade représente l'innovation, la créativité et la passion d'une industrie naissante qui osait tout essayer.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    À PIXEL CLASH Championship, nous célébrons cet héritage en offrant aux joueurs modernes l'opportunité de revivre la magie de cette époque tout en créant de nouveaux souvenirs. Parce que le retro gaming n'est pas une question de nostalgie - c'est une célébration intemporelle de ce qui rend les jeux vidéo si spéciaux.
                  </p>
                </section>

                {/* CTA Box */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#ff00ff]/10 to-[#00f3ff]/10 border border-cyan-500/30 backdrop-blur-xl">
                  <h3 className="text-2xl mb-4">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      Rejoignez PIXEL CLASH Championship 2026
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Vivez l'expérience arcade ultime et écrivez votre propre légende gaming.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white border-0 shadow-lg shadow-purple-500/50"
                  >
                    S'inscrire au Tournoi
                    <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Author Card - Player Profile Style */}
      <section className="relative py-12 border-t border-cyan-500/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00f3ff] to-[#ff00ff] p-1">
                    <div className="w-full h-full rounded-xl bg-[#0a0a1f] flex items-center justify-center">
                      <User className="w-12 h-12 text-cyan-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/50">
                    <Trophy className="w-4 h-4 text-[#0a0a1f]" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl text-white">Thomas "RetroKing" Dubois</h3>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs uppercase tracking-wider">
                      Rédacteur En Chef
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Passionné de retro gaming depuis 1987. Collectionneur de bornes d'arcade et expert en histoire du jeu vidéo. Champion PIXEL CLASH 2023.
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-mono text-cyan-400">42</div>
                      <div className="text-xs text-gray-500 uppercase">Articles</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-[#ff00ff]">15K</div>
                      <div className="text-xs text-gray-500 uppercase">Lecteurs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-yellow-400">Level 8</div>
                      <div className="text-xs text-gray-500 uppercase">Expert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}