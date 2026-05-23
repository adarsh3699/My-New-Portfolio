import { StickyScroll } from "@/components/ui";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectScreenshotsProps {
	project: Pick<Project, "name" | "screenshots">;
}

export function ProjectScreenshots({ project }: ProjectScreenshotsProps) {
	// Get project screenshots with detailed descriptions
	const screenshots = project.screenshots || [];

	if (screenshots.length === 0) {
		return null;
	}

	// Create content for StickyScroll using detailed screenshot data
	const content = screenshots.map(
		(screenshot: { url: string; title: string; description: string }, index: number) => ({
			title: screenshot.title,
			description: screenshot.description,
			content: (
				<div className="relative h-full w-full">
					<Image
						src={screenshot.url}
						alt={`${project.name} - ${screenshot.title}`}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						priority={index === 0} // Add priority to first image for LCP optimization
						className="object-cover rounded-lg shadow-lg"
					/>
				</div>
			),
		})
	);

	return (
		<div className="mb-12" data-component="project-screenshots">
			<div className="mb-6">
				<h2 className="text-xl font-bold gh-text mb-2">Project Showcase</h2>
				<p className="gh-text-muted text-sm">
					Explore the key features and interface of {project.name} through these interactive screenshots.
				</p>
			</div>
			<StickyScroll content={content} />
		</div>
	);
}

