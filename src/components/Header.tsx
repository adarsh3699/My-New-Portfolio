"use client";

// React Imports
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Icon Imports
import { Menu, Github, Mail, BookOpen, Info, FolderOpen, Briefcase, Sun, Moon } from "lucide-react";

// Component Imports
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import Tooltip from "./ui/Tooltip";
import { useTheme } from "./theme-provider";

// Types
interface SocialLink {
	href: string;
	tooltip: string;
	external?: boolean;
	icon: React.ReactNode;
}

interface NavItem {
	href: string;
	label: string;
	icon: React.ComponentType<{ className?: string }>;
	isActive?: boolean;
	badge?: string;
}

export default function Header() {
	// Theme and State
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Effects
	React.useEffect(() => {
		setMounted(true);
	}, []);

	// Event Handlers
	const toggleDarkMode = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("submitted");
	};

	// Configuration
	const searchPlaceholders = [
		"Search projects...",
		"Find experience...",
		"Explore tech stack...",
		"Discover about me...",
		"Contact information...",
	];

	const socialLinks: SocialLink[] = [
		{
			href: "https://linkedin.com/in/adarsh3699",
			tooltip: "LinkedIn Profile",
			external: true,
			icon: (
				<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			),
		},
		{
			href: "https://github.com/adarsh3699",
			tooltip: "GitHub Profile",
			external: true,
			icon: <Github className="w-4 h-4" />,
		},
		{
			href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adarsh3699@gmail.com",
			tooltip: "Send Email",
			icon: <Mail className="w-4 h-4" />,
		},
	];

	const navItems: NavItem[] = [
		{ href: "#overview", label: "Overview", icon: BookOpen, isActive: true },
		{ href: "#about", label: "About", icon: Info },
		{ href: "#projects", label: "Projects", icon: FolderOpen, badge: "26" },
		{ href: "#experience", label: "Experience", icon: Briefcase },
		{ href: "#contact", label: "Contact", icon: Mail },
	];

	// Render Methods
	const renderMobileMenuButton = () => (
		<Tooltip content="Open navigation menu">
			<button className="p-1.5 gh-text hover:gh-text-accent transition-colors md:hidden">
				<Menu className="w-4 h-4" />
			</button>
		</Tooltip>
	);

	const renderLogo = () => (
		<Link href="/" className="flex items-center space-x-3 transition-all duration-200 transform hover:scale-105">
			<svg className="w-7 h-7 gh-text" fill="currentColor" viewBox="0 0 16 16">
				<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
			</svg>
			<span className="text-sm font-bold gh-text">adarsh3699</span>
		</Link>
	);

	const renderSearchBar = () => (
		<div className="max-w-sm">
			<PlaceholdersAndVanishInput
				placeholders={searchPlaceholders}
				onChange={handleSearchChange}
				onSubmit={handleSearchSubmit}
			/>
		</div>
	);

	const renderThemeToggle = () => (
		<Tooltip
			content={mounted ? (theme === "dark" ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
		>
			<button
				onClick={toggleDarkMode}
				className="p-2 gh-border-1 rounded-md gh-text-muted hover:gh-text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
				aria-label="Toggle dark mode"
			>
				{theme === "dark" ? (
					<Sun className="w-4 h-4 transform transition-transform duration-300 group-hover:scale-110" />
				) : (
					<Moon className="w-4 h-4 transform transition-transform duration-300 group-hover:scale-110" />
				)}
			</button>
		</Tooltip>
	);

	const renderSocialLinks = () => (
		<>
			{socialLinks.map((link, index) => (
				<Tooltip key={index} content={link.tooltip}>
					<Link
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 gh-border-1 rounded-md gh-text-muted hover:gh-text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
					>
						<div className="transform transition-transform duration-300 group-hover:scale-110">
							{link.icon}
						</div>
					</Link>
				</Tooltip>
			))}
		</>
	);

	const renderProfilePicture = () => (
		<Tooltip content="View Profile">
			<button className="group hover:bg-gray-100transition-all p-1 rounded-md">
				<div className="w-8 h-8 rounded-full overflow-hidden border border-gh-border-muted transform transition-transform duration-300 group-hover:scale-105">
					<Image
						src="/images/profile-avatar.jpg"
						alt="Profile"
						width={32}
						height={32}
						className="w-full h-full object-cover"
					/>
				</div>
			</button>
		</Tooltip>
	);

	const renderNavigationTabs = () => (
		<nav className="border-gh-border-muted">
			<div className="flex items-center px-4">
				{navItems.map((item, index) => {
					const IconComponent = item.icon;
					return (
						<Link
							key={index}
							href={item.href}
							className={`flex h-11 items-center px-4 py-2 text-sm font-medium gh-text hover:gh-text-accent transition-all border-b-2 transform ${
								item.isActive
									? "border-orange-500 gh-text-accent"
									: "border-transparent hover:border-gh-border-muted"
							}`}
						>
							<IconComponent className="w-4 h-4 mr-2 gh-text-muted" />
							{item.label}
							{item.badge && (
								<span className="ml-2 px-2 py-1 text-xs font-medium gh-bg-neutral-muted gh-text-muted rounded-full">
									{item.badge}
								</span>
							)}
						</Link>
					);
				})}
			</div>
		</nav>
	);

	// Main Render
	return (
		<header className="gh-bg-canvas-inset border-b gh-border sticky top-0 z-50">
			{/* Main Header Bar */}
			<div className="flex items-center justify-between px-4 py-4 pb-2 gh-border">
				{/* Left Section */}
				<div className="flex items-center space-x-3">
					{renderMobileMenuButton()}
					{renderLogo()}
				</div>

				{/* Right Section */}
				<div className="flex items-center space-x-3">
					{renderSearchBar()}
					{renderThemeToggle()}
					{renderSocialLinks()}
					{renderProfilePicture()}
				</div>
			</div>

			{/* Navigation Tabs */}
			{renderNavigationTabs()}
		</header>
	);
}
