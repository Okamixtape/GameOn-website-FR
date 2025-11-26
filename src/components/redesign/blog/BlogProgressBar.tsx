/**
 * BlogProgressBar - Neon progress bar en haut de page
 */

import { useEffect, useState } from 'react';

export default function BlogProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <div className="fixed top-0 left-0 right-0 h-1 bg-[#0a0a1f] z-[200]">
      <div 
        className="h-full bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] shadow-lg shadow-cyan-500/50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
