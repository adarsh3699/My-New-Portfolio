import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data";
import { generateMetadata as generateSEOMetadata, generateProjectJsonLd } from "@/lib/seo";

interface ProjectLayoutProps {
	children: React.ReactNode;
	params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
	const { id } = await params;
	const project = projects.find((p) => p.id === id);

	if (!project) {
		return generateSEOMetadata({
			title: "Project Not Found",
			description: "The requested project could not be found.",
			noIndex: true,
		});
	}

	const projectUrl = `/projects/${project.id}`;
	const keywords = [...project.technologies, project.category, "project", "portfolio", project.name.toLowerCase()];

	return generateSEOMetadata({
		title: project.name,
		description: project.description,
		path: projectUrl,
		keywords,
		image: project.screenshots?.[0]?.url,
	});
}

// Generate static params for static generation
export async function generateStaticParams() {
	return projects.map((project) => ({
		id: project.id,
	}));
}

export default async function ProjectLayout({ children, params }: ProjectLayoutProps) {
	const { id } = await params;
	const project = projects.find((p) => p.id === id);

	if (!project) {
		notFound();
	}

	const projectJsonLd = generateProjectJsonLd({
		name: project.name,
		description: project.description,
		url: project.liveUrl,
		githubUrl: project.githubUrl,
		technologies: project.technologies,
		createdAt: project.createdAt,
	});

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(projectJsonLd),
				}}
			/>
			{children}
		</>
	);
}
