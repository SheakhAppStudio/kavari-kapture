/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-primary',
    'bg-primary-light',
    'bg-primary-dark',
    'text-primary',
    'border-primary',
    'hover:bg-primary',
    'hover:text-primary',
    'hover:border-primary',
    'bg-gold',
    'text-gold',
    'border-gold',
    'hover:bg-gold',
    'hover:text-gold',
    'bg-gold-light',
    'bg-gold-dark',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5E105E', // Deep purple from presentation
          light: '#7A2E7A',
          dark: '#4A004A',
        },
        gold: {
          DEFAULT: '#D4AF37', // Gold
          light: '#F2D175',
          dark: '#A6872D',
        },
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
