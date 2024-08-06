const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default withMT({
  darkMode: "class", // Enables dark mode class strategy
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#1f1f1f",
        darkSecondary: "#1A3636",
        primary: "#77E4C8",
        secondary: "#36C2CE",
        Yellow: "#FCDC2A",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Use DEFAULT instead of default
          sm: "3rem",
        },
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
  },
});
