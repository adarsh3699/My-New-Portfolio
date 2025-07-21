import Link from "next/link";
import { EyeIcon, CodeBracketIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui";

interface ProjectDetailHeaderProps {
	project: {
		name: string;
		liveUrl?: string;
		githubUrl?: string;
		demoVideoUrl?: string;
	};
}

export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
	return (
		<div className="max-w-7xl border-b gh-border mx-auto px-3 md:px-8 lg:px-6">
			{/* Top section with breadcrumb and actions */}
			<div className="flex items-center justify-between py-4">
				{/* Left side - Repository name and visibility */}
				<div className="flex items-center gap-2">
					<Link href="/projects" className="gh-text-accent hover:underline text-lg font-semibold">
						adarsh3699
					</Link>
					<span className="gh-text-muted text-lg">/</span>
					<h1 className="text-lg font-semibold gh-text">{project.name}</h1>
					<span className="text-xs px-2 py-1 gh-bg-neutral-subtle border gh-border rounded-full gh-text-muted font-medium">
						Public
					</span>
				</div>

				{/* Right side - Project Action buttons */}
				<div className="flex items-center gap-2">
					{/* Live Demo button */}
					{project.liveUrl && (
						<Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
							<Button variant="default" size="sm">
								<EyeIcon className="w-4 h-4" />
								<span className="hidden sm:inline">Live Demo</span>
							</Button>
						</Link>
					)}

					{/* Source Code button */}
					{project.githubUrl && (
						<Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="sm">
								<CodeBracketIcon className="w-4 h-4" />
								<span className="hidden sm:inline">Source Code</span>
							</Button>
						</Link>
					)}

					{/* Demo Video button (only if demo video URL is available) */}
					{project.demoVideoUrl && (
						<Link href={project.demoVideoUrl} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="sm">
								<PlayIcon className="w-4 h-4" />
								<span className="hidden sm:inline">Demo Video</span>
							</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
