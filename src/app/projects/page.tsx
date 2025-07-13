import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
	return (
		<>
			<Header />
			<main className="min-h-screen gh-bg-canvas-default">
				<ProjectsSection />
			</main>
			<Footer />
		</>
	);
}
