/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 
        "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
      },
      colors: {
        customDarkBlue: '#0E1F2F',
        customLightBlue: '#24425D',
        customLightPurple: '#8747D0',
        customLightPink: '#E2CADB',
        customDarkPink: '#C18DB4',
        customVeryDarkBlue: '#0E1B4B',
      }
    },
  },
  plugins: [],
}
