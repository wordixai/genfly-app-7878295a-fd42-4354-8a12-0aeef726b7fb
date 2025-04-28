import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#25D366",
        secondary: "#128C7E",
        dark: "#075E54",
        light: "#DCF8C6",
        accent: "#34B7F1",
      },
    },
  },
  plugins: [],
};

export default config;