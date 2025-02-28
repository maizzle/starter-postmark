/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  content: [
    './components/**/*.html',
    './emails/**/*.html',
    './layouts/**/*.html',
  ],
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      colors: {
        gray: {
          postmark: {
            lightest: '#F4F4F7',
            lighter: '#F2F4F6',
            light: '#A8AAAF',
            dark: '#51545E',
            darker: '#333333',
            darkest: '#222222',
            meta: '#85878E',
          },
        },
        blue: {
          postmark: '#3869D4',
        },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
}
