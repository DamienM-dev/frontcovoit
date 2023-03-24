/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#212529',
        'secondary': '#f8f9fa',
        'thirdary': '#adb5bd',
        'fourth': '#343a40',
      }
    },
  },
  plugins: [],
}