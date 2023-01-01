/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'shake': 'shake 1.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0% 100%': { transform: '(-5deg)'},
          '50%': { transform: 'rotate(5deg)'}
        },
        'shake' : {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, )'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0,)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          },
        }
      },
    },
  },
  plugins: [],
}
