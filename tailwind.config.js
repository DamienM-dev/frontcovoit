/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3A98B9',
        'secondary': '#EEEEEE',
        'thirdary': '#E8D5C4',
        'fourth': '#609966',
      }
    },
  },
  plugins: [],
}