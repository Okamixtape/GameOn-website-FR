import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import CTAButton from '../common/CTAButton';
import { openInscriptionModal } from '../../../hooks/useInscriptionModal';

interface HeaderProps {
  currentPath?: string;
}

const NAV_ITEMS = [
  { label: 'Accueil', path: '/' },
  { label: 'Le Tournoi', path: '/tournament' },
  { label: 'Notre Histoire', path: '/about' },
  { label: 'Blog', path: '/blog' },
] as const;

export default function Header({ currentPath = '/' }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => 
    path === '/' ? currentPath === '/' : currentPath.startsWith(path);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* ── Header bar ── */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a1f]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl tracking-wider hover:opacity-80 transition-opacity">
            <span className="text-[#00f3ff]">PIXEL</span>{' '}
            <span className="text-[#ff00ff]">CLASH</span>
          </a>

          {/* Desktop nav — lg+ (1024px) */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`px-5 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white shadow-lg shadow-purple-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CTAButton variant="secondary" className="px-6 py-2 text-sm">
              S'inscrire
            </CTAButton>
          </div>

          {/* Hamburger — below lg */}
          <button 
            onClick={() => setOpen(true)}
            className="lg:hidden text-cyan-400 p-2"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      {/* Rendu hors du <header> pour éviter tout conflit de z-index */}
      {open && (
        <div
          className="fixed inset-0 z-[200] lg:hidden bg-[#0a0a1f]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          {/* Top bar — même dimensions que le header */}
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <a 
              href="/" 
              className="text-2xl tracking-wider"
              onClick={() => setOpen(false)}
            >
              <span className="text-[#00f3ff]">PIXEL</span>{' '}
              <span className="text-[#ff00ff]">CLASH</span>
            </a>
            <button 
              onClick={() => setOpen(false)}
              className="text-cyan-400 p-2"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Separator */}
          <div className="border-b border-white/5" />

          {/* Nav links — centré verticalement dans l'espace restant */}
          <div className="flex flex-col justify-between" style={{ height: 'calc(100dvh - 4rem)' }}>
            <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`w-full max-w-sm text-center py-4 rounded-xl text-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA bottom */}
            <div className="px-6 pb-8 flex justify-center">
              <CTAButton 
                variant="secondary" 
                onClick={() => { setOpen(false); setTimeout(openInscriptionModal, 100); }}
                className="w-full max-w-sm justify-center"
              >
                S'inscrire
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
