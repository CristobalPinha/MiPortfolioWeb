/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: '#9333ea',
          light: 'var(--primary-light)',
        },
        background: {
          DEFAULT: 'var(--background)',
          secondary: 'var(--background-secondary)',
          tertiary: '#2e1065',
        },
        'text-main': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
