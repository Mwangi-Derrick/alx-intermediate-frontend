/* @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./*.html",      // This matches all HTML files in the root directory
    "./src/**/*.html" // Just in case you put HTML in src later
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}