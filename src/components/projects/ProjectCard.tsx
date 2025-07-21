import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";

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
						<h2 className="text-lg font-semibold">
							<Link href={`/projects/${project.id}`} className="gh-text-accent hover:underline">
								{project.name}
							</Link>
						</h2>
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

					{/* Language and Created Date Footer - Same style as original */}
					<div className="flex items-center gap-4 pt-3 mt-3 text-xs gh-text-muted">
						<div className="flex items-center gap-1">
							<div className={`w-2.5 h-2.5 rounded-full ${project.primaryLanguage.color}`} />
							<span>{project.primaryLanguage.name}</span>
						</div>
						<span>{formatCreatedTime(project.createdAt)}</span>
					</div>
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
