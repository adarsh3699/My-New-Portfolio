import Link from "next/link";
import { CodeBracketIcon, GlobeAltIcon, StarIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { languageColors, Project } from "@/data";
import { ViewMode } from "@/app/projects/page";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

// Constants
const MOBILE_BREAKPOINT = 768;

// Custom hook for mobile click handling
const useMobileNavigation = (projectId: string) => {
	const router = useRouter();

	return useCallback(
		(e: React.MouseEvent) => {
			// Only handle click on mobile (screen width < 768px)
			if (window.innerWidth < MOBILE_BREAKPOINT) {
				// Prevent if clicking on a link or button
				if ((e.target as HTMLElement).closest("a, button")) return;
				router.push(`/projects/${projectId}`);
			}
		},
		[router, projectId]
	);
};

const formatCreatedTime = (dateString: string) => {
	const date = new Date(dateString);
	const now = new Date();
	const diffTime = Math.abs(now.getTime() - date.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays === 1) return "1 day ago";
	if (diffDays < 30) return `${diffDays} days ago`;
	if (diffDays < 365) {
		const months = Math.floor(diffDays / 30);
		return `${months} month${months > 1 ? "s" : ""} ago`;
	}
	const years = Math.floor(diffDays / 365);
	return `${years} year${years > 1 ? "s" : ""} ago`;
};

interface ProjectCardProps {
	project: Project;
	viewMode: ViewMode;
}

export function ProjectCard({ project, viewMode }: ProjectCardProps) {
	const languageColorClass = languageColors[project.primaryLanguage.name] || "bg-gray-500";
	const handleMobileClick = useMobileNavigation(project.id);
	// Grid view optimized layout
	if (viewMode === "grid") {
		return (
			<div
				onClick={handleMobileClick}
				className="group gh-bg-canvas-overlay border gh-border rounded-xl overflow-hidden hover:gh-bg-canvas-subtle hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out h-fit p-5 cursor-pointer md:cursor-default"
				role="listitem"
			>
				{/* Header */}
				<div className="flex items-start justify-between mb-3">
					<div className="min-w-0 flex-1">
						<h2 className="text-lg font-bold mb-2 truncate">
							<Link
								href={`/projects/${project.id}`}
								className="gh-text-accent hover:underline decoration-2 underline-offset-2"
							>
								{project.name}
							</Link>
						</h2>

						{/* Status Badges */}
						<div className="flex items-center gap-2 mb-2">
							{project.featured && (
								<span className="flex items-center gap-1 text-xs px-2 py-1 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 rounded-full border border-yellow-200 dark:from-yellow-900/20 dark:to-amber-900/20 dark:text-yellow-400 dark:border-yellow-800/30">
									<StarIcon className="w-3 h-3" />
									Featured
								</span>
							)}
							<div>
								<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
									{project.category}
								</span>
							</div>
						</div>
					</div>

					{/* Quick Actions */}
					<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="p-1.5 rounded-lg gh-bg-canvas-default hover:gh-bg-accent-subtle transition-colors border gh-border-subtle"
								title="View on GitHub"
							>
								<CodeBracketIcon className="w-3.5 h-3.5 gh-text-muted hover:gh-text-accent" />
							</a>
						)}
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="p-1.5 rounded-lg gh-bg-canvas-default hover:gh-bg-accent-subtle transition-colors border gh-border-subtle"
								title="View Live Demo"
							>
								<GlobeAltIcon className="w-3.5 h-3.5 gh-text-muted hover:gh-text-accent" />
							</a>
						)}
					</div>
				</div>

				{/* Description */}
				<p className="gh-text-muted text-sm mb-4 leading-relaxed line-clamp-3 min-h-[3.75rem]">
					{project.description}
				</p>

				{/* Technologies */}
				{project.technologies.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mb-4">
						{project.technologies.slice(0, 4).map((tech) => (
							<span
								key={tech}
								className="inline-flex items-center text-xs px-2 py-1 rounded-full border transition-all duration-200 hover:scale-105 gh-bg-canvas-default hover:gh-bg-accent-subtle gh-text border-gray-200 dark:border-gray-700"
							>
								{tech}
							</span>
						))}
						{project.technologies.length > 4 && (
							<span className="text-xs px-2 py-1 gh-text-muted rounded-full border border-dashed border-gray-300 dark:border-gray-600">
								+{project.technologies.length - 4}
							</span>
						)}
					</div>
				)}

				{/* Footer */}
				<div className="flex items-center justify-between pt-3 mt-3 border-t gh-border-subtle">
					<div className="flex items-center gap-3 text-xs gh-text-muted">
						<div className="flex items-center gap-1">
							<div className={`w-2.5 h-2.5 rounded-full ${languageColorClass}`} />
							<span className="font-medium">{project.primaryLanguage.name}</span>
						</div>
					</div>

					{/* View Details Link */}
					<Link
						href={`/projects/${project.id}`}
						className="text-xs font-medium gh-text-accent hover:underline decoration-2 underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					>
						View →
					</Link>
				</div>
			</div>
		);
	}

	// List view (original layout)
	return (
		<div
			onClick={handleMobileClick}
			className="select-none md:select-text group gh-bg-canvas-overlay border gh-border rounded-xl overflow-hidden hover:gh-bg-canvas-subtle hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out p-4 sm:p-6 cursor-pointer md:cursor-default"
			role="listitem"
		>
			{/* Header with Status Badges */}
			<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-3 sm:gap-0">
				<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0 flex-1">
					<h2 className="text-lg sm:text-xl font-bold">
						<Link
							href={`/projects/${project.id}`}
							className="gh-text-accent hover:underline decoration-2 underline-offset-2"
						>
							{project.name}
						</Link>
					</h2>
					<div className="flex items-center gap-2 flex-wrap">
						{project.featured && (
							<span className="flex items-center gap-1 text-xs px-2 py-1 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 rounded-full border border-yellow-200 dark:from-yellow-900/20 dark:to-amber-900/20 dark:text-yellow-400 dark:border-yellow-800/30">
								<StarIcon className="w-3 h-3" />
								Featured
							</span>
						)}
						<div>
							<span className="inline-flex items-center px-2 sm:px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
								{project.category}
							</span>
						</div>
					</div>
				</div>

				{/* Quick Actions */}
				<div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-start">
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-lg gh-bg-canvas-default hover:gh-bg-accent-subtle transition-colors border gh-border-subtle"
							title="View on GitHub"
						>
							<CodeBracketIcon className="w-4 h-4 gh-text-muted hover:gh-text-accent" />
						</a>
					)}
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-lg gh-bg-canvas-default hover:gh-bg-accent-subtle transition-colors border gh-border-subtle"
							title="View Live Demo"
						>
							<GlobeAltIcon className="w-4 h-4 gh-text-muted hover:gh-text-accent" />
						</a>
					)}
				</div>
			</div>

			{/* Description */}
			<p className="gh-text-muted text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>

			{/* Technologies */}
			{project.technologies.length > 0 && (
				<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
					{project.technologies.slice(0, 5).map((tech) => {
						return (
							<span
								key={tech}
								className="inline-flex items-center gap-1.5 text-xs px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border transition-all duration-200 hover:scale-105 gh-bg-canvas-default hover:gh-bg-accent-subtle gh-text border-gray-200 dark:border-gray-700"
							>
								{tech}
							</span>
						);
					})}
					{project.technologies.length > 5 && (
						<span className="text-xs px-2 sm:px-2.5 py-1 sm:py-1.5 gh-text-muted rounded-full border border-dashed border-gray-300 dark:border-gray-600">
							+{project.technologies.length - 5} more
						</span>
					)}
				</div>
			)}

			{/* Footer */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 mt-3 border-t gh-border-subtle gap-2 sm:gap-0">
				<div className="flex items-center gap-3 sm:gap-4 text-xs gh-text-muted">
					<div className="flex items-center gap-1.5">
						<div className={`w-3 h-3 rounded-full ${languageColorClass}`} />
						<span className="font-medium">{project.primaryLanguage.name}</span>
					</div>
					<div className="flex items-center gap-1.5">
						<CalendarDaysIcon className="w-3 h-3" />
						<span>Created {formatCreatedTime(project.createdAt)}</span>
					</div>
				</div>

				{/* View Details Link */}
				<Link
					href={`/projects/${project.id}`}
					className="text-xs font-medium gh-text-accent hover:underline decoration-2 underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
				>
					View Details →
				</Link>
			</div>
		</div>
	);
}
