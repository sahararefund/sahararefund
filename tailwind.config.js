/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './_includes/*.html', './_layouts/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f5fb',
          100: '#e1e9f6',
          200: '#c3d3ec',
          300: '#9bb5de',
          400: '#6a8fcb',
          500: '#3f6bb5',
          600: '#2c5499',
          700: '#22427b',
          800: '#173260',
          900: '#0f2347',
          950: '#091630',
        },
        saffron: {
          50: '#fff6ec',
          100: '#ffe8cf',
          200: '#fdd0a0',
          300: '#fab26a',
          400: '#f69433',
          500: '#ee7c14',
          600: '#d9650b',
          700: '#b44d0c',
          800: '#8f3d11',
          900: '#753411',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans Devanagari"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
