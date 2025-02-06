"use client";

import type { FC } from "react";
import { MobileNavButton } from "./MobileNav";
import ModeToggle from "./ModeToggle";
import NavMenu from "./NavMenu";

import { PlusGrid, PlusGridItem, PlusGridRow } from "@/components/PlusGrid";

const Navbar: FC = () => {
	return (
		<div className="fixed top-12 sm:top-16 z-50 w-full px-6 lg:px-8 glass shadow-none backdrop-blur-md">
			<PlusGrid>
				<PlusGridRow className="relative flex justify-between">
					<div className="relative flex gap-6">
						<PlusGridItem className="py-3">Logo</PlusGridItem>
						<div className="relative hidden items-center py-3 lg:flex">
							button
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
