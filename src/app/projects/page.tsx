"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { projects } from "@/data";
import { ProjectHeader } from "@/components/projects";

// Dynamic imports - only skeleton for heavy components
const ProjectFilters = dynamic(() =>
	import("@/components/projects/ProjectFilters").then((mod) => ({ default: mod.ProjectFilters }))
);

const ProjectCard = dynamic(() =>
	import("@/components/projects/ProjectCard").then((mod) => ({ default: mod.ProjectCard }))
);

export default function ProjectsPage() {
	const [filteredProjects, setFilteredProjects] = useState(projects);

	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
				<ProjectHeader totalProjects={projects.length} />
				<ProjectFilters projects={projects} onFilterChange={setFilteredProjects} />

				<div className="space-y-4">
					{projects.length === 0 ? (
						<div className="text-center py-12">
							<p className="gh-text-muted">No repositories found matching your criteria.</p>
						</div>
					) : (
						filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
					)}
				</div>
			</section>
		</main>
	);
}
