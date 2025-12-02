// LOCATION: glidex-outsourcing/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Custom GlideX Brand Colors
        'dark-teal': '#0077c9',
        'medium-blue': '#28a0e8',
        'light-cyan': '#44c8f5',
        // General UI colors
        'gray-light': '#f7f9fc',
        'gray-dark': '#1a1a1a',
      },
      fontFamily: {
        // Using a safe, modern sans-serif font
        'sans': ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
