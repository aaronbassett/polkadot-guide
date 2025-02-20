"use client";

import type { FC } from "react";
import { MobileNavButton } from "./MobileNav";
import ModeToggle from "./ModeToggle";
import NavAboutButton from "./NavAboutButton";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

import { PlusGrid, PlusGridItem, PlusGridRow } from "@/components/PlusGrid";

const Navbar: FC = () => {
  return (
    <div className="glass fixed top-12 z-100 w-full px-6 shadow-none backdrop-blur-xs sm:top-16 lg:px-8 dark:bg-linear-135 dark:from-neutral-700/30 dark:to-neutral-500/0">
      <PlusGrid>
        <PlusGridRow className="relative flex">
          <div className="navbar-start relative flex gap-6">
            <PlusGridItem className="py-3">
              <NavLogo />
            </PlusGridItem>
            <div className="relative hidden items-center py-3 lg:flex">
              <NavAboutButton />
            </div>
          </div>
          <NavMenu />
          <MobileNavButton />
          <ModeToggle />
        </PlusGridRow>
      </PlusGrid>
    </div>
  );
};

export default Navbar;
