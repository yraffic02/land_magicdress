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
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.4)',
        'white-md': '0 6px 10px rgba(255, 255, 255, 0.6)',
        'white-lg': '0 8px 12px rgba(255, 255, 255, 0.8)',
      },
      keyframes: {
        lightBeam: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        lightBeam: "lightBeam 5s linear infinite",
      },
    },
  },
  plugins: [],
};
