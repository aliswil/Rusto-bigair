const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Anton", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: (theme) => ({
        "bg-bigscreen": "url('/bg1.JPG')",
        "bg-mobile": "url('/flet1.jpg')",
        //@ts-ignore"test-device-xl": "url('/img/test-device/exlg.png')",
      }),
    },
  },
  plugins: [],
};
