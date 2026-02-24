/** @type {import('tailwindcss').Config} */
export default {
  content: ["./home.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        mzansi: {
          gold: "#F59E0B",
          dark: "#111827",
          gray: "#F3F4F6",
          text: "#374151",
        },
      },
    },
  },
  plugins: [],
};
