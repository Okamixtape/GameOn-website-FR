/**
 * BlogTOC - Table of Contents Sidebar (HUD Style)
 * Sticky sidebar avec progress tracking et share buttons
 * Détecte automatiquement les sections H2 du contenu
 */

import { Twitter, Facebook, Linkedin, Bookmark } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

export default function BlogTOC() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [sections, setSections] = useState<Section[]>([]);

  // Détecter les sections H2 au montage
  useEffect(() => {
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
      const headings = contentDiv.querySelectorAll('h2');
      const detectedSections: Section[] = Array.from(headings).map((heading, index) => {
        // Créer un ID si pas présent
        if (!heading.id) {
          const id = heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${index}`;
          heading.id = id;
        }
        return {
          id: heading.id,
          label: heading.textContent || `Section ${index + 1}`
        };
      });
      setSections(detectedSections);
      if (detectedSections.length > 0) {
        setActiveSection(detectedSections[0].id);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculer par rapport à la fin de l'article, pas la fin de la page
      const articleContent = document.getElementById('content');
      if (!articleContent) return;

      const articleBottom = articleContent.getBoundingClientRect().bottom + window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = articleBottom - viewportHeight;
      
      // Progress = 100% quand on atteint la fin de l'article
      const progress = Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100));
      setScrollProgress(progress);
    };

    // Calculer au montage
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
  );
}
