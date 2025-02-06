"use client";

import { PlusGridItem } from "@/components/PlusGrid";
import Link from "next/link";
import type { FC } from "react";

const NavMenu: FC = () => {
	return (
		<nav className="relative hidden lg:flex">
			<PlusGridItem className="relative flex">
				<Link
					href="#"
					className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
				>
					Chapters
				</Link>
			</PlusGridItem>
			<PlusGridItem className="relative flex">
				<Link
					href="#"
					className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
				>
					Resources
				</Link>
			</PlusGridItem>
		</nav>
	);
};

export default NavMenu;
