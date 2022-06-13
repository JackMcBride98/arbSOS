module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#00ff8c',
        linkGreen: '#00cd71',
        darkGreen: '#00864a',
        dull: '#eeeeee',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
