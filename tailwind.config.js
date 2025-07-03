
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  // Disabling dark mode
  darkMode: false,
  // DaisyUI config
  daisyui: {
    themes: ["light"], // Only use the light theme
  },
}
