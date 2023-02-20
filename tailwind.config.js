/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode:'class',
  theme: {
    screens:{
        'xl': {'max':'1200px'},
        'lg': {'max':'1024px'},
        'sm': {'max':'620px'}
    },
    container:{
        padding: '15px',
        center:  true
    },
    extend: {
        colors:{
            colP: '#515155',
            colNight: '#232323',
            bg: '#e9e7e7',
            footer: '#c4c4c4'
        }
    },
  },
  plugins: [],
}
