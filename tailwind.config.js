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
        primary: '#a200ff',
        secondary: '#4F8CFF',
        accent: '#FF4FD8'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#794DFF',
          secondary: '#4F8CFF',
          accent: '#FF4FD8',
          neutral: '#1A1A1A',
          'base-100': '#F8F9FC',
          'base-200': '#F1F3F9',
          'base-300': '#E5E7F0',
          'base-content': '#1A1A1A',
          info: '#3ABFF8',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444'
        }
      }
    ]
  }
}
