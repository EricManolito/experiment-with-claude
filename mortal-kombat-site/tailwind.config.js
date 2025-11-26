/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mk: {
          red: '#D91414',
          gold: '#FFD700',
          black: '#1a1a2e',
          yellow: '#FFEB3B',
          darkGray: '#16213e',
          charcoal: '#0f3460',
        },
      },
      fontFamily: {
        mk: ['Arial', 'sans-serif'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 10px #D91414, 0 0 20px #D91414' },
          '50%': { textShadow: '0 0 20px #D91414, 0 0 30px #D91414' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'flip': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'flip': 'flip 0.6s ease-in-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(217, 20, 20, 0.5)',
        'glow-lg': '0 0 30px rgba(217, 20, 20, 0.7)',
      },
    },
  },
  plugins: [],
}
