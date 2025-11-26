/**
 * BlogProgressBar - Neon progress bar en haut de page
 */

import { useEffect, useState } from 'react';

export default function BlogProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <div className="fixed top-0 left-0 right-0 h-1 bg-[#0a0a1f] z-[200]">
      <div 
        className="h-full bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] shadow-lg shadow-cyan-500/50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
