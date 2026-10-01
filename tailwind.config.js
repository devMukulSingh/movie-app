/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        background: 'var(--color-background)',
        element: 'var(--color-element)',
        selected: 'var(--color-selected)',
        secondary: 'var(--color-secondary)',
        backgroundSecondary: 'var(--color-backgroundSecondary)',
      },
    },
  },
  plugins: [],
}