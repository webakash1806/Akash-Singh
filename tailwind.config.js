/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
        elite: ["Special Elite", 'system-ui'],
        fre: ["Fredericka the Great", 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}