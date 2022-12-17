/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor:{
        'blur':'rgba(0, 0, 0, 0.7)'
      },
      fontFamily: {
        'Poppins-normal': ['Poppins-Regular' ],
        'Poppins-black': ['Poppins-Black' ],
        'Roboto-Regular':['Roboto-Regular']
      }
    },
  },
  plugins: [],
};
