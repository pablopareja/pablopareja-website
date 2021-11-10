/* eslint-disable @typescript-eslint/no-var-requires */
const forms = require('@tailwindcss/forms');
const lineClamp = require('./lib/tailwind/line-clamp');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./**/*.ts', './**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Cabin', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      padding: ['last'],
      margin: ['last'],
    },
  },
  plugins: [forms, lineClamp],
};
