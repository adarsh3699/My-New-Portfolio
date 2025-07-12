"use client";
import React from "react";
import { Menu, Search, Github, Mail, User, BookOpen, Info, FolderOpen, Briefcase, Sun, Moon } from "lucide-react";

export default function Header() {
	const [isDark, setIsDark] = React.useState(false);

	React.useEffect(() => {
		// Check if user has a preference stored
		const stored = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

		if (stored) {
			setIsDark(stored === "dark");
			document.documentElement.classList.toggle("dark", stored === "dark");
		} else {
			setIsDark(prefersDark);
			document.documentElement.classList.toggle("dark", prefersDark);
		}
	}, []);

	const toggleDarkMode = () => {
		const newMode = !isDark;
		setIsDark(newMode);
		document.documentElement.classList.toggle("dark", newMode);
		localStorage.setItem("theme", newMode ? "dark" : "light");
	};
	return (
		<header className="gh-bg-canvas-inset border-b gh-border sticky top-0 z-50">
			{/* Top header bar */}
			<div className="flex items-center justify-between px-4 py-4 pb-2 gh-border">
				{/* Left side - Hamburger menu, GitHub logo, username */}
				<div className="flex items-center space-x-3">
					{/* Hamburger menu - only visible on mobile */}
					<button className="p-1.5 gh-text hover:gh-text-accent transition-colors md:hidden">
						<Menu className="w-4 h-4" />
					</button>

					{/* GitHub logo */}
					<a href="/" className="flex items-center space-x-3">
						<svg className="w-8 h-8 gh-text" fill="currentColor" viewBox="0 0 16 16">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
						</svg>
						<span className="text-base font-semibold gh-text">adarsh3699</span>
					</a>
				</div>

				{/* Center - Search bar */}
				<div className="flex-1 max-w-xl mx-8">
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Search className="h-4 w-4 gh-text-muted" />
						</div>
						<input
							type="text"
							placeholder="Type / to search"
							className="w-full pl-10 pr-4 py-2 text-sm gh-bg-canvas-overlay border gh-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent gh-text placeholder-gh-text-muted"
						/>
					</div>
				</div>

				{/* Right side - Social media icons and profile */}
				<div className="flex items-center space-x-3">
					{/* Dark mode toggle */}
					<button
						onClick={toggleDarkMode}
						className="p-2 rounded-md gh-text-muted hover:gh-text-accent transition-colors gh-border-1"
						aria-label="Toggle dark mode"
					>
						{isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
					</button>

					{/* LinkedIn */}
					<a
						href="https://linkedin.com/in/adarsh3699"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-md gh-text-muted hover:gh-text-accent transition-colors gh-border-1"
					>
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>

					{/* GitHub */}
					<a
						href="https://github.com/adarsh3699"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-md gh-text-muted hover:gh-text-accent transition-colors gh-border-1"
					>
						<Github className="w-4 h-4" />
					</a>

					{/* Email */}
					<a
						href="mailto:adarsh3699@gmail.com"
						className="p-2 rounded-md gh-text-muted hover:gh-text-accent transition-colors gh-border-1"
					>
						<Mail className="w-4 h-4" />
					</a>

					{/* Profile picture */}
					<button className="flex items-center">
						<div className="w-8 h-8 rounded-full overflow-hidden gh-border-2">
							<img
								src="https://avatars.githubusercontent.com/u/52855783?v=4"
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						</div>
					</button>
				</div>
			</div>

			{/* Navigation tabs */}
			<nav className="gh-bg-canvas-default">
				<div className="flex items-center px-4">
					{/* Overview */}
					<a
						href="#overview"
						className="flex items-center px-4 py-2.5 text-sm font-medium gh-text hover:gh-text-accent transition-colors border-b-2 border-orange-500"
					>
						<BookOpen className="w-4 h-4 mr-2" />
						Overview
					</a>

					{/* About */}
					<a
						href="#about"
						className="flex items-center px-4 py-2.5 text-sm font-medium gh-text hover:gh-text-accent transition-colors border-b-2 border-transparent hover:gh-border"
					>
						<Info className="w-4 h-4 mr-2 gh-text-muted" />
						About
					</a>

					{/* Projects */}
					<a
						href="#projects"
						className="flex items-center px-4 py-2.5 text-sm font-medium gh-text hover:gh-text-accent transition-colors border-b-2 border-transparent hover:gh-border"
					>
						<FolderOpen className="w-4 h-4 mr-2 gh-text-muted" />
						Projects
						<span className="ml-2 px-2 py-1 text-xs font-medium gh-bg-neutral-muted gh-text-muted rounded-full">
							26
						</span>
					</a>

					{/* Experience */}
					<a
						href="#experience"
						className="flex items-center px-4 py-2.5 text-sm font-medium gh-text hover:gh-text-accent transition-colors border-b-2 border-transparent hover:gh-border"
					>
						<Briefcase className="w-4 h-4 mr-2 gh-text-muted" />
						Experience
					</a>

					{/* Contact */}
					<a
						href="#contact"
						className="flex items-center px-4 py-2.5 text-sm font-medium gh-text hover:gh-text-accent transition-colors border-b-2 border-transparent hover:gh-border"
					>
						<Mail className="w-4 h-4 mr-2 gh-text-muted" />
						Contact
					</a>
				</div>
			</nav>
		</header>
	);
}
