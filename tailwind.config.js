/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#0D0D0D",
        "yellow-100": "#F2D57E",
        "yellow-200": "#F2C84B",
        "yellow-300": "#D9A13B",
        "yellow-400": "#BF7D2C",
      },
      keyframes: {
        lightBeam: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        lightBeam: "lightBeam 2s linear infinite",
      },
    },
  },
  plugins: [],
};
