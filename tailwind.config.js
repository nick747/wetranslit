/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title: "48px",
        normal: "16px",
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
