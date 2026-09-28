import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hand: ["'Patrick Hand'", "cursive"],
        body: ["Nunito", "sans-serif"],
      },
      rotate: {
        1.5: "1.5deg",
        "-1.5": "-1.5deg",
        2.5: "2.5deg",
        "-2.5": "-2.5deg",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        notebook: {
          primary: "#B33B2C",
          "primary-content": "#F7EFDB",
          secondary: "#D9A441",
          "secondary-content": "#2B211A",
          accent: "#5C3A21",
          "accent-content": "#F7EFDB",
          neutral: "#3E2716",
          "neutral-content": "#F3E9D2",
          "base-100": "#F3E9D2",
          "base-200": "#ECE0C4",
          "base-300": "#DDCE9F",
          "base-content": "#2B211A",
          info: "#3B6E8C",
          success: "#3F6B4B",
          warning: "#D9A441",
          error: "#8C2F20",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem",
        },
      },
    ],
  },
};
