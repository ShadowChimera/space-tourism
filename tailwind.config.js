/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      light: '#ffffff',
      dark: '#0b0d17',
      'dark-various': '#383B4B',
      brand: '#d0d6f9',
    },
    fontSize: {
      '5xl': '9.375rem',
      '4xl': '6.25rem',
      '3xl': '5rem',
      '2xl': '3.5rem',
      xl: '2rem',
      lg: '1.75rem',
      xmd: '1.25rem',
      md: '1.125rem',
      sm: '1rem',
      xs: '0.9375rem',
      '2xs': '0.875rem',
      base: '1rem',
    },
    fontFamily: {
      'sans-condensed': ['var(--font-barlow-condensed)'],
      sans: ['var(--font-barlow)'],
      serif: ['var(--font-bellefair)'],
    },
    extend: {
      screens: {
        '2xl': '1440px',
        md: '768px',
        xs: '330px',
        'md-h': { raw: '(min-height: 736px)' },
      },
      spacing: {
        2.5: '0.375rem',
        13: '3.25rem',
        19: '4.75rem',
        35: '8.75rem',
        42: '10.5rem',
        75: '18.75rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
