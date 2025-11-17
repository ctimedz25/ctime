/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
         colors: {
        isoPrimary: "#1a73e8",
        isoAccent: "#6a11cb",
        isoDeep: "#0d47a1",
      },
        slideInRight: {
          "0%": { transform: "translateX(80px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        watery: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideInRight: "slideInRight 1s ease-out forwards",
        watery: "watery 6s infinite linear",
        fadeUp: "fadeUp 0.8s ease-out",
      },
      backgroundSize: {
        'gradient-lg': '300% 300%',
      },
    },
  },
  plugins: [],
});
