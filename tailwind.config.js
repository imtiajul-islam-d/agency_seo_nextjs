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
          50: "#666791",
          100: "#4d4e7f",
          200: "#33356d",
          300: "#1a1b5a",
          400: "#000248",
          500: "#000248",
          600: "#000241",
          700: "#00023a",
          800: "#000132",
          900: "#00012b",
          950: "#000124",
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
