/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#2a0a12',
          dark: '#1a0509',
          light: '#3d1220',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f0d060',
        },
        card: '#2a2a2a',
      },
      fontFamily: {
        algerian: ['Algerian', 'serif'],
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 55, 0.15)',
        'glow-sm': '0 0 20px rgba(212, 175, 55, 0.1)',
      },
    },
  },
  plugins: [],
};
