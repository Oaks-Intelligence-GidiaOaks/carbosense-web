/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "Sans-Serif"],
      satoshi_italic: ["Satoshi-italic", "Sans-Serif"],
    },
    extend: {
      textColor: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
      },
      backgroundColor: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
        "step-active": "#19CDA7",
      },
      borderColor: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
      },
      outlineColor: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
      },
      fill: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
      },
    },
  },
  plugins: [],
};
