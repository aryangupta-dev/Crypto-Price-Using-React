module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/src/photo-1543286386-713bdd548da4.jpg')"
      },
      fontFamily: {
        staatliches: ['"Staatliches"', '"cursive"'],
        nunito: ['"Nunito"', '"sans-serif"'],
        oswald:['"Coiro"','"sans-serif"']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
