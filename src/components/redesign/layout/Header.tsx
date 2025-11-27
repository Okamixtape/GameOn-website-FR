import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', path: '/', shadowColor: 'shadow-cyan-500/50' },
    { label: 'Le Tournoi', path: '/tournament', shadowColor: 'shadow-pink-500/50' },
    { label: 'Notre Histoire', path: '/about', shadowColor: 'shadow-purple-500/50' },
    { label: 'Blog', path: '/blog', shadowColor: 'shadow-cyan-500/50' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a1f]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/"
            className="text-2xl tracking-wider hover:opacity-80 transition-opacity"
          >
            <span className="text-[#00f3ff]">PIXEL</span>{' '}
            <span className="text-[#ff00ff]">CLASH</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`px-5 py-2 rounded-lg transition-all ${
                  isActive(item.path)
                    ? `bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg ${item.shadowColor}`
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a 
            href="/inscription"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 text-sm bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white rounded-lg shadow-lg shadow-purple-500/40 transition-all"
          >
            S'inscrire
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cyan-400 p-2 hover:text-cyan-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[90] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0a0a1f] border-l border-cyan-500/20 z-[95] md:hidden transform transition-transform duration-300">
            <div className="flex flex-col h-full p-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <a 
                  href="/"
                  className="text-xl tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-[#00f3ff]">PIXEL</span>{' '}
                  <span className="text-[#ff00ff]">CLASH</span>
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-4 flex-1">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-5 py-3 rounded-lg transition-all text-center ${
                      isActive(item.path)
                        ? `bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg ${item.shadowColor}`
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-white/10">
                <a 
                  href="/inscription"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white rounded-lg shadow-lg shadow-purple-500/40 transition-all"
                >
                  S'inscrire
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
