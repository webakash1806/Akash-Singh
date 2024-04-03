/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cor: ["Courgette", 'cursive'],
        roboto: ["Roboto", 'sans-serif'],

        poppins: ["Poppins", 'sans-serif'],
        edu: ["Edu NSW ACT Foundation", 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}