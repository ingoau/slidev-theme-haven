import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      haven: {
        lime: '#b8c11f',
        carrot: '#fc8616',
        banana: '#f9dd60',
        pumpkin: '#e87136',
        faded: '#dfa063',
        umber: '#783d2b',
        lucky: '#a8a237',
        green: '#b8c11f',
        'green-deep': '#97a01a',
        orange: '#fa681b',
        'orange-deep': '#ed5615',
        yellow: '#ffd059',
        butter: '#ffe382',
        brown: '#b8774a',
        'brown-light': '#dfa063',
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
