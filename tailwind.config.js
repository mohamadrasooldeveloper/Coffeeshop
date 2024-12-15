/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow:{
        "Normal": "0 1px 10px rgba(0,0,0,0.05)",
        "dark": "0 1px 10px rgba(0,0,0,0.05)"
      },
      borderRadius:{
        "4xl":"2rem"
      },
      fontFamily:{
        "Dana":"Dana",
        "DanaMedium":"Dana Medium",
        "DanaDemiBold":"Dana DemiBold",
        "Morabbalight":"Morabba light",
        "MorabbaBold":"Morabba Bold",
        "MorabbaMedium":"Morabba Medium"
      },
      backgroundImage:{
        "home-mobile": "url(/public/Images/headerBgMobile.webp)" ,
        "home-dekstop": "url(/public/Images/headerBgDesktop.webp)",
        "Category-right":"url(/public/Images/categories/category-right.jpg)",
        "Category-left":"url(/public/Images/categories/category-left.jpg)"
      },
      spacing:{
        "25":"6.25rem",
        "50":"12.5rem"
      }
    },
    screens:{
      'xd' : '340px',
      'xs': '480px',
      'sm': '640px',
      'md': '767px',
      'lg': '1025px'

    }
  },
  plugins: [],
}



