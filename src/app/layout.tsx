import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, Header, Footer } from "@/components/layout";
import "../styles/globals.css";

// Font configurations with performance optimizations
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});

// Site metadata
export const metadata: Metadata = {
	title: "Portfolio - adarsh3699",
	description: "A GitHub-inspired portfolio showcasing my work and projects",
	icons: {
		icon: "/myLogo.webp",
		shortcut: "/myLogo.webp",
		apple: "/myLogo.webp",
	},
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
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Preload critical resources to prevent layout shifts */}
				<link rel="dns-prefetch" href="https://api.github.com" />
				<link rel="preconnect" href="https://api.github.com" crossOrigin="anonymous" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
				<ThemeProvider defaultTheme="light" storageKey="theme">
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
