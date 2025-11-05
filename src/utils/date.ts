/**
 * Utilitaires de formatage de dates
 */

/**
 * Formate une date au format français long
 * @param date - Date à formater
 * @returns Date formatée (ex: "5 novembre 2025")
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Formate une date au format court
 * @param date - Date à formater
 * @returns Date formatée (ex: "05/11/2025")
 */
export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/**
 * Calcule le temps de lecture estimé
 * @param content - Contenu de l'article
 * @param wordsPerMinute - Mots par minute (défaut: 200)
 * @returns Temps de lecture en minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute = 200): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Vérifie si une date est récente (< 7 jours)
 * @param date - Date à vérifier
 * @returns true si la date est récente
 */
export function isRecentDate(date: Date): boolean {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7;
}
