import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      haven: {
        green: '#b8c220',
        'green-deep': '#97a01a',
        orange: '#fa681b',
        'orange-deep': '#ed5615',
        'orange-mid': '#fc8616',
        yellow: '#ffd059',
        butter: '#ffe382',
        brown: '#b8774a',
        'brown-light': '#dda47d',
        cocoa: '#6b4043',
        teal: '#2cbf90',
        cream: '#fff6e6',
      },
    },
    fontFamily: {
      display: '"Darumadrop One", Jua, ui-rounded, sans-serif',
      body: 'Jua, ui-rounded, sans-serif',
    },
  },
  shortcuts: {
    'haven-title': 'font-display text-white',
  },
})
