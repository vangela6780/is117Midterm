import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#d9bf93",
        clay: "#7a3d22",
        ash: "#2d312f",
        mist: "#e8e1d6",
        ochre: "#c68b2e",
        teal: "#2f7f78",
        rust: "#b5412e"
      },
      boxShadow: {
        museum: "12px 12px 0 rgba(28, 28, 28, 0.18)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(45,49,47,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(45,49,47,0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;