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
        // Brand colors
        primary: {
          DEFAULT: "#8B4513",
          light: "#A0522D",
          dark: "#6B3410",
        },
        secondary: {
          DEFAULT: "#F5F5DC",
          light: "#FFFFF0",
          dark: "#E8E8C8",
        },
        accent: {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
          dark: "#B8962F",
        },
        // Text colors
        text: {
          DEFAULT: "#333333",
          light: "#666666",
          muted: "#999999",
        },
        // UI colors
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        border: "#E5E5E5",
        // Background
        background: "#FFFFFF",
        "background-alt": "#FAFAFA",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Desktop / Mobile sizes
        "h1": ["3rem", { lineHeight: "1.2" }],      // 48px
        "h1-mobile": ["2rem", { lineHeight: "1.2" }], // 32px
        "h2": ["2.25rem", { lineHeight: "1.2" }],  // 36px
        "h2-mobile": ["1.75rem", { lineHeight: "1.2" }], // 28px
        "h3": ["1.5rem", { lineHeight: "1.2" }],   // 24px
        "h3-mobile": ["1.25rem", { lineHeight: "1.2" }], // 20px
        "body": ["1rem", { lineHeight: "1.6" }],   // 16px
        "small": ["0.875rem", { lineHeight: "1.6" }], // 14px
        "xs": ["0.75rem", { lineHeight: "1.5" }],  // 12px
      },
      spacing: {
        // 8px base scale
        "xs": "0.5rem",    // 8px
        "sm": "1rem",      // 16px
        "md": "1.5rem",    // 24px
        "lg": "2rem",      // 32px
        "xl": "3rem",      // 48px
        "2xl": "4rem",     // 64px
        "3xl": "5rem",     // 80px
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
      },
      boxShadow: {
        "sm": "0 2px 4px rgba(0,0,0,0.08)",
        "md": "0 4px 12px rgba(0,0,0,0.1)",
        "lg": "0 8px 24px rgba(0,0,0,0.12)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.25rem",
          lg: "2.5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
      gridTemplateColumns: {
        // 12-column grid
        "12": "repeat(12, minmax(0, 1fr))",
      },
      gap: {
        "gutter": "1.5rem",      // 24px desktop
        "gutter-sm": "1rem",     // 16px mobile
        "gutter-xs": "1.25rem",  // 20px tablet
      },
      transitionDuration: {
        "fast": "150ms",
        "normal": "200ms",
        "slow": "300ms",
      },
    },
  },
  plugins: [],
};
export default config;
