/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cuprum: ["Cuprum"],
      },
      animation: {
        slideInOut: "slideInOut 25s linear infinite",
      },
      keyframes: {
        slideInOut: {
          "0%": { transform: "translateX(330%)" },
          "100%": { transform: "translateX(-330%)" },
        },
      },
    },
  },
  plugins: [],
};
