/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
        merry: ["Merriweather", "serif"],
        slab: ["Roboto Slab", "serif"],
        mono: ["Chivo Mono", "monospace"],
        negative: ["Signika Negative", " sans - serif"],
      },
      dropShadow: {
       
        custom: [
         " 3px 3px 7px 4px rgba(0,0,0,0.7)"
        ],
      },
    
    },
  },
  plugins: [],
};

