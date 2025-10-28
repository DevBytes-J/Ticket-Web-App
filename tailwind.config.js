/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EC4899", // Pink
        secondary: "#22D3EE", // Cyan
        "dark-bg": "#1F2937", // Gray 800
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "0.5" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
};
