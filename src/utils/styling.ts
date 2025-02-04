import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// biome-ignore lint/suspicious/noExplicitAny: from https://ui.aceternity.com/docs/add-utilities
const addVariablesForColors = ({ addBase, theme }: any) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
};

export { addVariablesForColors, cn };
