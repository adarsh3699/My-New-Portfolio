import dynamic from "next/dynamic";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
	title: "Home",
	description:
		"Welcome to my portfolio! I'm a full-stack developer passionate about creating innovative web solutions. Explore my projects, GitHub contributions, and technical expertise.",
	path: "/",
	keywords: [
		"home",
		"portfolio homepage",
		"developer profile",
		"github contributions",
		"pinned repositories",
		"software engineer",
		"web developer profile",
	],
});

// Dynamic imports with loading skeletons
const ProfileSection = dynamic(() => import("@/components/home/ProfileSection"));

const GitHubContributions = dynamic(() => import("@/components/home/GitHubContributions"));

const PinnedRepositories = dynamic(() => import("@/components/home/PinnedRepositories"));

export default function Home() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
				<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
					{/* Profile Sidebar */}
					<div className="xl:col-span-1">
						<ProfileSection />
					</div>

					{/* Main Content */}
					<div className="xl:col-span-2">
						<GitHubContributions />
						<PinnedRepositories />
					</div>
				</div>
			</section>
		</main>
	);
}
