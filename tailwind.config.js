/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-cyan": {
          DEFAULT: "hsl(172, 67%, 45%)",
          100: "hsl(189, 41%, 97%)",
          200: "hsl(185, 41%, 84%)",
          300: "hsl(184, 14%, 56%)",
          400: "hsl(186, 14%, 43%)",
          500: "hsl(183, 100%, 15%)"
        },
        "custom-btn": {
          DEFAULT: "hsl(173, 60% ,76%)"
        },
        "custom-alert": {
          DEFAULT: "hsl(6, 75%, 65%)"
        }
      },
      fontFamily: {
        "mono": "'Space Mono', monospace"
      },
      maxWidth: {
        "data-per-person": "10ch"
      }
    },
  },
  plugins: [],
}

