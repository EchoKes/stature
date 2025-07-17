/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    animation: {
      "scroll-left": "scrollLeft 120s linear infinite",
      "scroll-right": "scrollRight 120s linear infinite",
    },
  },
  plugins: [require("daisyui")],
};
