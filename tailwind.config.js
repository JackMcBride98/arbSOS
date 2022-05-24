module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00ff8c",
        darkGreen: "#00864a",
        dull: "#eeeeee",
      },
    },
  },
  plugins: [],
};
