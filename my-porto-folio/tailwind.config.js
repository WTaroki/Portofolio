/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ["Lora'", "serif"],
        'poppins': ['Poppins', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'caveat': ['Caveat', 'cursive'],
        'averia':['Averia Libre', 'cursive'],
        'lex':['Lexend', 'sans-serif'],
        'cor': ['Cormorant Garamond', 'serif']
      },
      screens: {
        'HP' : '500px',
        // => @media (min-width: 500px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        'Home': "url('./assets/HomeBG.png')"
       },
      
    },
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    }
  },
  plugins: [],
}

