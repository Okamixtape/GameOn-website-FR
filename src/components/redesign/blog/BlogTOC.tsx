/**
 * BlogTOC - Table of Contents Sidebar (HUD Style)
 * Sticky sidebar avec progress tracking et share buttons
 */

import { Twitter, Facebook, Linkedin, Bookmark } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'intro', label: 'Introduction' },
  { id: 'content', label: 'Contenu Principal' },
  { id: 'conclusion', label: 'Conclusion' }
];

export default function BlogTOC() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

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
