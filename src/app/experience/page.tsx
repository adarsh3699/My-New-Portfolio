import dynamic from "next/dynamic";
import { ExperienceHeader } from "@/components/experience";
import { ExperienceTimelineSkeleton } from "@/components/experience/ExperienceTimeline";

// Dynamic imports with loading skeletons
const ExperienceTimeline = dynamic(() => import("@/components/experience/ExperienceTimeline"), {
	loading: () => <ExperienceTimelineSkeleton />,
});

const OpportunitiesSection = dynamic(() => import("@/components/ui/opportunities-section"), {
	loading: () => <div className="animate-pulse h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>,
});

export default function ExperiencePage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
				<ExperienceHeader />
				<div>
					<ExperienceTimeline />
				</div>
				<OpportunitiesSection />
			</section>
		</main>
	);
}
