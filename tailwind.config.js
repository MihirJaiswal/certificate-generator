/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg1":"url('/src/assets/bg.jpg')",
        "bg2":"url('/src/assets/udemybg.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

