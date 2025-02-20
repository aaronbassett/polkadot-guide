"use client";

import Link from "next/link";
import type { FC } from "react";

import { LineShadowText } from "@/components/ui/line-shadow-text";

const NavLogo: FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <h1 className="text-balance font-bold font-unbounded text-lg tracking-tighter sm:text-lg md:text-xl lg:text-2xl">
          Polkadot
          <LineShadowText className="italic" shadowColor="black">
            Guide
          </LineShadowText>
        </h1>
      </div>
    </Link>
  );
};

export default NavLogo;
