/**
 * BlogArticlePage - Conforme Figma Make
 * 
 * Features :
 * 1. Progress bar néon (scroll progress)
 * 2. Hero avec image background
 * 3. TOC Sidebar sticky (HUD style)
 * 4. Article content (prose)
 * 5. Author card (player profile style)
 */

import { Clock, ArrowLeft, Twitter, Facebook, Linkedin, Bookmark } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BlogArticlePageProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export default function BlogArticlePage({ 
  title, 
  excerpt, 
  category, 
  date, 
  readTime, 
  image,
  content 
}: BlogArticlePageProps) {
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
    { id: 'content', label: 'Contenu Principal' },
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
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f]/70 via-[#0a0a1f]/80 to-[#0a0a1f]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <div className="max-w-4xl">
            {/* Back Button */}
            <a 
              href="/blog-redesign"
              className="inline-flex items-center gap-2 mb-6 px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all rounded-lg font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au Blog
            </a>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md text-cyan-400 text-sm uppercase tracking-wider">
                {category}
              </span>
              <span className="text-gray-400 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readTime} de lecture
              </span>
              <span className="text-gray-400 text-sm">{date}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight font-bold">
              <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 leading-relaxed">
              {excerpt}
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
                <div 
                  id="content"
                  className="prose prose-invert prose-cyan max-w-none
                    prose-headings:text-text-light
                    prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-12 prose-h2:bg-gradient-to-r prose-h2:from-[#00f3ff] prose-h2:to-[#ff00ff] prose-h2:bg-clip-text prose-h2:text-transparent
                    prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-8
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                    prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
                    prose-strong:text-white prose-strong:font-bold
                    prose-ul:text-gray-300 prose-ul:mb-4
                    prose-li:mb-2
                    prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400 prose-blockquote:bg-cyan-500/5 prose-blockquote:py-2 prose-blockquote:rounded-r-lg
                    prose-code:text-cyan-400 prose-code:bg-[#0a0a1f] prose-code:px-2 prose-code:py-1 prose-code:rounded
                  "
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* CTA Box */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#ff00ff]/10 to-[#00f3ff]/10 border border-cyan-500/30 backdrop-blur-xl">
                  <h3 className="text-2xl mb-4 font-bold">
                    <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                      Rejoignez PIXEL CLASH Championship 2026
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Vivez l'expérience arcade ultime et écrivez votre propre légende gaming.
                  </p>
                  <a 
                    href="/tournament-redesign"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white border-0 shadow-lg shadow-purple-500/50 rounded-lg font-bold transition-all"
                  >
                    S'inscrire au Tournoi
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
