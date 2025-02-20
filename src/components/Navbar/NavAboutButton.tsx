"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { cn } from "@/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

const NavAboutButton: FC = () => {
  return (
    <Link href="/">
      <div className="z-10 flex items-center justify-center">
        <AnimatedGradientText>
          <span className="mr-2 text-xs">🎉</span>
          <span
            className={cn(
              "inline animate-gradient bg-[length:var(--bg-size)_100%] bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent text-xs",
            )}
          >
            introducing the guide
          </span>
          <ChevronRight className="ml-1 size-3 text-base-content/50 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 dark:text-neutral/50" />
        </AnimatedGradientText>
      </div>
    </Link>
  );
};

export default NavAboutButton;
