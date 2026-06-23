import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#ffffff",
          muted: "#f8f6fa",
          soft: "#f0ebf4",
          card: "#ffffff",
        },
        charcoal: {
          DEFAULT: "#2f2f2e",
          muted: "#6b6b6b",
        },
        olive: {
          DEFAULT: "#5d4e67",
          dark: "#4a3d52",
          accent: "#1a1a1a",
          light: "#8a7a94",
        },
        copper: "#5d4e67",
        slate: "#4a5568",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1140px",
      },
      boxShadow: {
        card: "0 8px 32px rgba(47, 47, 46, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.65)",
        lift: "0 16px 48px rgba(47, 47, 46, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
        glass: "0 8px 32px rgba(47, 47, 46, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.65)",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("motion-safe", "@media (prefers-reduced-motion: no-preference)");
    }),
  ],
};

export default config;
