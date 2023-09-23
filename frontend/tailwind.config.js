/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        licorice: "#230903", 
        whitesmoke: "#f4f2f3",
        tan: "#D3B88C",
        ashgray: "#c5d8c5",
        ebony: "#656256",
      }
    },
  },
  plugins: [],
};
