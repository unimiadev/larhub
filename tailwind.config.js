/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#FBFBFB",
        "gray-50": "#E7E7E7",
        "gray-80": "#F3F1C2",
        "gray-500": "#00255E",
        "primary-100": "#336699",
        "secondary-100": "#F2CD00",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
