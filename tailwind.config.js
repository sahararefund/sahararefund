/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './_includes/*.html', './_layouts/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', '"Noto Sans Devanagari"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
