/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#0F1017",
        txtGrey: "", 
        lightPurple: "#7B89C2",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        space: ["Space Mono", "sans-serif"], 
        outfit: ["Outfit", "sans-serif"]
      },
    },
    screens: {
      '2xl': {'max': '1400px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},  
      },
  },
  plugins: [],
}

