import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Open Lab - Sowndharya Lakshmi G",
	description: "Roll Number: CB.SC.I5DAS21158",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
          <div className="flex flex-col justify-between items-center w-full h-full">
					<Header />
					{children}
					<Footer />
          </div>
				</ThemeProvider>
			</body>
		</html>
	);
}
