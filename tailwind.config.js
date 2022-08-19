/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#1877f2'
      },
      spacing: {
        580: '580px',
        380: '380px'
      }
    }
  },
  plugins: []
}
