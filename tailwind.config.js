/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alfa-slab': ['"Alfa Slab One"', 'serif'], 
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm': { max: '480px' }, // For screens 480px and below
         // For screens 481px and above (Default or larger screens)
      },
    },
  },
  plugins: [],
}