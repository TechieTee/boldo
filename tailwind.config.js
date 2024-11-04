/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  rules: [
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      type: 'asset/resource',
    },
  ],
  theme: {
    extend: {
      bgimage:{
        'contact-bg':"url('/assets/bgcontact.png')",

      },
      fontSize: {
        'lg': 'clamp(2rem, 2vw + 1rem, 4.5rem)', 
        'md': 'clamp(1rem, 1.5vw + 0.5rem, 1.75rem)',
        'sm': 'clamp(0.875rem, 1vw + 0.25rem, 1.25rem)',
      },
      
      colors:{
        primary:'#0A2640',

      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
         sans: ['"Open Sans"', 'sans-serif'],
      },
      zIndex: {
        '60': 60,
        '70': 70,
        // Add more as needed
      },
    },
  },
  plugins: [],
}

