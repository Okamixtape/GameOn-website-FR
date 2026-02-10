/**
 * Testimonials Data - Pixel Clash
 * Témoignages participants (fictifs mais crédibles pour démo)
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  game: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "alex-m",
    name: "Alex Martinez",
    role: "Finaliste Street Fighter II",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "Une expérience incroyable ! L'ambiance était électrique, les adversaires de haut niveau, et l'organisation impeccable. Vivement la prochaine édition !",
    game: "Street Fighter II",
    rating: 5,
  },
  {
    id: "sophie-d",
    name: "Sophie Durand",
    role: "Championne Pac-Man",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote: "J'ai adoré retrouver les sensations des bornes d'arcade originales. Le niveau de compétition était relevé, et j'ai rencontré des passionnés géniaux.",
    game: "Pac-Man",
    rating: 5,
  },
  {
    id: "thomas-l",
    name: "Thomas Leroy",
    role: "3e place Donkey Kong",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "Pixel Clash a dépassé toutes mes attentes. Setup authentique, ambiance rétro parfaite, et une organisation au top. Bravo aux organisateurs !",
    game: "Donkey Kong",
    rating: 5,
  },
  {
    id: "marie-c",
    name: "Marie Chen",
    role: "Participante Tetris",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Première compétition retrogaming pour moi, et quelle découverte ! L'accueil était chaleureux, les jeux variés, et j'ai appris énormément.",
    game: "Tetris",
    rating: 5,
  },
];

export const testimonialsHeader = {
  eyebrow: "💬 TÉMOIGNAGES",
  title: "CE QU'EN DISENT LES PARTICIPANTS",
  subtitle: "Retours d'expérience des joueurs de l'édition précédente",
};
