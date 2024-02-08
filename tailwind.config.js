/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: { // Ajout de l'animation float
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(90deg, #334155, #0F182A), url('https://img.freepik.com/free-vector/monochrome-square-pattern-background-geometric-vector-illustration_1164-1146.jpg')",
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 3s ease-in-out infinite', // Ajout de l'animation float
      },
      fontFamily: {
        bitter: ['Bitter', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        sacramento: ['Sacramento', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        audiowide : ['audiowide']
      },
      boxShadow: {
        'dark': '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
        'green': '0 10px 20px -5px rgb(5 150 105 / 0.4), 0 2px 6px -2px rgb(5 150 105 / 0.3)',
        'red': '0 10px 20px -5px rgb(185 28 28 / 0.4), 0 2px 6px -2px rgb(185 28 28 / 0.3)',
        'blue': '0 10px 20px -5px rgb(59 130 246 / 0.4), 0 2px 6px -2px rgb(59 130 246 / 0.3)',

        'custom': '25px 25px 187.5px 7.5px rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
}

