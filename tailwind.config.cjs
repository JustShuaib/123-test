/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E98100",
        "main-bg": "#F5F5F5",
        "light-bg": "#D9D9D9",
        "nav-text": "#4A5168",
        text: "#222222",
        "btn-sec": "#FAEFD7",
        "box-bg": "#C4C4C4",
        ltext: "#444444",
        "light-red": "#EEE4D7",
        "light-text": "#3B3D3B",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        16: "16px",
        20: "20px",
        25: "25px",
        36: "36px",
        128: "128px",
      },
      boxShadow: {
        input: "0px 30px 30px rgba(131, 9, 0, 0.05)",
      },
      borderColor: {
        light: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
