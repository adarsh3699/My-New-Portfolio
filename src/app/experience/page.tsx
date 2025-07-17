import { ExperienceHeader, ExperienceTimeline } from "@/components/experience";
import { OpportunitiesSection } from "@/components/ui";

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
