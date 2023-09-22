import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'underlineMenu': '0 4px 6px -6px #FFF;',
      },
      keyframes: {
        float: {
          '0%': { 
            transform: 'translateY(0%)'
          },
          '50%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        pulse: {
          '0%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        cloud1: {
          '0%': { 
            transform: 'translateX(0)'
          },
          '100%': { transform: 'translateX(100vw)' }
      },
        moveRightSmall: {
          '0%': {transform: 'translateX(0)',
          opacity: '0'},
        '5%': {opacity: '1'},
          '90%': {opacity: '0.85'},
          '100%': {transform: 'translateX(100vw)',
          opacity: '0'}
      },
      moveRightInitial: {
        '0%': {transform: 'translateX(0)'},
        '90%': {opacity: '0.85'},
        '100%': {transform: 'translateX(100vw)',
        opacity: '0'},
    },

      },
    },
  },
  plugins: [],
}
export default config
