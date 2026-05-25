/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false, // Disable CSS reset so existing styles are unaffected
  },
  theme: {
    extend: {
      colors: {
        'ts-bg':      'var(--ts-bg)',
        'ts-surface': 'var(--ts-surface)',
        'ts-text':    'var(--ts-text)',
        'ts-muted':   'var(--ts-muted)',
        'ts-accent':  'var(--ts-accent)',
        'ts-border':  'var(--ts-border)',
      },
      fontFamily: {
        display: ['Cormorant', 'Georgia', '"Times New Roman"', 'serif'],
        body:    ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
};
