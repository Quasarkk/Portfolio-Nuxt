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
      },
    },
  },
  plugins: [],
}

