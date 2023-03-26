/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A3C24',
        'secondary': '#FFCB47',
        'thirdary': '#FFE299',
        'fourth': '#24341E',
      }
    },
  },
  plugins: [],
}