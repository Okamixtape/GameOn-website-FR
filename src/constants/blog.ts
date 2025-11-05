/**
 * Constantes pour le blog
 */

/**
 * Configuration d'affichage des articles
 */
export const BLOG_CONFIG = {
  /** Nombre maximum d'articles similaires à afficher */
  MAX_RELATED_POSTS: 3,
  
  /** Nombre de tags à afficher sur les cards featured */
  FEATURED_TAGS_COUNT: 3,
  
  /** Nombre de tags à afficher sur les cards default */
  DEFAULT_TAGS_COUNT: 2,
  
  /** Nombre de mots par minute pour calcul temps de lecture */
  WORDS_PER_MINUTE: 200,
  
  /** Nombre de jours pour considérer un article comme "récent" */
  RECENT_DAYS_THRESHOLD: 7,
} as const;

/**
 * Variantes de couleurs pour les cards d'articles
 */
export const BLOG_VARIANTS = {
  featured: {
    gradient: 'from-retro-blue to-retro-purple',
    hoverBorder: 'hover:border-retro-blue hover:shadow-retro-blue/20',
    tagColor: 'bg-retro-blue/10 text-retro-blue',
    titleHover: 'group-hover:text-retro-blue',
  },
  default: {
    gradient: 'from-retro-purple to-retro-pink',
    hoverBorder: 'hover:border-retro-purple hover:shadow-retro-purple/20',
    tagColor: 'bg-retro-purple/10 text-retro-purple',
    titleHover: 'group-hover:text-retro-purple',
  },
} as const;

/**
 * Catégories d'articles
 */
export const BLOG_CATEGORIES = {
  HISTOIRE: 'histoire',
  GUIDES: 'guides',
  ACTUALITES: 'actualites',
  NOSTALGIE: 'nostalgie',
  CULTURE: 'culture-gaming',
  TECHNIQUES: 'techniques',
  INTERVIEWS: 'interviews',
} as const;

/**
 * Tags populaires
 */
export const POPULAR_TAGS = [
  'histoire',
  'arcade',
  'guides',
  'street-fighter',
  'pac-man',
  'nostalgie',
  'tournoi',
  'retro-gaming',
] as const;
