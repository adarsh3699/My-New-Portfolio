import Link from "next/link";
import { CalendarIcon, StarIcon, TagIcon, LinkIcon, EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, useRef, useCallback } from "react";

interface ProjectSidebarProps {
	project: {
		featured?: boolean;
		description: string;
		longDescription?: string;
		category: string;
		technologies: string[];
		primaryLanguage: { name: string; color: string };
		createdAt: string;
		githubUrl?: string;
		liveUrl?: string;
	};
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
	const [showSticky, setShowSticky] = useState(true);
	const [topOffset, setTopOffset] = useState(0);
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	// Performance optimization refs
	const screenshotsRef = useRef<Element | null>(null);
	const scrollTimeoutRef = useRef<number | null>(null);
	const resizeTimeoutRef = useRef<number | null>(null);

	// Memoized screen size check
	const checkScreenSize = useCallback(() => {
		setIsLargeScreen(window.innerWidth >= 1024);
	}, []);

	// Throttled scroll handler for better performance
	const handleScroll = useCallback(() => {
		// Cancel previous timeout to throttle
		if (scrollTimeoutRef.current) {
			cancelAnimationFrame(scrollTimeoutRef.current);
		}

		scrollTimeoutRef.current = requestAnimationFrame(() => {
			// Cache DOM query
			if (!screenshotsRef.current) {
				screenshotsRef.current = document.querySelector('[data-component="project-screenshots"]');
			}

			const screenshots = screenshotsRef.current;
			if (!screenshots) {
				setShowSticky(false);
				return;
			}

			const rect = screenshots.getBoundingClientRect();
			const shouldBeSticky = rect.bottom > 74;

			// Only update if state actually changed (prevent unnecessary re-renders)
			if (showSticky !== shouldBeSticky) {
				// Calculate offset when switching from sticky to relative
				if (showSticky && !shouldBeSticky) {
					const offset = project.featured ? rect.height - 74 : rect.height + 48;
					setTopOffset(offset);
				}
				setShowSticky(shouldBeSticky);
			}
		});
	}, [showSticky, project.featured]);

	// Debounced resize handler
	const handleResize = useCallback(() => {
		// Clear previous timeout
		if (resizeTimeoutRef.current) {
			clearTimeout(resizeTimeoutRef.current);
		}

		// Debounce resize events
		resizeTimeoutRef.current = window.setTimeout(() => {
			checkScreenSize();
			// Clear cached element on resize (it might change)
			screenshotsRef.current = null;
		}, 100);
	}, [checkScreenSize]);

	useEffect(() => {
		// Initial setup
		checkScreenSize();
		handleScroll();

		// Use passive listeners for better performance
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			// Cleanup event listeners
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);

			// Cleanup timeouts
			if (scrollTimeoutRef.current) {
				cancelAnimationFrame(scrollTimeoutRef.current);
			}
			if (resizeTimeoutRef.current) {
				clearTimeout(resizeTimeoutRef.current);
			}
		};
	}, [handleScroll, handleResize, checkScreenSize]);

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div
			className={`space-y-6 ${
				showSticky ? (project.featured ? "lg:sticky lg:top-0" : "lg:sticky lg:top-8") : ""
			}`}
			style={{ marginTop: showSticky ? 0 : isLargeScreen ? `${topOffset}px` : 0 }}
		>
			{/* Featured Badge */}
			{project.featured && (
				<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4 relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5" />
					<div className="relative">
						<div className="flex items-center gap-2 mb-2">
							<div className="p-1 rounded-full bg-yellow-500/20">
								<StarIcon className="w-4 h-4 text-yellow-500" />
							</div>
							<span className="font-semibold gh-text text-sm">Featured Project</span>
						</div>
						<p className="text-xs gh-text-muted">
							This project has been highlighted as one of my best works.
						</p>
					</div>
				</div>
			)}

			{/* About */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4 hover:gh-bg-canvas-inset transition-colors duration-200">
				<h3 className="font-semibold gh-text mb-3 flex items-center gap-2">
					<div className="w-1 h-4 bg-blue-500 rounded-full" />
					About
				</h3>
				<p className="text-sm gh-text-muted mb-4 leading-relaxed">{project.description}</p>

				{project.longDescription && (
					<p className="text-sm gh-text-muted leading-relaxed">{project.longDescription}</p>
				)}
			</div>

			{/* Technologies */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4 hover:gh-bg-canvas-inset transition-colors duration-200">
				<div className="flex items-center gap-2 mb-4">
					<div className="p-1 rounded-full bg-blue-500/20">
						<TagIcon className="w-4 h-4 gh-text-muted" />
					</div>
					<h3 className="font-semibold gh-text">Technologies</h3>
					<span className="text-xs gh-text-muted bg-blue-500/20 px-2 py-1 rounded-full">
						{project.technologies.length}
					</span>
				</div>
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className="text-xs px-3 py-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Project Info */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4 hover:gh-bg-canvas-inset transition-colors duration-200">
				<div className="flex items-center gap-2 mb-4">
					<div className="p-1 rounded-full bg-green-500/20">
						<CalendarIcon className="w-4 h-4 gh-text-muted" />
					</div>
					<h3 className="font-semibold gh-text">Project Info</h3>
				</div>
				<div>
					<div className="flex items-center justify-between p-2 rounded-md hover:gh-bg-canvas-subtle transition-colors">
						<span className="text-sm gh-text-muted flex items-center gap-2">
							<CalendarIcon className="w-3 h-3" />
							Created
						</span>
						<span className="text-sm gh-text font-medium">{formatDate(project.createdAt)}</span>
					</div>
					<div className="flex items-center justify-between p-2 rounded-md hover:gh-bg-canvas-subtle transition-colors">
						<span className="text-sm gh-text-muted flex items-center gap-2">
							<TagIcon className="w-3 h-3" />
							Category
						</span>
						<span className="text-sm gh-text font-medium bg-blue-500/20 px-2 py-1 rounded-full">
							{project.category}
						</span>
					</div>
				</div>
			</div>

			{/* Links */}
			{(project.liveUrl || project.githubUrl) && (
				<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4 hover:gh-bg-canvas-inset transition-colors duration-200">
					<div className="flex items-center gap-2 mb-4">
						<div className="p-1 rounded-full bg-purple-500/20">
							<LinkIcon className="w-4 h-4 gh-text-muted" />
						</div>
						<h3 className="font-semibold gh-text">Quick Links</h3>
					</div>
					<div>
						{project.liveUrl && (
							<Link
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm gh-text-accent hover:underline p-2 rounded-md hover:gh-bg-canvas-subtle transition-colors group"
							>
								<EyeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span>Live Demo</span>
							</Link>
						)}
						{project.githubUrl && (
							<Link
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm gh-text-accent hover:underline p-2 rounded-md hover:gh-bg-canvas-subtle transition-colors group"
							>
								<CodeBracketIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
								<span>Source Code</span>
							</Link>
						)}
					</div>
				</div>
			)}

			{/* Primary Language */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4 hover:gh-bg-canvas-inset transition-colors duration-200">
				<h3 className="font-semibold gh-text mb-3 flex items-center gap-2">
					<div className="w-1 h-4 bg-orange-500 rounded-full" />
					Primary Language
				</h3>
				<div className="flex items-center gap-3 p-3 rounded-md bg-gradient-to-r from-orange-500/5 to-transparent">
					<div className={`w-3 h-3 rounded-full ${project.primaryLanguage.color} ring-2 ring-white/20`} />
					<span className="text-sm gh-text font-medium">{project.primaryLanguage.name}</span>
				</div>
			</div>
		</div>
	);
}
