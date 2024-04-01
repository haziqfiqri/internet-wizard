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
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        duck: "url('/assets/hero/duck.webp')",
        flower: "url('/assets/hero/flower.webp')",
        flower2: "url('/assets/hero/flower2.webp')",
        cat: "url('/assets/hero/cat.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
