module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        paper: "#ebe9e3",
        eggwash: "#fffbe8",
        melone:" #cfffe3CC"
      },
      fontSize: {
        sm: "0.531rem",
        base: "0.75rem"
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled', 'hover', 'focus']
    },
  },
  plugins: [],
}
