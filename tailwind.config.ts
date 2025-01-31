import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          border: "hsl(var(--b3))",
          input: "hsl(var(--b2))",
          ring: "hsl(var(--s))",
          background: "hsl(var(--b1))",
          foreground: "hsl(var(--bc))",
          primary: {
            DEFAULT: "hsl(var(--p))",
            foreground: "hsl(var(--pc))",
          },
          secondary: {
            DEFAULT: "hsl(var(--s))",
            foreground: "hsl(var(--sc))",
          },
          destructive: {
            DEFAULT: "hsl(var(--wa))",
            foreground: "hsl(var(--wc))",
          },
          muted: {
            DEFAULT: "hsl(var(--n))",
            foreground: "hsl(var(--nc))",
          },
          accent: {
            DEFAULT: "hsl(var(--a))",
            foreground: "hsl(var(--ac))",
          },
          popover: {
            DEFAULT: "hsl(var(--b3))",
            foreground: "hsl(var(--bc))",
          },
          card: {
            DEFAULT: "hsl(var(--b2))",
            foreground: "hsl(var(--bc))",
          },
        },
        borderRadius: {
          lg: "var(--radius-lg)",
          md: "var(--radius-md)",
          sm: "var(--radius-sm)",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
