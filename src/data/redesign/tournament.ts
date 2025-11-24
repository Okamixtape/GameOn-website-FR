import { Trophy, Gamepad2, Users, Shield, Zap, CheckCircle2, Star, Target, Award, Swords, Crown } from 'lucide-react';

// ===========================
// HERO SECTION DATA
// ===========================
export const heroData = {
  eyebrow: 'MISSION BRIEFING',
  title: 'LE TOURNOI',
  subtitle: 'Format, récompenses et règlement du championnat',
  quickStats: [
    {
      label: '125 Slots',
      color: 'cyan',
      borderColor: 'border-cyan-500/40',
      textColor: 'text-[#00f3ff]',
    },
    {
      label: '€15,000 Prize Pool',
      color: 'yellow',
      borderColor: 'border-yellow-500/40',
      textColor: 'text-yellow-400',
    },
    {
      label: '3 Stages',
      color: 'pink',
      borderColor: 'border-pink-500/40',
      textColor: 'text-[#ff00ff]',
    },
  ],
};

// ===========================
// TOURNAMENT FORMAT DATA
// ===========================
export const tournamentStages = [
  {
    id: 1,
    number: 1,
    title: 'Qualifications',
    icon: Target,
    color: 'cyan',
    badge: {
      icon: Zap,
      text: 'En ligne',
    },
    description: 'Phase de sélection en ligne. Les 32 meilleurs joueurs se qualifient pour la phase suivante.',
    details: [
      '125 joueurs maximum',
      'Format Swiss rounds',
      'Top 32 qualifiés',
    ],
    gradient: {
      from: 'from-cyan-400',
      to: 'to-cyan-600',
    },
    borderColor: 'border-cyan-500/50',
    hoverBorder: 'hover:border-cyan-500',
    shadowColor: 'shadow-cyan-500/50',
    textColor: 'text-cyan-400',
    checkColor: 'text-cyan-400',
  },
  {
    id: 2,
    number: 2,
    title: 'Playoffs',
    icon: Swords,
    color: 'purple',
    badge: {
      icon: Gamepad2,
      text: 'Double élimination',
    },
    description: 'Les 32 qualifiés s\'affrontent en bracket double élimination. Les 3 finalistes émergent.',
    details: [
      '32 joueurs qualifiés',
      'Format BO3 (Best of 3)',
      'Top 3 en finale',
    ],
    gradient: {
      from: 'from-purple-400',
      to: 'to-purple-600',
    },
    borderColor: 'border-purple-500/50',
    hoverBorder: 'hover:border-purple-500',
    shadowColor: 'shadow-purple-500/50',
    textColor: 'text-purple-400',
    checkColor: 'text-purple-400',
  },
  {
    id: 3,
    number: 3,
    title: 'Grande Finale',
    icon: Crown,
    color: 'pink',
    badge: {
      icon: Star,
      text: 'En direct • Live',
    },
    description: 'Finale en présentiel à Paris La Défense Arena. Les 3 finalistes s\'affrontent sur scène devant le public.',
    details: [
      '3 finalistes en direct',
      'Format BO5 (Best of 5)',
      '€15,000 distribués',
    ],
    gradient: {
      from: 'from-pink-400',
      to: 'to-pink-600',
    },
    borderColor: 'border-pink-500/50',
    hoverBorder: 'hover:border-pink-500',
    shadowColor: 'shadow-pink-500/50',
    textColor: 'text-pink-400',
    checkColor: 'text-pink-400',
  },
];

// ===========================
// PRIZE POOL DATA
// ===========================
export const prizePool = {
  total: '€15,000',
  podium: [
    {
      id: 2,
      position: 2,
      rank: '2ème Place',
      emoji: '🥈',
      prize: '€5,000',
      color: 'gray',
      gradient: {
        from: 'from-gray-300',
        to: 'to-gray-500',
      },
      borderColor: 'border-gray-400/50',
      hoverBorder: 'hover:border-gray-400',
      textColor: 'text-gray-300',
      shadowColor: 'shadow-gray-500/50',
      checkColor: 'text-gray-400',
      icon: Award,
      extras: [
        'Trophée Argent',
        'Pack Goodies Premium',
      ],
      mdOffset: 'md:mb-8',
    },
    {
      id: 1,
      position: 1,
      rank: 'CHAMPION',
      rankSubtitle: '1ère Place',
      emoji: '🥇',
      prize: '€7,500',
      prizeLabel: 'Grand Prize',
      color: 'yellow',
      gradient: {
        from: 'from-yellow-300',
        to: 'to-yellow-600',
      },
      borderColor: 'border-yellow-400/70',
      hoverBorder: 'hover:border-yellow-400',
      textColor: 'text-yellow-400',
      shadowColor: 'shadow-yellow-500/60',
      checkColor: 'text-yellow-400',
      icon: Crown,
      extras: [
        'Trophée Or + Médaille',
        'Pack Goodies Collector',
        'Interview exclusive',
      ],
      isWinner: true,
    },
    {
      id: 3,
      position: 3,
      rank: '3ème Place',
      emoji: '🥉',
      prize: '€2,500',
      color: 'orange',
      gradient: {
        from: 'from-orange-400',
        to: 'to-orange-700',
      },
      borderColor: 'border-orange-600/50',
      hoverBorder: 'hover:border-orange-600',
      textColor: 'text-orange-400',
      shadowColor: 'shadow-orange-600/50',
      checkColor: 'text-orange-600',
      icon: Award,
      extras: [
        'Trophée Bronze',
        'Pack Goodies',
      ],
      mdOffset: 'md:mb-8',
    },
  ],
};

// ===========================
// RULES DATA
// ===========================
export const rules = [
  {
    id: 1,
    icon: Gamepad2,
    title: 'Matériel Fourni',
    description: 'Consoles et manettes rétro authentiques fournies sur place. Aucun matériel personnel requis.',
    color: 'cyan',
    gradient: {
      from: 'from-cyan-400',
      to: 'to-cyan-600',
    },
    borderColor: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/60',
    textColor: 'text-cyan-400',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Fair-Play Obligatoire',
    description: 'Tout comportement antisportif ou tricherie entraînera une disqualification immédiate.',
    color: 'pink',
    gradient: {
      from: 'from-pink-400',
      to: 'to-pink-600',
    },
    borderColor: 'border-pink-500/30',
    hoverBorder: 'hover:border-pink-500/60',
    textColor: 'text-pink-400',
  },
  {
    id: 3,
    icon: Users,
    title: 'Âge Minimum',
    description: 'Ouvert à tous les joueurs de 16 ans et plus. Autorisation parentale requise pour les mineurs.',
    color: 'purple',
    gradient: {
      from: 'from-purple-400',
      to: 'to-purple-600',
    },
    borderColor: 'border-purple-500/30',
    hoverBorder: 'hover:border-purple-500/60',
    textColor: 'text-purple-400',
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: 'Inscription Gratuite',
    description: 'Aucun frais d\'inscription. Places limitées à 125 joueurs, premier arrivé premier servi.',
    color: 'yellow',
    gradient: {
      from: 'from-yellow-400',
      to: 'to-yellow-600',
    },
    borderColor: 'border-yellow-500/30',
    hoverBorder: 'hover:border-yellow-500/60',
    textColor: 'text-yellow-400',
  },
  {
    id: 5,
    icon: Zap,
    title: 'Ponctualité',
    description: 'Soyez présent 30min avant votre match. Tout retard peut entraîner une pénalité ou forfait.',
    color: 'green',
    gradient: {
      from: 'from-green-400',
      to: 'to-green-600',
    },
    borderColor: 'border-green-500/30',
    hoverBorder: 'hover:border-green-500/60',
    textColor: 'text-green-400',
  },
  {
    id: 6,
    icon: Star,
    title: 'Diffusion Autorisée',
    description: 'Les matchs seront diffusés en live. En vous inscrivant, vous acceptez d\'être filmé.',
    color: 'red',
    gradient: {
      from: 'from-red-400',
      to: 'to-red-600',
    },
    borderColor: 'border-red-500/30',
    hoverBorder: 'hover:border-red-500/60',
    textColor: 'text-red-400',
  },
];

// ===========================
// CTA DATA
// ===========================
export const ctaData = {
  title: 'PRÊT À REJOINDRE LA COMPÉTITION ?',
  subtitle: 'Ne manquez pas votre chance de remporter €15,000 et le titre de Champion',
  buttonText: 'S\'INSCRIRE MAINTENANT',
  socialProof: [
    {
      icon: 'dot',
      text: '✓ 487 inscrits',
      color: 'green',
      textColor: 'text-green-400',
      dotColor: 'bg-green-500',
    },
    {
      icon: Trophy,
      text: '€15,000 cashprize',
      color: 'yellow',
      textColor: 'text-yellow-400',
    },
    {
      icon: Zap,
      text: '38 places restantes',
      color: 'red',
      textColor: 'text-red-400',
    },
  ],
};
