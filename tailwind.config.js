/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'lg' : {'min' : '768px'},
      'md' : {'max': '767px'},
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      boxShadow: {
        'custom-shadow': '0 4px 4px 0 rgba(46, 26, 81, 0.25)',
      },

      colors: {
        'lavender-gray' : '#DBD5EC',
        'indigo' : '#281A51',
        'soft-pink' : '#FFECEC',
        'pastel-lavender' : '#F7ECFF',
        'soft-blue' : '#ECF0FF',
        'mint-cream' : '#D7F9F3',
        'fresh-lime' : '#E2FFD4',
        'vanilla' : '#FFF3C9',
        'creamy-peach' : '#FFD9C9',
      },
    },
  },
  plugins: [],
}