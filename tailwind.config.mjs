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
        'gaming-violet': '#8B5CF6', // violet-500 - Couleur secondaire
        'gaming-amber': '#F59E0B',  // amber-500 - Couleur accent
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
