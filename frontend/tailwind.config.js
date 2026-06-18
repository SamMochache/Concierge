
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#fbf8f2',
          100: '#f7f1e6',
          200: '#efe2cc',
          300: '#e4d2ad',
        },
        clay: {
          50: '#fbf1ec',
          100: '#f1d8cb',
          400: '#c9703f',
          500: '#b5552d',
          600: '#9a4523',
          700: '#7c371d',
        },
        savanna: {
          50: '#f2f5ee',
          100: '#dde6cf',
          500: '#5b6e3a',
          600: '#47572c',
          700: '#37451f',
        },
        gold: {
          400: '#d9b75a',
          500: '#c79a3b',
          600: '#a87f2c',
        },
        ink: '#2a241d',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(42, 36, 29, 0.18)',
        card: '0 4px 24px -8px rgba(42, 36, 29, 0.16)',
      },
    },
  },
}

