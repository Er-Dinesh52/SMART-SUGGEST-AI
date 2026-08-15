/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12131A",
        paper: "#FFFFFF",
        mist: "#F6F7FB",
        line: "#E7E9F1",
        brand: {
          50: "#EEF0FF",
          100: "#DFE3FF",
          400: "#5B6CFF",
          500: "#3548FF",
          600: "#2836E0",
          700: "#1E29B3"
        },
        deal: {
          50: "#FFF1EC",
          400: "#FF7A45",
          500: "#FF5C1F",
          600: "#E64A0F"
        },
        good: "#0EA870"
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,19,26,0.04), 0 8px 24px -12px rgba(18,19,26,0.10)",
        pop: "0 20px 60px -20px rgba(53,72,255,0.35)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
