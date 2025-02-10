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
        "azure-radiance": {
          50: "#edfaff",
          100: "#d6f2ff",
          200: "#b5eaff",
          300: "#83dfff",
          400: "#48cbff",
          500: "#1eadff",
          600: "#068fff",
          700: "#007bff",
          800: "#085ec5",
          900: "#0d519b",
          950: "#0e315d",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
