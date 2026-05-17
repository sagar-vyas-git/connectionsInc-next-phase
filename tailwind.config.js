/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0F1C', 900: '#0E1424', 800: '#141B30',
          700: '#1C2540', 600: '#2A3556'
        },
        cyan: { electric: '#22E1FF', glow: '#7DF9FF' },
        gold: { warm: '#E6B85C', deep: '#B8893A', soft: '#F5D89B' },
        bone: '#F4EFE6'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: { widest2: '0.25em' },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
      },
      backgroundSize: { 'grid-32': '32px 32px' },
      boxShadow: {
        glow: '0 0 60px -10px rgba(34, 225, 255, 0.35)',
        gold: '0 0 50px -10px rgba(230, 184, 92, 0.4)'
      }
    }
  },
  plugins: []
}
