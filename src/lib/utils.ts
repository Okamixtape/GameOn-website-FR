import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitaire pour fusionner les classes Tailwind
 * Utilisé par shadcn/ui pour gérer les conflits de classes
 * 
 * @param inputs - Classes CSS à fusionner
 * @returns Classes fusionnées sans conflits
 * 
 * @example
 * cn("px-4 py-2", "px-6") // → "py-2 px-6"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
