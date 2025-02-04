import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { addVariablesForColors } from "./src/utils/styling";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors, tailwindcssAnimate, require("@tailwindcss/typography"), daisyui],
  daisyui: {
    themes: ["cupcake", "synthwave"],
    darkTheme: "synthwave",
    base: true,
    styled: true,
    utils: true,
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  darkMode: ["selector", '[data-mode="synthwave"]'],
} satisfies Config;

export default config;
