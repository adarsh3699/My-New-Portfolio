import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className="in-h-screen gh-bg-canvas-default">
				<ProfileSection />
				<ProjectsSection />
			</main>
			<Footer />
		</>
	);
}
