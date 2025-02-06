import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { addVariablesForColors } from "./src/utils/styling";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
	theme: {
		extend: {},
	},
	plugins: [
		addVariablesForColors,
		tailwindcssAnimate,
		require("@tailwindcss/typography"),
	],
	darkMode: ["selector", '[data-mode="synthwave"]'],
} satisfies Config;

export default config;
