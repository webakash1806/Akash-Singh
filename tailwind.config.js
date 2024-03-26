/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        edu: ["Edu NSW ACT Foundation", 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}