/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      '2xl': '1920px',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

