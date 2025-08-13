/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        "11px": "11px",
        "35px": "35px",
        "38px": "38px",
      },
      colors: {
        semiwhite: "rgba(0, 0, 0, 0.1)",
        cod: "#101010",
        mauve: "#E2BEFF",
        concrete: "#f3f3f3",
        mercury: "#e8e8e8",
      },
      lineHeight: {
        100: "100%",
        120: "120%",
      },
      fontSize: {
        "84px": "84px",
      },
      letterSpacing: {
        min: "0.01em",
      },
    },
  },
  plugins: [],
};
