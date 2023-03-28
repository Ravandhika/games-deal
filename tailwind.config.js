/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "brand-black-1": "#1A1A1A",
        "brand-green-1": "#4FCCA3",
        "brand-gray-1": "#3A3F47",
        "brand-white-1": "#EEEEEE",
        "brand-alert": "#FF1F57",
        "brand-warning": "#FFAC42"
      }
      // ADD OTHER CUSTOM TAILWINDS THEMES
    }
  },
  plugins: []
};
