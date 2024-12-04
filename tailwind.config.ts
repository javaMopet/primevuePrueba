/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Archivos de Vue y TypeScript
    './node_modules/primevue/**/*.{js,ts}', // Archivos PrimeVue
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
};
