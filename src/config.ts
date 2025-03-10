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
    installed: process.env["THEME_INSTALLED"]?.split(",") || ["cupcake", "night"],
    default: process.env["THEME_DEFAULT"] || "cupcake",
    darkMode: process.env["THEME_DARK_MODE"] || "night",
    lightMode: process.env["THEME_LIGHT_MODE"] || "cupcake",
  },
};
