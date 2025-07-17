import { ExperienceHeader, ExperienceTimeline, OpportunitiesSection } from "@/components/experience";

export default function ExperiencePage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-6xl mx-auto px-4 py-12">
				<ExperienceHeader />
				<ExperienceTimeline />
				<OpportunitiesSection />
			</section>
		</main>
	);
}
