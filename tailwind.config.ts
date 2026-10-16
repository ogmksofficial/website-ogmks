import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        franklin: ["var(--font-franklin)", "sans-serif"],
        metropolis: ["var(--font-metropolis)", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#0a0a0a",
          red: "#991b1b",
          gold: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
