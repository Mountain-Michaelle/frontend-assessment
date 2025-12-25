/** @type {import('tailwindcss').Config} */

import { BackgroundVariant } from "reactflow";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        danger: 'red',
        brd:'#e0e0e0',
        grn:'#013941',
        
      },
       border: {
          subtle: "#F1F5F9",
        },
      
      backgroundImage: {
        custom_gradient : 'linear-gradient(to bottom, #FFF5F5 63%, #756969 100%)',
      },
      backgroundColor:{
         btn_bg:'var(--btn-bg)'
      }
   },
  },
  plugins: [],
};
