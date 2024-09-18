/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define los archivos que TailwindCSS debe analizar para aplicar las clases
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extensiones para las animaciones personalizadas
      animation: {
        // Animación kenBurns: escala el elemento de 1 a 1.1 en 20 segundos, de manera infinita y alterna
        'ken-burns': 'kenBurns 20s ease infinite alternate',
        // Animación pulse: cambia la opacidad del elemento de 1 a 0.5 en 2 segundos, de manera infinita
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Nueva animación kenBurns-new: escala y traduce el elemento de 1 a 1.3 y se mueve 10% en ambas direcciones en 30 segundos
        'ken-burns-new': 'kenBurnsNew 30s ease infinite alternate',
      },
      keyframes: {
        // Keyframes para la animación kenBurns
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        // Keyframes para la animación pulse
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
        // Keyframes para la animación kenBurnsNew
        kenBurnsNew: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.3) translate(10%, 10%)' },
        },
      },
      // Extensiones para sombras de texto personalizadas
      textShadow: {
        // Sombra de texto mediana
        'md': '0 2px 4px rgba(0,0,0,0.5)',
        // Sombra de texto grande
        'lg': '0 3px 6px rgba(0,0,0,0.5)',
        // Sombra de texto extra grande
        'xl': '0 4px 8px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [
    // Plugin para agregar utilidades de sombra de texto personalizadas
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
      // Añade las nuevas utilidades al conjunto de utilidades de TailwindCSS
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
