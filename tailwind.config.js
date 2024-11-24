/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'sm': { max: '480px' }, // For screens 480px and below
        'lg': { min: '481px' }, // For screens 481px and above (Default or larger screens)
      },
    },
  },
  plugins: [],
}