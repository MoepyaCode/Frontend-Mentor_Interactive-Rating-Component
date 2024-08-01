/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        blue: {
          dark: '#262E38',
          'very-dark': '#131518',
        },
        grey: {
          light: '#969FAD',
        },
        orange: {
          light: '#FC7614',
        },
        white: {
          pure: '#FFFFFF',
        },
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      }
    },
  },
  plugins: [],
}