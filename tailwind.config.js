/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E8E8E8",
        "gray-50": "#828282",
        "gray-100": "#333333",
        "gray-500": "#4F4F4F",
        "primary-500": "#DC2626",
        "secondary-500": "#1D1D1D",
      },
      backgroundImage: {
        "about-image": "url('./assets/background-theme.png')",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}