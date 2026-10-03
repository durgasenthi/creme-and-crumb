/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F4EE",
        espresso: "#2A211C",
        cocoa: "#5A4035",
        caramel: "#B8875A",
        rose: "#D8A7A0",
        champagne: "#D8C2A3",
        ivory: "#FFFCF8",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 60px rgba(42, 33, 28, 0.12)",
      },
    },
  },
  plugins: [],
};