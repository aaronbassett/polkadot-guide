import "@/app/styles/globals.css";

import Navbar from "@/components/Navbar";
import { config } from "@/config";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
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
      <body className="bg-base-100 text-base-content antialiased">
        <ThemeProvider defaultTheme={config.theme.lightMode} themes={config.theme.installed}>
          <div className="relative">
            <Navbar />
            <div className="relative">
              <div className="w-full">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
