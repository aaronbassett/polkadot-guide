"use client";

import { PlusGridItem } from "@/components/PlusGrid";
import { config } from "@/config";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { FC } from "react";

const ModeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <PlusGridItem className="lg:navbar-end relative hidden">
      <button
        type="button"
        className="relative flex cursor-pointer items-center px-4 py-3 font-medium text-base"
        onClick={() =>
          setTheme(
            theme === config.theme.lightMode ? config.theme.darkMode : config.theme.lightMode,
          )
        }
      >
        <Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </PlusGridItem>
  );
};

export default ModeToggle;
