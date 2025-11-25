/**
 * Data Layer - About Page Redesign
 * 
 * Contenu statique pour la page À Propos
 * Architecture Astro-First (0 KB JS)
 */

export const aboutHero = {
  eyebrow: "À PROPOS",
  title: "L'Événement Rétro Gaming",
  titleHighlight: "Nouvelle Génération",
  description: "PIXEL CLASH réinvente les compétitions rétro gaming en combinant nostalgie des années 80-90 et production événementielle moderne. Une expérience unique pour les passionnés.",
  image: {
    src: "/images/redesign/hero-about-800.jpg",
    srcset: "/images/redesign/hero-about-400.jpg 400w, /images/redesign/hero-about-800.jpg 800w, /images/redesign/hero-about-1200.jpg 1200w",
    alt: "Arcade rétro gaming ambiance néon"
  }
};

export const aboutMission = {
  title: "Notre Mission",
  subtitle: "Préserver et célébrer l'héritage du gaming",
  cards: [
    {
      id: "passion",
      title: "Passion Rétro",
      description: "Rassembler une communauté de passionnés autour des jeux qui ont marqué l'histoire du gaming.",
      icon: "Heart",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: "competition",
      title: "Compétition Fair-Play",
      description: "Offrir un cadre compétitif professionnel avec des règles claires et un arbitrage impartial.",
      icon: "Trophy",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: "community",
      title: "Communauté Inclusive",
      description: "Créer un espace accueillant pour tous les niveaux, du débutant au joueur confirmé.",
      icon: "Users",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: "innovation",
      title: "Innovation Technique",
      description: "Utiliser les technologies modernes pour sublimer l'expérience rétro gaming.",
      icon: "Zap",
      gradient: "from-purple-500 to-pink-500"
    }
  ]
};

export const aboutValues = {
  title: "Nos Valeurs",
  items: [
    {
      id: "authenticity",
      value: "Authenticité",
      description: "Matériel d'époque, respect des versions originales, pas d'émulation."
    },
    {
      id: "excellence",
      value: "Excellence",
      description: "Production événementielle de qualité, streaming professionnel, cashprize attractif."
    },
    {
      id: "respect",
      value: "Respect",
      description: "Fair-play, code de conduite strict, tolérance zéro pour le toxique."
    },
    {
      id: "fun",
      value: "Fun",
      description: "Avant tout, le plaisir de jouer et de partager sa passion."
    }
  ]
};

export const aboutStats = {
  title: "PIXEL CLASH en Chiffres",
  stats: [
    {
      id: "players",
      value: "125+",
      label: "Joueurs Inscrits",
      icon: "Users"
    },
    {
      id: "games",
      value: "12",
      label: "Jeux Iconiques",
      icon: "Gamepad2"
    },
    {
      id: "prize",
      value: "15K€",
      label: "Cashprize Total",
      icon: "Trophy"
    },
    {
      id: "days",
      value: "3",
      label: "Jours d'Événement",
      icon: "Calendar"
    }
  ]
};

export const aboutCTA = {
  title: "Prêt à Rejoindre l'Aventure ?",
  description: "Inscrivez-vous dès maintenant et faites partie de l'histoire du rétro gaming compétitif.",
  primaryButton: {
    text: "S'inscrire Maintenant",
    href: "/details"
  },
  secondaryButton: {
    text: "Voir le Programme",
    href: "/tournament-redesign"
  }
};
