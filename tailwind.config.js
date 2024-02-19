/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        Barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#8ac44b",
          secondary: "#699639",
          light: "#f4f6f4",
          gray: "#EFEFEF",
          dark: "#415161",
          black: "#000000",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
