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
	const content = screenshots.map(
		(screenshot: { url: string; title: string; description: string }, index: number) => ({
			title: screenshot.title,
			description: screenshot.description,
			content: (
				<div className="h-full w-full bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950 dark:to-blue-950 flex items-center justify-center relative">
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

// Loading skeleton for ProjectScreenshots
export function ProjectScreenshotsSkeleton() {
	return (
		<div className="mb-12 animate-pulse">
			<div className="mb-6">
				<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-48"></div>
				<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
			</div>

			{/* Sticky scroll placeholder */}
			<div className="space-y-6">
				{Array.from({ length: 3 }, (_, index) => (
					<div key={index} className="flex flex-col lg:flex-row gap-8">
						{/* Text content skeleton */}
						<div className="lg:w-1/3 space-y-4">
							<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
							<div className="space-y-2">
								<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
								<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
								<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
							</div>
						</div>

						{/* Image skeleton */}
						<div className="lg:w-2/3 h-64 lg:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
					</div>
				))}
			</div>
		</div>
	);
}
