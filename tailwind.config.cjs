/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0b0f14",
        carbon: "#111723",
        steel: "#1b2230",
        mist: "#aab4c3",
        gold: "#f5c84b",
        lime: "#3ddc84",
        ember: "#f97316"
      },
      fontFamily: {
        heading: ["\"Bebas Neue\"", "sans-serif"],
        sans: ["\"Manrope\"", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(245, 200, 75, 0.15)"
      }
    }
  },
  plugins: []
};
