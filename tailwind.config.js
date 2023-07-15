/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      },
    },
    fontFamily: {
      'primary': ['DM Sans', 'sans-serif'],
      'heading': ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#1A1818',
        'secondary': '#FF6854',
      },
    },
  },
  plugins: [],
}
