/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{ 
        T1:['Manrope'],
        T2:['Poppins'],
        T3:['Montserrat'],    
        
      },
    },
  },
  plugins: [],
};
