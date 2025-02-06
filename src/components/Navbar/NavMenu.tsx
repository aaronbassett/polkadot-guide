"use client";

import { PlusGridItem } from "@/components/PlusGrid";
import Link from "next/link";
import type { FC } from "react";

const NavMenu: FC = () => {
  return (
    <nav className="lg:navbar-center relative hidden">
      <PlusGridItem className="relative flex">
        <Link href="/" className="flex items-center px-4 py-4 font-medium text-base">
          Chapters
        </Link>
      </PlusGridItem>
      <PlusGridItem className="relative flex">
        <Link href="/" className="flex items-center px-4 py-4 font-medium text-base">
          Resources
        </Link>
      </PlusGridItem>
    </nav>
  );
};

export default NavMenu;
