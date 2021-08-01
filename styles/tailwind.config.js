module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    fontFamily: {
      display: ["Fira Mono", "sans-serif"],
      body: ["Quicksand", 'sans-serif'],
    },
    extend: {
      colors: {
        change: 'black',
      },
    },
  },
  variants: {},
  plugins: [],
}
