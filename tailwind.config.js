/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        100: '#FFFFFF',
        200: '#F3F3F3',
        300: '#E3E3E3',
        400: '#243A2C',
        500: '#181F1B',
        600: '#161D25',
        700: '#100f0f',
        800: '#000000',
      },
      secondary: {
        100: '#BBE5C9',
        200: '#B4ECD2',
        300: '#93D1B5',
        400: '#64B992',
        500: '#58BF73',
        600: '#1F8E3D',
        700: '#072713',
        800: '#010C23',
      },
    },
    container: {
      padding: {
        DEFAULT: '.5rem',
        xs: '1rem',
        xl: '2rem',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif', 'system-ui'],
      ibm: ['IBM Plex Sans', 'sans-serif'],
      default: ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      screens: {
        xs: '460px',
      },
    },
  },
  plugins: [],
};
