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
        bg: {
          primary: "#080812",
          secondary: "#0d0d1a",
          card: "#11112b",
        },
        accent: {
          purple: "#7c3aed",
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          "cyan-light": "#22d3ee",
        },
        border: {
          DEFAULT: "#1e1e3f",
          light: "#2a2a52",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #7c3aed, #06b6d4)",
        "gradient-card":
          "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.05))",
        "grid-pattern":
          "radial-gradient(circle, rgba(124,58,237,0.15) 1px, transparent 1px)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(124,58,237,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(6,182,212,0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
