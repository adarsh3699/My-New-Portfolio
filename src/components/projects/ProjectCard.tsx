import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";
import { ProjectStats } from "./ProjectStats";

interface Project {
	id: string;
	name: string;
	description: string;
	githubUrl?: string;
	liveUrl?: string;
	featured?: boolean;
	technologies: string[];
	primaryLanguage: {
		name: string;
		color: string;
	};
	stats: {
		stars: number;
		forks: number;
		watchers?: number;
	};
	updatedAt: string;
	category: string;
	createdAt: string;
}

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6 hover:gh-bg-canvas-subtle transition-colors">
			<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
				<div className="flex-1">
					{/* Repository Header */}
					<div className="flex items-center gap-3 mb-2">
						<h3 className="text-lg font-semibold">
							{project.githubUrl ? (
								<Link
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="gh-text-accent hover:underline"
								>
									{project.name}
								</Link>
							) : (
								<span className="gh-text-accent">{project.name}</span>
							)}
						</h3>
						{project.featured && (
							<span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full border border-yellow-200">
								Featured
							</span>
						)}
					</div>

					{/* Description */}
					<p className="gh-text-muted text-sm mb-3 leading-relaxed">{project.description}</p>

					{/* Technologies/Topics */}
					{project.technologies.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-3">
							{project.technologies.slice(0, 6).map((tech) => (
								<span
									key={tech}
									className="text-xs px-2 py-1 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle hover:gh-bg-accent-muted transition-colors cursor-pointer"
								>
									{tech}
								</span>
							))}
							{project.technologies.length > 6 && (
								<span className="text-xs px-2 py-1 gh-text-muted">
									+{project.technologies.length - 6} more
								</span>
							)}
						</div>
					)}

					{/* Repository Stats */}
					<ProjectStats
						primaryLanguage={project.primaryLanguage}
						stats={project.stats}
						updatedAt={project.updatedAt}
					/>
				</div>

				{/* Repository Actions */}
				<div className="flex gap-2">
					{project.githubUrl && (
						<Link
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-secondary text-xs px-3 py-1 flex items-center gap-1"
						>
							<StarIcon className="w-3 h-3" />
							Star
						</Link>
					)}
					{project.liveUrl && (
						<Link
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary text-xs px-3 py-1"
						>
							Live Demo
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
