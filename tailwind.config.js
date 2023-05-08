/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#032541',
        from: '#c0fecf',
        to: '#1ed5a9',
        tmdbOrange: '#fdc170d9',
        tmdbRed: '#d93b63d9',
        tmdbBlue: '#01b4e4',
      },
      backgroundImage: {
        'trending-bg': "url('/img/trending-bg.svg')",
      },
      animation: {
        'loading-line': 'loading-line .5s ease-in infinite',
      },
      keyframes: {
        'loading-line': {
          '0%': { right: '100%' },
          '100%': {
            right: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
