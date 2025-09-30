"use client";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { projects } from "@/data";
import { ProjectHeader } from "@/components/projects";

// Layout constants
const LAYOUT_CLASSES = {
	grid: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
	list: "space-y-4",
} as const;

// Dynamic imports with loading states
const ProjectFilters = dynamic(
	() => import("@/components/projects/ProjectFilters").then((mod) => ({ default: mod.ProjectFilters })),
	{
		loading: () => (
			<div className="mb-6 animate-pulse">
				<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
			</div>
		),
	}
);

const ProjectCard = dynamic(
	() => import("@/components/projects/ProjectCard").then((mod) => ({ default: mod.ProjectCard })),
	{
		loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl h-48"></div>,
	}
);

export type ViewMode = "list" | "grid";

const STORAGE_KEY = "projects-view-mode";

// Empty state component
const EmptyState = () => (
	<div className="text-center py-12">
		<p className="gh-text-muted text-lg mb-2">No repositories found</p>
		<p className="gh-text-muted text-sm">Try adjusting your search or filter criteria above.</p>
	</div>
);

export default function ProjectsPage() {
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const [viewMode, setViewMode] = useState<ViewMode>("list");

	// Load saved view mode from localStorage on client side
	useEffect(() => {
		const savedViewMode = localStorage.getItem(STORAGE_KEY) as ViewMode;
		if (savedViewMode && (savedViewMode === "list" || savedViewMode === "grid")) {
			setViewMode(savedViewMode);
		}
	}, []);

	// Handle view mode change and save to localStorage
	const handleViewModeChange = (mode: ViewMode) => {
		setViewMode(mode);
		localStorage.setItem(STORAGE_KEY, mode);
	};

	// Error boundary would be better, but basic error handling
	if (!projects || projects.length === 0) {
		return (
			<main className="min-h-screen gh-bg-canvas-default">
				<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
					<div className="text-center py-12">
						<p className="gh-text-muted text-lg mb-2">Failed to load projects</p>
						<p className="gh-text-muted text-sm">Please refresh the page to try again.</p>
					</div>
				</section>
			</main>
		);
	}

	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
				<ProjectHeader totalProjects={projects.length} />

				<Suspense fallback={<div className="mb-6 h-12 animate-pulse bg-gray-200 dark:bg-gray-700 rounded" />}>
					<ProjectFilters
						projects={projects}
						onFilterChange={setFilteredProjects}
						viewMode={viewMode}
						onViewModeChange={handleViewModeChange}
					/>
				</Suspense>

				{filteredProjects.length === 0 ? (
					<EmptyState />
				) : (
					<div className={LAYOUT_CLASSES[viewMode]} role="list" aria-label="Projects list">
						{filteredProjects.map((project) => (
							<Suspense
								key={project.id}
								fallback={
									<div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl h-48" />
								}
							>
								<ProjectCard project={project} viewMode={viewMode} />
							</Suspense>
						))}
					</div>
				)}
			</section>
		</main>
	);
}
