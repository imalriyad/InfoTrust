
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'mainColor' :"#DAF985"
      }
    },
  },
  plugins: [require("daisyui")],
};
