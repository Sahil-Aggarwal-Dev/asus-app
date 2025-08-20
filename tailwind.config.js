// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fluctuate': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.9' },
        },
      },
      animation: {
        'fluctuate': 'fluctuate 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
