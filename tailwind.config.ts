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
        base: "#FBF6F3",
        surface: "#F6E9EC",
        card: "#F1DDE3",
        border: "#E8D2D8",
        "border-hover": "#D9AEBB",
        accent: "#5C1B32",
        "accent-hover": "#4A1428",
        "accent-rose": "#C97B8B",
        "text-primary": "#2B2024",
        "text-secondary": "#6B565C",
        "text-muted": "#8A7378",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;