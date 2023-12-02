/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font_poppins: ["var(--poppins-font)"],
        font_avenir: ["var(--font-avenir)"],
      },
      screens: {
        mobile: { max: "39.9375em" },
        min_lg: { max: "61em" },
        // => @media (max-width: 639px) { ... }
        phablet: "39.9375em",
        // => @media (min-width: 640px) { ... }
        // a smartphone that has a screen size that's larger than a typical smartphone but smaller than a tablet.

        tablet: "48em",
        // => @media (min-width: 768px) { ... }

        desktop: "61em",
        // => @media (min-width: 976px) { ... }

        laptop: "80em",
        // => @media (min-width: 1280px) { ... }

        large_screen: "90em",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primary: {
          50: "#D7F5DC", //bg
          100: "#79d09c",
          200: "#63c88c",
          300: "#4dc17b",
          400: "#36b96b",
          500: "#20B15A",
          600: "#1d9f51",
          700: "#1a8e48",
          800: "#167c3f",
          900: "#136a36",
          950: "#10592d",
        },
        secondary: {
          50: "#faf7ff",
          100: "#f9f6ff",
          200: "#f9f5ff",
          300: "#f8f3ff",
          400: "#f7f2ff",
          500: "#f7f2ff",
          600: "#dedae6",
          700: "#c6c2cc",
          800: "#ada9b3",
          900: "#949199",
          950: "#7c7980",
        },
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
};
