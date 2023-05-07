// tailwind.config.js
const { colors: defaultColors } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "metclan-yellow": {
          100: "#f8a800",
        },
      },
    },
    plugins: [],
  },
};
