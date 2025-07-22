import { DocumentTextIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import React from "react";
import "../../../styles/github-readme.css";

// Style constants
const STYLES = {
	container: "gh-bg-canvas-overlay border gh-border rounded-lg",
	header: "flex items-center gap-2 px-4 py-3 border-b gh-border",
	content: "p-6",
};

interface ProjectReadmeProps {
	project: {
		name: string;
		description: string;
		longDescription?: string;
		technologies: string[];
		liveUrl?: string;
		githubUrl?: string;
		githubRepo?: {
			owner: string;
			name: string;
			branch?: string;
		};
		readmeContent?: {
			features?: string[];
			techDetails?: {
				framework: string;
				styling: string;
				animations?: string;
				deployment: string;
				performance?: {
					lighthouse: number;
					loadTime: string;
					coreWebVitals: string;
				};
			};
			installation?: {
				prerequisites: string[];
				steps: string[];
			};
			envVariables?: Array<{
				name: string;
				description: string;
				required: boolean;
			}>;
			customSections?: Array<{
				title: string;
				icon: string;
				content: string;
			}>;
		};
	};
	readmeContent?: string | null;
}

// Header Component
const ReadmeHeader = ({ isGitHub }: { isGitHub: boolean }) => (
	<div className={STYLES.header}>
		<DocumentTextIcon className="w-4 h-4 gh-text-muted" />
		<span className="font-semibold gh-text">README.md</span>
		<span className="text-xs gh-text-muted ml-auto">{isGitHub ? "Fetched from GitHub" : "Generated content"}</span>
	</div>
);

// GitHub README Component with dynamic image URL processing
const GitHubReadme = ({ content, project }: { content: string; project: ProjectReadmeProps["project"] }) => {
	if (!("githubRepo" in project) || !project.githubRepo) {
		return <div className={STYLES.content}>GitHub repo information not available</div>;
	}

	const { owner, name, branch = "main" } = project.githubRepo as { owner: string; name: string; branch?: string };
	const baseUrl = `https://raw.githubusercontent.com/${owner}/${name}/${branch}`;

	// Convert relative image paths to absolute URLs
	const processedContent = content
		.replace(/!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g, `![$1](${baseUrl}/$2)`)
		.replace(/<img([^>]*)\s+src=["'](?!https?:\/\/)([^"']+)["']([^>]*)>/g, `<img$1 src="${baseUrl}/$2"$3>`);

	return (
		<div className={STYLES.content}>
			<div className="github-readme">
				<ReactMarkdown rehypePlugins={[rehypeRaw]}>{processedContent}</ReactMarkdown>
			</div>
		</div>
	);
};

// Main Component (Super Simple!)
export function ProjectReadme({ project, readmeContent }: ProjectReadmeProps) {
	return (
		<div className={STYLES.container}>
			<ReadmeHeader isGitHub={!!readmeContent} />
			{readmeContent ? (
				<GitHubReadme content={readmeContent} project={project} />
			) : (
				<GeneratedReadme project={project} />
			)}
		</div>
	);
}

// Complete Generated README Component with all features inline
const GeneratedReadme = ({ project }: { project: ProjectReadmeProps["project"] }) => {
	const { readmeContent } = project;

	// Section Header Helper
	const SectionHeader = ({ icon, title }: { icon: string; title: string }) => (
		<h2 className="flex items-center gap-2 mb-4 text-xl font-semibold gh-text">
			<span>{icon}</span> {title}
		</h2>
	);

	return (
		<div className={STYLES.content}>
			<div className="github-readme">
				{/* Project Title & Description */}
				<section className="mb-6">
					<h1 className="flex text-3xl font-bold items-center gap-2 mb-4 gh-text">
						<span>🚀</span> {project.name}
					</h1>
					<p className="text-lg gh-text-muted mb-4">{project.description}</p>
					{project.longDescription && <p className="gh-text leading-relaxed">{project.longDescription}</p>}
				</section>

				{/* Features */}
				{readmeContent?.features?.length && (
					<section className="mb-6">
						<SectionHeader icon="✨" title="Features" />
						<ul className="space-y-2">
							{readmeContent.features.map((feature, index) => (
								<li key={index} className="flex items-start gap-2">
									<span className="text-green-500 mt-1">✓</span>
									<span className="gh-text">{feature}</span>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* Tech Stack */}
				<section className="mb-6">
					<SectionHeader icon="🛠️" title="Tech Stack" />
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-200"
							>
								{tech}
							</span>
						))}
					</div>
				</section>

				{/* Technical Details */}
				{readmeContent?.techDetails && (
					<section className="mb-6">
						<SectionHeader icon="⚙️" title="Technical Details" />
						<ul className="space-y-2">
							<li className="gh-text">
								<strong>Framework:</strong> {readmeContent.techDetails.framework}
							</li>
							<li className="gh-text">
								<strong>Styling:</strong> {readmeContent.techDetails.styling}
							</li>
							{readmeContent.techDetails.animations && (
								<li className="gh-text">
									<strong>Animations:</strong> {readmeContent.techDetails.animations}
								</li>
							)}
							<li className="gh-text">
								<strong>Deployment:</strong> {readmeContent.techDetails.deployment}
							</li>
							{readmeContent.techDetails.performance && (
								<li className="gh-text">
									<strong>Performance:</strong> Lighthouse{" "}
									{readmeContent.techDetails.performance.lighthouse}/100,
									{readmeContent.techDetails.performance.loadTime},{" "}
									{readmeContent.techDetails.performance.coreWebVitals}
								</li>
							)}
						</ul>
					</section>
				)}

				{/* Installation */}
				{readmeContent?.installation && (
					<section className="mb-6">
						<SectionHeader icon="🚀" title="Getting Started" />
						<div>
							<h3 className="text-lg font-semibold mb-2 gh-text">Prerequisites</h3>
							<ul className="mb-4 space-y-1">
								{readmeContent.installation.prerequisites.map((prereq, index) => (
									<li key={index} className="gh-text">
										• {prereq}
									</li>
								))}
							</ul>
							<h3 className="text-lg font-semibold mb-2 gh-text">Installation</h3>
							<div className="github-readme">
								<pre>
									<code>
										{readmeContent.installation.steps.map((step, index) => (
											<div key={index}>{step}</div>
										))}
									</code>
								</pre>
							</div>
						</div>
					</section>
				)}

				{/* Environment Variables */}
				{readmeContent?.envVariables?.length && (
					<section className="mb-6">
						<SectionHeader icon="🔐" title="Environment Variables" />
						<div className="overflow-x-auto">
							<table className="w-full text-sm">
								<thead>
									<tr className="border-b gh-border">
										<th className="text-left py-2 gh-text">Variable</th>
										<th className="text-left py-2 gh-text">Description</th>
										<th className="text-left py-2 gh-text">Required</th>
									</tr>
								</thead>
								<tbody>
									{readmeContent.envVariables.map((envVar, index) => (
										<tr key={index} className="border-b gh-border">
											<td className="py-2 gh-text font-mono text-xs">{envVar.name}</td>
											<td className="py-2 gh-text-muted text-xs">{envVar.description}</td>
											<td className="py-2">
												<span
													className={`text-xs px-2 py-1 rounded ${
														envVar.required
															? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
															: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
													}`}
												>
													{envVar.required ? "Required" : "Optional"}
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>
				)}

				{/* Demo Links */}
				{(project.liveUrl || project.githubUrl) && (
					<section className="mb-6">
						<SectionHeader icon="🔗" title="Links" />
						<div className="flex gap-4">
							{project.liveUrl && (
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
								>
									🌐 Live Demo
								</a>
							)}
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors gh-text"
								>
									📂 Source Code
								</a>
							)}
						</div>
					</section>
				)}

				{/* Custom Sections */}
				{readmeContent?.customSections?.length && (
					<>
						{readmeContent.customSections.map((section, index) => (
							<section key={index} className="mb-6">
								<SectionHeader icon={section.icon} title={section.title} />
								<p className="gh-text">{section.content}</p>
							</section>
						))}
					</>
				)}
			</div>
		</div>
	);
};
