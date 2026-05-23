import { notFound } from "next/navigation";
import { projects, getProjectWithReadme } from "@/data";
import { ProjectDetailHeader } from "@/components/projects/project-detail/ProjectDetailHeader";
import { ProjectScreenshots } from "@/components/projects/project-detail/ProjectScreenshots";
import { ProjectReadme } from "@/components/projects/project-detail/ProjectReadme";
import { ProjectSidebar } from "@/components/projects/project-detail/ProjectSidebar";

interface ProjectDetailPageProps {
	params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	const { id } = await params;

	// Fetch project + README on the server — no client-side waterfall
	const data = await getProjectWithReadme(id);

	if (!data) {
		notFound();
	}

	const { project, readme } = data;

	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<ProjectDetailHeader project={project} />

			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					<div className="lg:col-span-3 space-y-8">
						{project.screenshots && project.screenshots.length > 0 && (
							<ProjectScreenshots project={project} />
						)}
						<ProjectReadme project={project} readmeContent={readme} />
					</div>

					<aside className="lg:col-span-1">
						<ProjectSidebar project={project} />
					</aside>
				</div>
			</section>
		</main>
	);
}

// Pre-render all project pages at build time
export async function generateStaticParams() {
	return projects.map((project) => ({ id: project.id }));
}
