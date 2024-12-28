import type { Config } from "tailwindcss";

export default {
  // Need to Define the Path Where we are gonna use Tailwind CSS
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cinzel: ["cinzel", "serif"],
        cursive: ["Edu AU VIC WA NT Hand",],
        bodoni: ["Bodoni"],
        montserrat: ["Montserrat"],
        northwell: ['Northwell'],
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
} satisfies Config;
