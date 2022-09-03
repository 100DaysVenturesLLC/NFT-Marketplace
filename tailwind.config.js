/** @type {import('tailwindcss').Config} */

const { pink } = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Poppins", "sans-serif"],
      mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
    },

    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          blue: "#23AEE3",
          lightblue: "#9B71D8",
          pink: "#FD3DCE",
        },
        background: {
          primary: "#0C111A",
          secondary: "#ffffff",
          highlight: "#23AEE3",
          Error: "#EA3A3D",
          success: " #01FF85",
        },

        foreground: {
          primary: "#ffffff",
          secondary: "#121A23",
          accent: "#0157FF",
          highlight: "#F4F4F5",
          neutral: "#A8AAB6",
        success: "rgba(48, 165, 81, 0.15)",
      error: " #E27A7A",
       
      },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#303F50",
          success: "#01FF85",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          
          search: "#303F50",
          error: "rgba(165, 48, 48, 0.15)",
          
        },
      },
    ],
  },
};
