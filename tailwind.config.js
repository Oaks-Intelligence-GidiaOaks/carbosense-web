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
        "primary-purple": "#9553A0",
        "primary-gray": "#5D5D5D",
        "primary-red": "#FF331E",
      },
      ringColor: {
        "primary-blue": "#4747ff",
      },
      backgroundColor: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
        "step-active": "#19CDA7",
        "bg-ca-light-gray": "#EDF0F6",
        "bg-ca-gray": "#E3ECFF",
        "bg-ca-red": "#FF331E",
        "primary-purple": "#9553A0",
        "modal-black": "rgba(0, 0, 0, 0.3)",
      },
      borderColor: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
        "bg-ca-purple": "#9553A0",
        "bg-ca-light-purple": "#FBF7FF",
      },
      outlineColor: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
      },
      fill: {
        "primary-blue": "#4747ff",
        "primary-black": "#0E0E0E",
      },
      animation: {
        enter: "enter .2s ease-out",
        leave: "leave .15s ease-in forwards",
      },
      keyframes: {
        enter: {
          "0%": {
            opacity: "0",
            transform: "scale(.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        leave: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(.9)",
          },
        },
      },
    },
  },
  plugins: [],
};
