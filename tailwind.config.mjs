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
        'gaming-violet': '#8B5CF6',   // violet-500 - Couleur secondaire
        'gaming-amber': '#F59E0B',    // amber-500 - Couleur accent
        'retro-blue': '#00D9FF',      // Bleu néon retro
        'retro-pink': '#FF006E',      // Rose néon retro
        'retro-purple': '#7209B7',    // Violet foncé retro
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
