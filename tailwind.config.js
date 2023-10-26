/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#DAF985",
        secondColor: "#8A95A3",
      },
    },
  },
  plugins: [require("daisyui")],
};
