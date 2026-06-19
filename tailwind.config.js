/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink:     '#0D0F13',
        panel:   '#16191F',
        hairline:'#2A2E36',
        market:  '#4FC3F7',
        model:   '#FFA94D',
        edge:    '#FF3D6E',
        paper:   '#ECEAE3',
        mute:    '#8B92A0',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        sans:    ['"IBM Plex Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
