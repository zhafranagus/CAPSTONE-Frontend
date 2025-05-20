/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Gunakan 'class' jika ingin dark mode bisa di-toggle via class
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
    theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'"],
      },
    },
  },
}
