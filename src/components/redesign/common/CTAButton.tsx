/**
 * CTAButton - Composant unifié pour tous les boutons d'inscription
 * 
 * 3 variants avec hiérarchie visuelle claire :
 * - primary : Hero, FinalCTA (impact maximum)
 * - secondary : Features, Header (impact élevé)
 * - tertiary : Blog, FAQ, Glossaire (impact moyen)
 * 
 * @performance Composant réutilisable, maintenance simplifiée
 */

import { ArrowRight } from 'lucide-react';
import { openInscriptionModal } from '../../../hooks/useInscriptionModal';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
}

export default function CTAButton({ 
  variant = 'secondary', 
  children, 
  onClick,
  className = '',
  showIcon = true
}: CTAButtonProps) {
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openInscriptionModal();
    }
  };

  const baseStyles = "inline-flex items-center gap-2 font-bold text-white rounded-lg transition-all";
  
  const variantStyles = {
    primary: `px-10 py-5 text-lg
      bg-gradient-to-r from-[#ff00ff] via-[#ff0080] to-[#ff00ff]
      hover:from-[#ff00ff]/90 hover:to-[#ff00ff]/70
      shadow-2xl shadow-pink-500/60 hover:shadow-pink-500/80
      animate-pulse hover:animate-none
      relative group`,
    
    secondary: `px-8 py-4
      bg-gradient-to-r from-[#ff00ff] to-[#00f3ff]
      hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90
      shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70`,
    
    tertiary: `px-6 py-3
      bg-gradient-to-r from-[#ff00ff] to-[#00f3ff]
      hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90
      border border-cyan-500/30
      hover:shadow-lg hover:shadow-purple-500/30`
  };
  
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className={variant === 'primary' ? 'relative z-10 flex items-center gap-2' : 'flex items-center gap-2'}>
        {children}
        {showIcon && <ArrowRight className={variant === 'primary' ? 'w-5 h-5' : 'w-4 h-4'} />}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
      )}
    </button>
  );
}
