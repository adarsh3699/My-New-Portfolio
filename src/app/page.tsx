import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen gh-bg-canvas-default">
			<Header />
			<main>
				<ProfileSection />
				<ProjectsSection />
			</main>
			<Footer />
		</div>
	);
}
