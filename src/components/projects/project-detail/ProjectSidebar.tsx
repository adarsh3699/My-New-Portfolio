import Link from "next/link";
import { CalendarIcon, StarIcon, TagIcon } from "@heroicons/react/24/outline";

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
	return (
		<div className="space-y-6">
			{/* Featured Badge */}
			{project.featured && (
				<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4">
					<div className="flex items-center gap-2 mb-2">
						<StarIcon className="w-4 h-4 text-yellow-500" />
						<span className="font-semibold gh-text text-sm">Featured Project</span>
					</div>
					<p className="text-xs gh-text-muted">This project has been highlighted as one of my best works.</p>
				</div>
			)}

			{/* About */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4">
				<h3 className="font-semibold gh-text mb-3">About</h3>
				<p className="text-sm gh-text-muted mb-4 leading-relaxed">{project.description}</p>

				{project.longDescription && (
					<p className="text-sm gh-text-muted leading-relaxed">{project.longDescription}</p>
				)}
			</div>

			{/* Technologies */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4">
				<div className="flex items-center gap-2 mb-3">
					<TagIcon className="w-4 h-4 gh-text-muted" />
					<h3 className="font-semibold gh-text">Technologies</h3>
				</div>
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className="text-xs px-2 py-1 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle hover:gh-bg-accent-muted transition-colors cursor-pointer"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Project Dates */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4">
				<div className="flex items-center gap-2 mb-3">
					<CalendarIcon className="w-4 h-4 gh-text-muted" />
					<h3 className="font-semibold gh-text">Project Info</h3>
				</div>
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<span className="text-sm gh-text-muted">Created</span>
						<span className="text-sm gh-text">{new Date(project.createdAt).toLocaleDateString()}</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-sm gh-text-muted">Category</span>
						<span className="text-sm gh-text">{project.category}</span>
					</div>
				</div>
			</div>

			{/* Links */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4">
				<h3 className="font-semibold gh-text mb-3">Links</h3>
				<div className="space-y-2">
					{project.liveUrl && (
						<Link
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-sm gh-text-accent hover:underline"
						>
							🌐 Live Demo
						</Link>
					)}
					{project.githubUrl && (
						<Link
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-sm gh-text-accent hover:underline"
						>
							📂 Source Code
						</Link>
					)}
				</div>
			</div>

			{/* Primary Language */}
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-4">
				<h3 className="font-semibold gh-text mb-3">Primary Language</h3>
				<div className="flex items-center gap-2">
					<div className={`w-3 h-3 rounded-full ${project.primaryLanguage.color}`} />
					<span className="text-sm gh-text">{project.primaryLanguage.name}</span>
				</div>
			</div>
		</div>
	);
}
