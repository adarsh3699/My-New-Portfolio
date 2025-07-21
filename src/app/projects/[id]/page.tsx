"use client";
import React from "react";
import { notFound } from "next/navigation";
import { projects, getProjectWithReadme, type Project } from "@/data";
import {
	ProjectDetailHeader,
	ProjectScreenshots,
	ProjectReadme,
	ProjectSidebar,
} from "@/components/projects/project-detail";

interface ProjectDetailPageProps {
	params: Promise<{ id: string }>;
}

function ProjectSkeleton() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8">
				<div className="animate-pulse space-y-8">
					<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
					<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
						<div className="lg:col-span-3 space-y-6">
							<div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
							<div className="h-96 bg-gray-200 dark:bg-gray-700 rounded"></div>
						</div>
						<div className="space-y-4">
							<div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
							<div className="h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	const { id } = React.use(params);
	const [projectData, setProjectData] = React.useState<Project | null>(null);
	const [readmeData, setReadmeData] = React.useState<string | null>(null);
	const [loading, setLoading] = React.useState(true);

	// Find project in basic projects list
	const basicProject = projects.find((p) => p.id === id);
	if (!basicProject) {
		notFound();
	}

	React.useEffect(() => {
		async function fetchData() {
			try {
				const data = await getProjectWithReadme(id);
				if (data) {
					setProjectData(data.project);
					setReadmeData(data.readme);
				} else {
					setProjectData(basicProject || null);
					setReadmeData(null);
				}
			} catch (error) {
				console.error("Error fetching project data:", error);
				setProjectData(basicProject || null);
				setReadmeData(null);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, [id, basicProject]);

	if (loading) {
		return <ProjectSkeleton />;
	}

	if (!projectData) {
		notFound();
	}

	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<ProjectDetailHeader project={projectData} />

			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					<div className="lg:col-span-3 space-y-8">
						{projectData.screenshots && projectData.screenshots.length > 0 && (
							<ProjectScreenshots project={projectData} />
						)}
						<ProjectReadme project={projectData} readmeContent={readmeData} />
					</div>

					<aside className="lg:col-span-1">
						<ProjectSidebar project={projectData} />
					</aside>
				</div>
			</section>
		</main>
	);
}
