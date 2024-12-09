/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('./assets/images/hero-bg.jpg')",
        'signup-bg': "url('./assets/images/hero-bg-2.jpg')",
      },
      colors: {
        'custom-blue': '#0E384C',
      },
    },
    screens: {
      'mobile': '320px',
      'xmobile': '350px',
      '2xmobile': '520px',
      'md': '640px',
      '2md': '820px',
      'slg': '950px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('button-group', '&.button-group:hover .button-child');
    },
  ],
}
