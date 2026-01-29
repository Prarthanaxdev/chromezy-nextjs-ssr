/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        baseDark: '#0B0D14',
        accentBlue: '#4DC3E8',
        accentPurple: '#7F5CFF',
        accentPink: '#FF5CF4',
        textPrimary: '#FFFFFF',
        textSecondary: '#A0AEC0',
      },
      backgroundImage: {
        'linear-blue-purple': 'linear-gradient(90deg, #3C6BFE 0%, #9D84F2 100%)',
      },
    },
  },
  plugins: [],
};
