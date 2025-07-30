import Link from "next/link";
import { EyeIcon, CodeBracketIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui";

interface ProjectDetailHeaderProps {
	project: {
		name: string;
		liveUrl?: string;
		githubUrl?: string;
		demoVideoUrl?: string;
		githubRepo?: {
			owner: string;
			name: string;
			branch?: string;
		};
	};
}

export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
	return (
		<div className="max-w-7xl border-b gh-border mx-auto px-3 md:px-8 lg:px-6">
			{/* Original desktop layout preserved, mobile optimized */}
			<div className="flex items-center justify-between py-4">
				{/* Left side - Repository name and visibility */}
				<div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
					<Link
						href="/projects"
						className="gh-text-accent hover:underline text-sm sm:text-lg font-semibold flex-shrink-0"
					>
						adarsh3699
					</Link>
					<span className="gh-text-muted text-sm sm:text-lg flex-shrink-0">/</span>
					<h1 className="text-sm sm:text-lg font-semibold gh-text truncate min-w-0">{project.name}</h1>
					<span className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 gh-bg-neutral-subtle border gh-border rounded-full gh-text-muted font-medium flex-shrink-0 hidden sm:inline-block">
						{project.githubRepo ? "Public" : "Private"}
					</span>
				</div>

				{/* Right side - Project Action buttons (original desktop layout, mobile optimized) */}
				<div className="flex items-center gap-1 sm:gap-2">
					{/* Live Demo button */}
					{project.liveUrl && (
						<Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
							<Button variant="default" size="sm" className="px-2 sm:px-3" aria-label="View live demo">
								<EyeIcon className="w-4 h-4" />
								<span className="sr-only sm:not-sr-only">Live Demo</span>
							</Button>
						</Link>
					)}

					{/* Source Code button */}
					{project.githubUrl && (
						<Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="sm" className="px-2 sm:px-3" aria-label="View source code">
								<CodeBracketIcon className="w-4 h-4" />
								<span className="sr-only sm:not-sr-only">Source Code</span>
							</Button>
						</Link>
					)}

					{/* Demo Video button */}
					{project.demoVideoUrl && (
						<Link href={project.demoVideoUrl} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="sm" className="px-2 sm:px-3" aria-label="Watch demo video">
								<PlayIcon className="w-4 h-4" />
								<span className="sr-only sm:not-sr-only">Demo Video</span>
							</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
