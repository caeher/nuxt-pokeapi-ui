/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.vue',
    'components/*.vue',
    'layouts/*.vue',
    'pages/**/*.vue',
    'pages/*.vue',
    '*.vue'
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
