import { experiences } from "@/data";
import ExperienceCard from "./ExperienceCard";
import { Timeline } from "@/components/ui/timeline";

export default function ExperienceTimeline() {
	const timelineData = experiences.map((experience) => ({
		title: experience.startDate,
		content: <ExperienceCard experience={experience} />,
	}));

	return <Timeline data={timelineData} />;
}

// Loading skeleton for ExperienceTimeline
export function ExperienceTimelineSkeleton() {
	return (
		<div className="w-full font-sans animate-pulse">
			<div className="relative max-w-7xl mx-auto pb-20">
				{Array.from({ length: 3 }, (_, index) => (
					<div key={index} className="flex justify-start pt-10 md:pt-30 md:gap-0">
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<div className="h-10 absolute left-0 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
								<div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600 border p-2" />
							</div>
							<div className="hidden md:block text-3xl md:pl-18 lg:text-5xl font-bold text-gray-300 dark:text-gray-600">
								<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
							</div>
						</div>

						<div className="relative pl-15 pr-0 md:pl-0 w-full">
							<div className="md:hidden block text-2xl mb-4 text-left font-bold">
								<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
							</div>

							{/* ExperienceCard Skeleton */}
							<div className="group gh-bg-canvas-overlay border gh-border rounded-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
								{/* Header Section */}
								<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between">
									<div className="flex-1">
										{/* Logo and Title Section */}
										<div className="flex items-start gap-3 sm:gap-4">
											{/* Company Logo Skeleton */}
											<div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border gh-border flex items-center justify-center bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>

											{/* Title and Company Info */}
											<div className="flex-1 min-w-0">
												<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1 sm:mb-2">
													<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
												</div>
												<div className="flex items-center gap-2">
													<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
												</div>
											</div>
										</div>

										{/* Date and Location */}
										<div className="flex flex-wrap items-center gap-2 mt-3">
											<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
											<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
										</div>
									</div>
								</div>

								{/* Description */}
								<div className="mt-4 sm:mt-6">
									<ul className="space-y-2 sm:space-y-3">
										{Array.from({ length: 3 }, (_, i) => (
											<li key={i} className="flex items-start">
												<span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
												<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
											</li>
										))}
									</ul>
								</div>

								{/* Technologies */}
								<div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
									<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-36"></div>
									<div className="flex flex-wrap gap-1.5 sm:gap-2">
										{Array.from({ length: 6 }, (_, i) => (
											<div
												key={i}
												className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"
											></div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
