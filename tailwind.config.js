
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: {
          DEFAULT: '#FBF8F3',
          50: '#FFFFFF',
          100: '#FEFDFB',
          200: '#FDFBF7',
          300: '#FCFAF5',
          400: '#FBF8F3',
          500: '#F2EBE1',
          600: '#E8DED0',
          700: '#DED1BF',
          800: '#D4C4AE',
          900: '#CAB79D',
        },
        accent: {
          DEFAULT: '#15803D', // Forest Green
          hover: '#166534',
        }
      }
    },
  },
  plugins: [],
}
