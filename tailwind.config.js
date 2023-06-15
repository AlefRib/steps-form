/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        showing: {
          '0%': { scale: '0.7', opacity: '0' },
        },
      },
      animation: {
        'waving-hand': 'showing 100ms  ease-in-out backwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          100: '#E1E1E6',
          200: '#8D8D99',
          400: '#323238',
        },
        'purple-mid': '#633BBC',
        'purple-light': '#8257E5',
        success: '#1D8841',
      },
    },
  },
  plugins: [],
}
