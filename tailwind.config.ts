/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
    extend: {
      colors: {
        danger: 'red',
        brd:'#e0e0e0',
        grn:'#013941',        
      },
      backgroundColor:{
         btn_bg:'var(--btn-bg)'
      }
   },
  },

  plugins: [],
} 
}
