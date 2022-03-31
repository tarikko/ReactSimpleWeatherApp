module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans-serif': 'Open Sans'
    },
    boxShadow: {
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '1': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
