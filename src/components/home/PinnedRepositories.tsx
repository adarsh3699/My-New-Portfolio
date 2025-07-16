import React from "react";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";
import { ForkIcon } from "@/components/icons";
import { getPinnedProjects, type Project } from "@/data";

const formatUpdatedTime = (dateString: string) => {
	const date = new Date(dateString);
	const now = new Date();
	const diffTime = Math.abs(now.getTime() - date.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays === 1) return "Updated 1 day ago";
	if (diffDays < 30) return `Updated ${diffDays} days ago`;
	if (diffDays < 365) {
		const months = Math.floor(diffDays / 30);
		return `Updated ${months} month${months > 1 ? "s" : ""} ago`;
	}
	const years = Math.floor(diffDays / 365);
	return `Updated ${years} year${years > 1 ? "s" : ""} ago`;
};

const LanguageTag = ({ color, name }: { color: string; name: string }) => (
	<span className="flex items-center flex-shrink-0">
		<div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${color} rounded-full mr-1`} />
		<span className="text-xs">{name}</span>
	</span>
);

const StatTag = ({ icon, count }: { icon: React.ReactNode; count: string }) => (
	<span className="flex items-center flex-shrink-0">
		<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1">{icon}</div>
		<span className="text-xs">{count}</span>
	</span>
);

const ProjectCard = ({ project }: { project: Project }) => (
	<div className="border gh-border rounded-lg p-3 sm:p-4 hover:gh-bg-canvas-subtle transition-colors">
		<div className="flex items-start justify-between mb-2">
			<h3 className="font-medium gh-text-accent hover:underline cursor-pointer text-sm sm:text-base truncate mr-2">
				{project.githubUrl ? (
					<Link
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline"
					>
						{project.name}
					</Link>
				) : (
					project.name
				)}
			</h3>
			<span className="text-xs gh-text-muted px-2 py-1 border gh-border rounded-full flex-shrink-0 capitalize">
				{project.status}
			</span>
		</div>
		<p className="text-xs sm:text-sm gh-text-muted mb-2 sm:mb-3 line-clamp-2">{project.description}</p>
		<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs gh-text-muted">
			<div className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto">
				<LanguageTag color={project.primaryLanguage.color} name={project.primaryLanguage.name} />
				<StatTag icon={<StarIcon />} count={project.stats.stars.toString()} />
				<StatTag icon={<ForkIcon />} count={project.stats.forks.toString()} />
			</div>
			<span className="text-xs flex-shrink-0">{formatUpdatedTime(project.updatedAt)}</span>
		</div>
	</div>
);

export default function PinnedRepositories() {
	const projects = getPinnedProjects();

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
