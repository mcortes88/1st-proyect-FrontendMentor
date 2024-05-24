/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
      'veryDarkGrayishBlue': 'hsl(217, 19%, 35%)',
      'vesaturatedDarkBlue': 'hsl(214, 17%, 51%)',
      'grayishBlue': 'hsl(212, 23%, 69%)',
      'lightGrayishBlue': 'hsl(210, 46%, 95%)',
      'white': '#ffffff',
      },
      
    },
  },
  plugins: [],
}

