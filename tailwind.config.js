/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      height: {
        '0.1': '1px',
        '100': '45rem',
        '99': '30rem',
        '101': '70rem',
      },
      colors: {
        'opacity': 'rgba(0,0,0,0.5)'
      },
    },
  },
  plugins: [],
}
