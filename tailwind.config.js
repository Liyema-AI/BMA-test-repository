/** @type {import('tailwindcss').Config} */
export default {
  content: ["/*"],
  theme: {
    extend: {},
  },
  plugins: [],
  config: {
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
  },
};
