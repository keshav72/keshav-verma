/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}", // optional if you use /sections
  ],
  theme: {
    extend: {
      // Optional: customize breakpoints if needed
      screens: {
        xs: '360px', // mobile fallback
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // for consistent image scaling
  ],
};
