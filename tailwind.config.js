/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title: "3rem",
        normal: "1rem",
      },
      backgroundColor: {
        accent: "#202020",
        tone: "#111111",
      },
      textColor: {
        accent: "#dedede",
      },
    },
  },

  plugins: [],
};
