import {
	AboutHeader,
	QuickStats,
	MyStory,
	CurrentFocus,
	TechnicalExpertise,
	Education,
	CertificatesAchievements,
	WhyChooseMe,
	CoreValues,
	FunFacts,
} from "@/components/about";
import { OpportunitiesSection } from "@/components/ui";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
	title: "About Me",
	description:
		"Learn about my journey as a full-stack developer, technical expertise, education, core values, and what drives my passion for creating innovative web solutions.",
	path: "/about",
	keywords: [
		"about",
		"developer story",
		"technical skills",
		"education",
		"experience",
		"full stack developer",
		"career journey",
		"professional background",
	],
});

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

			{/* Why Choose Me & Values */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
				<WhyChooseMe />
				<CoreValues />
			</div>

				{/* Fun Facts */}
				<FunFacts />

				{/* Opportunities Section */}
				<OpportunitiesSection buttons={["projects", "resume"]} />
			</section>
		</main>
	);
}
