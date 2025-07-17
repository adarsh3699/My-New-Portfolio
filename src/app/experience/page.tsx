import { ExperienceHeader, ExperienceTimeline } from "@/components/experience";
import { OpportunitiesSection } from "@/components/ui";

export default function ExperiencePage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-4 py-12">
				<ExperienceHeader />
				<div className="mt-8">
					<ExperienceTimeline />
				</div>
				<OpportunitiesSection />
			</section>
		</main>
	);
}
