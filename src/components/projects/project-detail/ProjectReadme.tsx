import { DocumentTextIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import React from "react";
import "../../../styles/github-readme.css";

const STYLES = {
	container: "gh-bg-canvas-overlay border gh-border rounded-lg",
	header: "flex items-center gap-2 px-4 py-3 border-b gh-border",
	content: "p-6",
} as const;

interface Project {
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
}

interface ProjectReadmeProps {
	project: Project;
	readmeContent?: string | null;
}

const ReadmeHeader = ({ isGitHub }: { isGitHub: boolean }) => (
	<div className={STYLES.header}>
		<DocumentTextIcon className="w-4 h-4 gh-text-muted" />
		<span className="font-semibold gh-text">README.md</span>
		<span className="text-xs gh-text-muted ml-auto">{isGitHub ? "Fetched from GitHub" : "Generated content"}</span>
	</div>
);

const GitHubReadme = ({ content, project }: { content: string; project: Project }) => {
	if (!project.githubRepo) {
		return <div className={STYLES.content}>GitHub repo information not available</div>;
	}

	const { owner, name, branch = "main" } = project.githubRepo;
	const baseUrl = `https://raw.githubusercontent.com/${owner}/${name}/${branch}`;

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

const GeneratedReadme = ({ project }: { project: Project }) => {
	const { readmeContent } = project;

	const generateMarkdownContent = (): string => {
		let markdown = "";

		// Project Title & Description
		markdown += `# 🚀 ${project.name}\n\n${project.description}\n\n`;
		if (project.longDescription) {
			markdown += `${project.longDescription}\n\n`;
		}

		// Features
		if (readmeContent?.features?.length) {
			markdown += `## ✨ Features\n\n`;
			readmeContent.features.forEach((feature) => {
				markdown += `- ${feature}\n`;
			});
			markdown += `\n`;
		}

		// Tech Stack
		markdown += `## 🛠️ Tech Stack\n\n`;
		markdown += `<div class="flex flex-wrap gap-2">\n`;
		project.technologies.forEach((tech) => {
			markdown += `  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-200">${tech}</span>\n`;
		});
		markdown += `</div>\n\n`;

		// Technical Details
		if (readmeContent?.techDetails) {
			const { techDetails } = readmeContent;
			markdown += `## ⚙️ Technical Details\n\n`;
			markdown += `- **Framework:** ${techDetails.framework}\n`;
			markdown += `- **Styling:** ${techDetails.styling}\n`;
			if (techDetails.animations) {
				markdown += `- **Animations:** ${techDetails.animations}\n`;
			}
			markdown += `- **Deployment:** ${techDetails.deployment}\n`;
			if (techDetails.performance) {
				const { lighthouse, loadTime, coreWebVitals } = techDetails.performance;
				markdown += `- **Performance:** Lighthouse ${lighthouse}/100, ${loadTime}, ${coreWebVitals}\n`;
			}
			markdown += `\n`;
		}

		// Installation
		if (readmeContent?.installation) {
			const { installation } = readmeContent;
			markdown += `## 🚀 Getting Started\n\n`;
			markdown += `### Prerequisites\n\n`;
			installation.prerequisites.forEach((prereq) => {
				markdown += `- ${prereq}\n`;
			});
			markdown += `\n### Installation\n\n`;
			markdown += `\`\`\`bash\n`;
			installation.steps.forEach((step) => {
				markdown += `${step}\n`;
			});
			markdown += `\`\`\`\n\n`;
		}

		// Environment Variables
		if (readmeContent?.envVariables?.length) {
			markdown += `## 🔐 Environment Variables\n\n`;
			markdown += `<div class="overflow-x-auto">\n`;
			markdown += `  <table class="w-full text-sm">\n`;
			markdown += `    <thead>\n`;
			markdown += `      <tr class="border-b gh-border">\n`;
			markdown += `        <th class="text-left py-2 gh-text">Variable</th>\n`;
			markdown += `        <th class="text-left py-2 gh-text">Description</th>\n`;
			markdown += `        <th class="text-left py-2 gh-text">Required</th>\n`;
			markdown += `      </tr>\n`;
			markdown += `    </thead>\n`;
			markdown += `    <tbody>\n`;
			readmeContent.envVariables.forEach((envVar) => {
				const badge = envVar.required
					? `<span class="text-xs px-2 py-1 rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Required</span>`
					: `<span class="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Optional</span>`;
				markdown += `      <tr class="border-b gh-border">\n`;
				markdown += `        <td class="py-2 gh-text font-mono text-xs">${envVar.name}</td>\n`;
				markdown += `        <td class="py-2 gh-text-muted text-xs">${envVar.description}</td>\n`;
				markdown += `        <td class="py-2">${badge}</td>\n`;
				markdown += `      </tr>\n`;
			});
			markdown += `    </tbody>\n`;
			markdown += `  </table>\n`;
			markdown += `</div>\n\n`;
		}

		// Demo Links
		if (project.liveUrl || project.githubUrl) {
			markdown += `## 🔗 Links\n\n`;
			markdown += `<div class="flex gap-4">\n`;
			if (project.liveUrl) {
				markdown += `  <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-link inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">\n`;
				markdown += `    🌐 Live Demo\n`;
				markdown += `  </a>\n`;
			}
			if (project.githubUrl) {
				markdown += `  <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-link inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors gh-text">\n`;
				markdown += `    📂 Source Code\n`;
				markdown += `  </a>\n`;
			}
			markdown += `</div>\n\n`;
		}

		// Custom Sections
		if (readmeContent?.customSections?.length) {
			readmeContent.customSections.forEach((section) => {
				markdown += `## ${section.icon} ${section.title}\n\n`;
				markdown += `${section.content}\n\n`;
			});
		}

		return markdown;
	};

	return (
		<div className={STYLES.content}>
			<div className="github-readme">
				<ReactMarkdown rehypePlugins={[rehypeRaw]}>{generateMarkdownContent()}</ReactMarkdown>
			</div>
		</div>
	);
};

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
