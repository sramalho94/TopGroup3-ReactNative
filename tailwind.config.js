/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customcolor: {DEFAULT: '#FC2E20', 500: '#FC2E20'},
        bblue: {DEFAULT: '#BBFFFF', 500: '#BBFFFF'},
        ppurple: {DEFAULT: '#E6E6FA', 500: '#E6E6FA'},
        rred: {DEFAULT: '#E0115F', 500: '#E0115F'},
      },
    },
  },
  plugins: [],
};
