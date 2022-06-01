module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    
    extend: {
      colors:{
        'primary':'#4e2c0b',
        'secondary':'#0b334e'
      },
      screens: {
        '2xl': '3839px',
      },
      fontFamily: {
        'poppins': ['Poppins']
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
