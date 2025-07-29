import {
	AboutHeader,
	QuickStats,
	MyStory,
	CurrentFocus,
	TechnicalExpertise,
	Education,
	CertificatesAchievements,
	InterestsHobbies,
	CoreValues,
	FunFacts,
} from "@/components/about";
import { OpportunitiesSection } from "@/components/ui";

export default function AboutPage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
				{/* Header Section */}
				<AboutHeader />

				{/* Quick Stats */}
				<QuickStats />

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					<MyStory />
					<CurrentFocus />
				</div>

				{/* Skills Section */}
				<TechnicalExpertise />

				{/* Education & Achievements */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					<Education />
					<CertificatesAchievements />
				</div>

				{/* Interests & Values */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					<InterestsHobbies />
					<CoreValues />
				</div>

				{/* Fun Facts */}
				<FunFacts />

				{/* Opportunities Section */}
				<OpportunitiesSection variant="contact" />
			</section>
		</main>
	);
}
