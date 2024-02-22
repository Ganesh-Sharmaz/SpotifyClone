/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {

        'Beauty': ['Allura', 'cursive'],
        'Dance': [ 'Pacifico', 'cursive'],
        'raleway': ["Raleway", "sans-serif"]

      },
      colors: {
        'deep' : '#3C0919',
        'charco': '#1E1E1E',
        'word': '#008080',
      },
      keyframes: {
        wiggle: {
          '0%, 20%, 80%': { transform: 'translateX(100px) translateY(20px)' },
          '50%': { transform: 'translateX(50px) translateY(0)' },
          '60%': { transform: 'translateY(120px) translateX(80px)' },
          '45%, 100%': { transform: 'translateY(-10px) translateX(-10px)' },
          '70%': { transform: 'translateY(-40px) translateX(-60px)' },

        },
        tiggle: {
          '0%, 35, 100%': { transform: 'translateY(50px) translateY(20px)' },
          '50%': { transform: 'translateX(100px) translateX(0)' },
          '40%': { transform: 'translateY(80px) translateX(-20px)' },
          '30%': { transform: 'translateX(-20px) translateX(30px)' },
          '70%': { transform: 'translateY(-60px) translateY(-40px)' },
        

        }
     },
      
      animation: {
        wiggle: 'wiggle 20s linear infinite',
        tiggle: 'tiggle 20s linear infinite',
      },

      
    },
  },
  plugins: [],
}

