/**
 * BlogProgressBar - Neon progress bar en haut de page
 */

import { useEffect, useState } from 'react';

export default function BlogProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculer par rapport au début et à la fin de l'article
      const articleContent = document.getElementById('content');
      if (!articleContent) return;

      // Début : top de l'article
      const articleTop = articleContent.getBoundingClientRect().top + window.scrollY;
      // Fin : bottom de l'article
      const articleBottom = articleContent.getBoundingClientRect().bottom + window.scrollY;
      
      const viewportHeight = window.innerHeight;
      
      // 0% quand le début de l'article atteint le haut du viewport
      // 100% quand la fin de l'article atteint le bas du viewport
      const scrollStart = articleTop;
      const scrollEnd = articleBottom - viewportHeight;
      const scrollRange = scrollEnd - scrollStart;
      
      const progress = Math.min(100, Math.max(0, ((window.scrollY - scrollStart) / scrollRange) * 100));
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
