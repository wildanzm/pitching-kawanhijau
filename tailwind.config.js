/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          primary: '#2D9E5E',
          light: '#4CAF50',
          pale: '#E8F5E9',
        },
        gray: {
          bg: '#F5F7F5',
          text: '#6B7280',
        },
        dark: '#1A1A1A',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
