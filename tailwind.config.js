/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary-light':'#E1EDE6',
      'primary-dark-0':'#598D66',
      'primary-dark-100':'#376B44',
      'accent-0':'#FAEB97',
      'accent-100':'#EEDB6D',
      'accent-200':'#D9B949',
      'accent-300':'#A38314',
      'background':'#F4F6F5',
      'foreground':'#2C2D35',
      'foreground-detail':'#86928B',
    },
    screens:{
      'desktop':'690px',
      'tablet-690':'510px',
      'tablet-510':'320px',
      'mobile':'0px',
    },
    extend: {
    },
  },
  plugins: [],
}

