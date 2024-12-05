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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        dash: {
          '0%': { 'stroke-dashoffset': '0' },
          '100%': { 'stroke-dashoffset': '100' },
        },
      },
      animation: {
        'dash': 'dash 2s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
