const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
}
