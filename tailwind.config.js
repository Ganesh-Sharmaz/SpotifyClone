/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'deep' : '#3C0919',
        'charco': '#1E1E1E',
        'word': '#008080',
      }
    },
  },
  plugins: [],
}

