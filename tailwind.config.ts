/**
 * Tailwind Configuration
 * Extends Tailwind with CSS variable references for dynamic theming
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Reference CSS variables for dynamic theming
        background: "var(--bg-color)",
        foreground: "var(--text-color)",
        primary: "var(--primary-color)",
        accent: "var(--accent-color)",
      },
      fontFamily: {
        sans: ["var(--font-family)"],
      },
      borderRadius: {
        dynamic: "var(--border-radius)",
      },
      spacing: {
        dynamic: "var(--spacing)",
      },
      transitionDuration: {
        dynamic: "var(--animation-duration)",
      },
    },
  },
  plugins: [],
};

export default config;
