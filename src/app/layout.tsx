import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Font configurations
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Site metadata
export const metadata: Metadata = {
	title: "Portfolio - adarsh3699",
	description: "A GitHub-inspired portfolio showcasing my work and projects",
};

// Theme initialization script
const themeScript = `
	try {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	} catch (_) {}
`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{/* Theme initialization - prevents flash of wrong theme */}
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />

				<ThemeProvider defaultTheme="light" storageKey="theme">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
