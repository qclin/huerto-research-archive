module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        paper: "#ebe9e3",
        eggwash: "#fffbe8",
        melone:" #cfffe3CC",
        yellow:"#ede291",
        time:{
          dawn:{
            bg: {
              DEFAULT: "#3d3b4d",
              light: "#4b4851"
            },
            border: "#b9b9b9",
            text: "#dcdcdc"
          },
          morning:{
            bg: {
              DEFAULT: "#e2e2e2",
              light: "#ffffff"
            },
            border: "#b9b9b9",
          },
          afternoon:{
            bg: {
              DEFAULT: "#bab9be",
              light: "#f2f1f2"
            },
            border: "#b9b9b9",
          },
          night:{
            bg: {
              DEFAULT: "#75747f",
              light: "#8f8d93"
            },
            border: "#b9b9b9"
          }
        }
      },
      fontFamily: {
        sans: ["Porpora-Regular", "sans-serif"],
        head: ["SangBleuBP-Light", "sans-serif"],
      },
      fontSize: {
        sm: "0.531rem",
        base: "0.75rem"
      },
      maxHeight: {
        "25vh": "25vh",
        "30vh": "30vh",
      },
      maxWidth: {
        "70vw": "70vw",
        "80vw": "80vw",
      },
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
