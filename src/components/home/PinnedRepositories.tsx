import React from "react";
import Link from "next/link";
import { getPinnedProjects, type Project } from "@/data";

const formatCreatedTime = (dateString: string) => {
	const date = new Date(dateString);
	const now = new Date();
	const diffTime = Math.abs(now.getTime() - date.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays === 1) return "Created 1 day ago";
	if (diffDays < 30) return `Created ${diffDays} days ago`;
	if (diffDays < 365) {
		const months = Math.floor(diffDays / 30);
		return `Created ${months} month${months > 1 ? "s" : ""} ago`;
	}
	const years = Math.floor(diffDays / 365);
	return `Created ${years} year${years > 1 ? "s" : ""} ago`;
};

const LanguageTag = ({ color, name }: { color: string; name: string }) => (
	<span className="flex items-center flex-shrink-0">
		<div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${color} rounded-full mr-1`} />
		<span className="text-xs">{name}</span>
	</span>
);

const ProjectCard = ({ project }: { project: Project }) => (
	<Link href={`/projects/${project.id}`} className="block">
		<div className="border gh-border rounded-lg p-3 sm:p-4 hover:gh-bg-canvas-subtle transition-colors cursor-pointer">
			<div className="flex items-start justify-between mb-2">
				<h3 className="font-medium gh-text-accent hover:underline text-sm sm:text-base truncate mr-2">
					{project.name}
				</h3>
				<span className="text-xs gh-text-muted px-2 py-1 border gh-border rounded-full flex-shrink-0 capitalize">
					{project.category}
				</span>
			</div>
			<p className="text-xs sm:text-sm gh-text-muted mb-2 sm:mb-3 line-clamp-2">{project.description}</p>
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs gh-text-muted">
				<div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto">
					<LanguageTag color={project.primaryLanguage.color} name={project.primaryLanguage.name} />
				</div>
				<span className="text-xs flex-shrink-0">{formatCreatedTime(project.createdAt)}</span>
			</div>
		</div>
	</Link>
);

export default function PinnedRepositories() {
	// Get only the first 6 pinned projects
	const projects = getPinnedProjects(6);

	return (
		<div className="border gh-border rounded-lg p-4 sm:p-6 gh-shadow">
			<h2 className="text-base sm:text-lg font-semibold gh-text mb-3 sm:mb-4">Pinned Repositories</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
