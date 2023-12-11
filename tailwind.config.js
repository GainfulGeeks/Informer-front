/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00274E",
        "secondary": "#CCCCCC",
        "accent": "#5DADE2",
        "highlight": "#FFD700",
        "redcolor": "#CC3232",
        "greencolor": "#FFD700",
        "textcolor": "#4CAF50"
    }
    },
  },
  plugins: [],
}

