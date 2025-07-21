import { StickyScroll } from "@/components/ui";
import Image from "next/image";

interface ProjectScreenshotsProps {
	project: {
		name: string;
		screenshots?: Array<{
			url: string;
			title: string;
			description: string;
		}>;
	};
}

export function ProjectScreenshots({ project }: ProjectScreenshotsProps) {
	// Get project screenshots with detailed descriptions
	const screenshots = project.screenshots || [];

	if (screenshots.length === 0) {
		return null;
	}

	// Create content for StickyScroll using detailed screenshot data
	const content = screenshots.map((screenshot: { url: string; title: string; description: string }) => ({
		title: screenshot.title,
		description: screenshot.description,
		content: (
			<div className="h-full w-full bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950 dark:to-blue-950 flex items-center justify-center relative">
				<Image
					src={screenshot.url}
					alt={`${project.name} - ${screenshot.title}`}
					fill
					className="object-cover rounded-lg shadow-lg"
				/>
			</div>
		),
	}));

	return (
		<div className="mb-12">
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
