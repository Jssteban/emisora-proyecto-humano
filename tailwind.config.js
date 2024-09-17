/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ken-burns': 'kenBurns 20s ease infinite alternate',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
      },
      textShadow: {
        'md': '0 2px 4px rgba(0,0,0,0.5)',
        'lg': '0 3px 6px rgba(0,0,0,0.5)',
        'xl': '0 4px 8px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 3px 6px rgba(0,0,0,0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '0 4px 8px rgba(0,0,0,0.5)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}