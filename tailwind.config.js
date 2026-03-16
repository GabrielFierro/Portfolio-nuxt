/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#38BDF8',
        accent: '#F472B6',
        backgroundDark: '#121212',
        surfaceDark: '#1E293B'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
