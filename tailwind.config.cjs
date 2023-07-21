// const defaultTheme = require('tailwindcss/defaultTheme')

const screens = {
  sm: '577px',
  md: '768px',
  lg: '969px',
  xl: '1200px',
  '2xl': '1400px'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    screens: {
      ...screens,
      ...Object.keys(screens)
        .reverse()
        .reduce(
          (acc, key) => ({
            ...acc,
            [`max-${key}`]: {
              raw: `not all and (min-width: ${screens[key]})`
            }
          }),
          {}
        )
    },
    extend: {}
  },
  corePlugins: {
    container: false
  },
  plugins: []
}
