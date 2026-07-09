import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#131313",        // near-black headings
        btn: {
          DEFAULT: "#131313",  // primary button
          text: "#BEFFCF",     // green button label rgb(190,255,207)
        },
        mint: {
          DEFAULT: "#D6FCE1",  // hero green box / announcement bar
          light: "#EDFAF0",    // right side of hero gradient
        },
        card: "#FAFAFA",       // feature card background
        line: "#E9E9E9",       // hairline borders
        muted: "#5B6B75",      // body text
        slate: "#2C3444",      // feature desc text
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1200px",
      },
      borderRadius: {
        card: "20px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
