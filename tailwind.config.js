module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "dobble-cream":"#F6F5EC",
        "dobble-blue":"#013D51",
        "dobble-light-blue":"#AED4DF"
      },
      spacing: {
        '96.5': '25rem',
        '97': '30rem',
        '98': '43rem',
        '100': '50rem',
        '110': '64rem',
      },
    },
  },
  plugins: [],
}
