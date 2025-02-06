import dotenv from "dotenv";

dotenv.config();

interface Config {
	theme: {
		installed: string[];
		default: string;
		darkMode: string;
		lightMode: string;
	};
}

export const config: Config = {
	theme: {
		installed: process.env["THEME_INSTALLED"]?.split(",") || [
			"bumblebee",
			"synthwave",
		],
		default: process.env["THEME_DEFAULT"] || "synthwave",
		darkMode: process.env["THEME_DARK_MODE"] || "synthwave",
		lightMode: process.env["THEME_LIGHT_MODE"] || "bumblebee",
	},
};
