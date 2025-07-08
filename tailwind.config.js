/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neo-blue': '#0066FF',
        'neo-pink': '#FF0066',
        'neo-green': '#66FF00',
        'neo-orange': '#FF6600',
        'neo-yellow': '#FFFF00',
        'neo-purple': '#6600FF',
      },
      fontFamily: {
        'neo': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
        'neo-lg': '6px 6px 0px 0px #000000',
        'neo-xl': '8px 8px 0px 0px #000000',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};