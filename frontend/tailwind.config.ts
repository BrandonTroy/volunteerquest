import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F89E75",
        "primary-dark": "#cd7b56",
        "background": "#4D4D5A",
        "background-light": "#6E6C72",
        "background-accent": "#8A7F7E",
        "foreground": "white",
        "theme-red": "#DE8585",
        "theme-orange": "#F89E75",
        "theme-tan": "#FFC68C",
        "theme-yellow": "#FFEB9E",
        "theme-green": "#91B898",
        "theme-purple": "#676083",
      },
      fontFamily: {
        sans: ["Jersey 10", "Arial", "Helvetica", "sans-serif"],
        serif: ["Jersey 10", "serif"],
      },
      fontSize: {
        xs: '1.25rem',
        sm: '1.5rem',
        base: '1.75rem',
        lg: '2.5rem',
        xl: '3rem',
        '2xl': '3.5rem'
      }
    },
  },
  plugins: [],
} satisfies Config;
