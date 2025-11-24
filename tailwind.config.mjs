/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        gaming: ['Rajdhani', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // V1 - Palette Retro Gaming (conservée pour transition)
        'gaming-violet': '#8B5CF6',   // violet-500 - Couleur secondaire
        'gaming-amber': '#F59E0B',    // amber-500 - Couleur accent
        'retro-blue': '#00D9FF',      // Bleu néon retro (décoration uniquement)
        'retro-blue-dark': '#007399', // Bleu foncé (5.37:1 WCAG AA)
        'retro-pink': '#FF006E',      // Rose néon retro (décoration uniquement)
        'retro-pink-dark': '#A3004A', // Rose foncé (7.91:1 WCAG AA)
        'retro-purple': '#7209B7',    // Violet foncé retro (8.61:1 WCAG AA)
        'retro-purple-dark': '#5A0790', // Violet plus foncé (11.24:1 WCAG AAA)
        
        // V2 - Palette Zeus (Cyberpunk)
        'background': '#0a0f24',      // Bleu Nuit - Fond principal
        'surface': '#1e293b',         // Cartes sombres - Surfaces
        'primary': '#FFDE00',         // Jaune Éclair - CTA principal
        'text': '#f8fafc',            // Blanc - Texte principal
        'text-secondary': '#94a3b8',  // Gris clair - Texte secondaire
        'accent-cyan': '#00D9FF',     // Cyan néon - Accents
        'accent-purple': '#A855F7',   // Violet néon - Accents
        
        // V3 - Palette Synthwave (Redesign)
        'neon-cyan': '#00f3ff',       // Cyan néon - Primaire
        'neon-magenta': '#ff00ff',    // Magenta néon - Secondaire
        'bg-dark': '#0a0a1f',         // Navy foncé - Fond principal
        'bg-dark-accent': '#1a0a2e',  // Purple foncé - Fond accent
        'text-light': '#f8fafc',      // Blanc - Texte principal
        'text-muted': '#94a3b8',      // Gris - Texte secondaire
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
