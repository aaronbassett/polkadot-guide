"use client";

import Link from "next/link";
import type { FC } from "react";

import { LineShadowText } from "@/components/ui/line-shadow-text";
import { config } from "@/config";
import { useTheme } from "next-themes";

const NavLogo: FC = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme !== config.theme.lightMode ? "white" : "black";

  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <h1 className="text-balance font-bold font-unbounded text-lg tracking-tighter sm:text-lg md:text-xl lg:text-2xl">
          Polkadot
          <LineShadowText className="italic" shadowColor={shadowColor}>
            Guide
          </LineShadowText>
        </h1>
      </div>
    </Link>
  );
};

export default NavLogo;
