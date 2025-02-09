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
        xs: ['1.25rem', { letterSpacing: '0.07em', lineHeight: '1.1em' }],
        sm: ['1.5rem', { letterSpacing: '0.06em', lineHeight: '1.1em' }],
        base: ['1.5rem', { letterSpacing: '0.05em', lineHeight: '1.1em' }],
        lg: ['2.25rem', { letterSpacing: '0.05em', lineHeight: '1.1em' }],
        xl: ['3rem', { letterSpacing: '0.05em', lineHeight: '1.1em' }],
        '2xl': ['3.5rem', { letterSpacing: '0.05em', lineHeight: '1.1em' }],
        '3xl': ['4rem', { letterSpacing: '0.05em', lineHeight: '1.1em' }],
      }
    },
  }
} satisfies Config;
