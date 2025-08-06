/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        },
    },
    cgridTemplateColumns: {
      '70-30': '70% 30%',
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      },
      },
},
  plugins: [],
}

