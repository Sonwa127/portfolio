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
        base: "#0A0A0F",
        surface: "#111118",
        card: "#1A1A2E",
        border: "#1E1E2E",
        "border-hover": "#2A2A3E",
        accent: "#6EE7B7",
        "accent-hover": "#4FD9A8",
        "text-primary": "#F0F0F0",
        "text-secondary": "#9CA3AF",
        "text-muted": "#6B7280",
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
