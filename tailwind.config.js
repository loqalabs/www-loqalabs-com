/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'loqa-blue': '#00bcd4',
        'loqa-gold': '#ffa000',
        'dark-navy': '#1a1d29',
        'dark-slate': '#2d3748',
      },
    },
  },
  plugins: [],
}