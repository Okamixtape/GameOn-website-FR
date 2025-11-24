/**
 * CircuitPattern - Motif de circuits électroniques
 * 
 * Composant purement visuel (pas d'interactivité)
 * Peut être rendu en Astro statique si besoin
 */
export function CircuitPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#FFDE00" strokeWidth="1" fill="none">
          <circle cx="10%" cy="20%" r="3" />
          <circle cx="90%" cy="15%" r="2" />
          <circle cx="15%" cy="80%" r="2" />
          <circle cx="85%" cy="75%" r="3" />
          <circle cx="50%" cy="50%" r="2" />
          
          <line x1="10%" y1="20%" x2="50%" y2="50%" />
          <line x1="90%" y1="15%" x2="50%" y2="50%" />
          <line x1="15%" y1="80%" x2="50%" y2="50%" />
          <line x1="85%" y1="75%" x2="50%" y2="50%" />
        </g>
      </svg>
    </div>
  );
}
