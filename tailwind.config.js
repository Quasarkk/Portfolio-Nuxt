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
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(90deg, #334155, #0F182A), url('https://img.freepik.com/free-vector/vector-background-abstract-polygon-triangles_2065-346.jpg')",
      },

      animation: {
        blink: 'blink 1s step-end infinite',
      },
      fontFamily: {
        bitter: ['Bitter', 'serif',],
        ubuntu: ['Ubuntu', 'sans-serif',],
        sacramento: ['Sacramento', 'sans-serif',],

        inter:['Inter', 'sans-serif',],
      },
    },
  },
  plugins: [],
}

