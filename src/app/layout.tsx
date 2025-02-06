import "@/app/styles/globals.css";

import { Navbar } from "@/components/Navbar/navbar";
import { config } from "@/config";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
export const metadata: Metadata = {
	title: "The Polkadot Guide - Creating a Decentralized Future",
	description:
		"The Polkadot Guide is a comprehensive guide to creating a decentralized application with the Polkadot SDK",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="text-base-content antialiased bg-base-100">
				<ThemeProvider
					defaultTheme={config.theme.lightMode}
					themes={config.theme.installed}
				>
					<div className="relative">
						<div className="relative px-6 lg:px-8">
							<div className="mx-auto max-w-2xl lg:max-w-7xl">
								<Navbar
									banner={
										<Link
											href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
											className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
										>
											Radiant raises $100M Series A from Tailwind Ventures
											<ChevronRightIcon className="size-4" />
										</Link>
									}
								/>
								{children}
							</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
