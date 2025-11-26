/**
 * Data Layer - Homepage Redesign
 * 
 * Toutes les données statiques de la homepage extraites de App.tsx
 * pour faciliter la maintenance et l'internationalisation future
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface HeroData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  date: {
    label: string;
    value: string;
  };
  location: {
    label: string;
    value: string;
  };
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
  socialProof: {
    registrations: string;
    cashprize: string;
    urgency: string;
  };
  image: {
    src: string;
    srcset?: string;
    alt: string;
  };
}

export interface FeatureCard {
  id: string;
  icon: string; // Nom icône Lucide React
  iconColor: string; // Gradient Tailwind
  title: string;
  description: string;
}

export interface SectionHeader {
  eyebrow: string;
  title: string;
  subtitle: string;
}

// ============================================================================
// HERO DATA
// ============================================================================

export const heroData: HeroData = {
  eyebrow: "PIXEL CLASH PRESENTS",
  title: "CHAMPIONNAT RETROGAMING",
  titleHighlight: "TOURNOI JEUX ARCADE 2026",
  date: {
    label: "Date",
    value: "15-17 Juin 2026",
  },
  location: {
    label: "Lieu",
    value: "Paris La Défense Arena",
  },
  ctaPrimary: {
    text: "S'INSCRIRE AU TOURNOI",
    href: "/tournament",
  },
  ctaSecondary: {
    text: "Voir le Teaser",
    href: "#teaser",
  },
  socialProof: {
    registrations: "487 inscrits",
    cashprize: "15,000€ cashprize",
    urgency: "Places limitées !",
  },
  image: {
    src: "/images/redesign/hero-home-800.jpg",
    srcset: "/images/redesign/hero-home-400.jpg 400w, /images/redesign/hero-home-800.jpg 800w, /images/redesign/hero-home-1200.jpg 1200w",
    alt: "Setup gaming rétro avec consoles vintage"
  },
};

// ============================================================================
// FEATURES SECTION
// ============================================================================

export const featuresHeader: SectionHeader = {
  eyebrow: "🎯 POURQUOI PARTICIPER",
  title: "REJOIGNEZ LE TOURNOI RETROGAMING",
  subtitle: "4 raisons de participer au plus grand championnat jeux arcade de France",
};

export const featuresData: FeatureCard[] = [
  {
    id: "cashprize",
    icon: "Trophy",
    iconColor: "from-yellow-400 to-yellow-600",
    title: "15,000€ de Cashprize",
    description:
      "Remportez la 1ère place. Un prize pool qui récompensera le talent de tous les joueurs.",
  },
  {
    id: "community",
    icon: "Users",
    iconColor: "from-cyan-400 to-cyan-600",
    title: "Communauté Passionnée",
    description:
      "Rencontrez 125 joueurs qui partagent votre amour pour le retro gaming.",
  },
  {
    id: "ambiance",
    icon: "Gamepad2",
    iconColor: "from-purple-400 to-purple-600",
    title: "Ambiance Arcade",
    description:
      "Plongez dans une atmosphère authentique avec néons, bornes d'arcade et musique 16bit.",
  },
  {
    id: "experience",
    icon: "Star",
    iconColor: "from-pink-400 to-pink-600",
    title: "Expérience Unique",
    description:
      "3 jours inoubliables de compétitions, rencontres et célébration du gaming classique.",
  },
];

export const featuresCTA = {
  text: "Je m'inscris maintenant",
  href: "/tournament",
  note: "Places limitées • Inscription gratuite",
};
