/** @type {import('tailwindcss').Config} */

const colors = require('./utils/themes.js');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: colors
  },
  plugins: [],
}
