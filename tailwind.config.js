module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      light_green: "#D3E4CD",
      green: "#99A799",
      light_pink:"#F2DDC1",
      pink:"#E2C2B9",
      red:"#CD1818"
    },
    screens: {
      tablet: {"max":"550px"},
      // => @media (max-width: 550px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px"
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
