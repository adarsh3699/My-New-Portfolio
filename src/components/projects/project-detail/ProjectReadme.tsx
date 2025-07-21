import { DocumentTextIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import React from "react"; // Added missing import for React

// Style constants
const STYLES = {
	container: "gh-bg-canvas-overlay border gh-border rounded-lg",
	header: "flex items-center gap-2 px-4 py-3 border-b gh-border",
	content: "p-6",
	prose: "prose prose-neutral dark:prose-invert max-w-none",
	proseGenerated: "prose prose-neutral dark:prose-invert max-w-none prose-lg",
	sectionHeader: "flex items-center gap-2 mb-4",
	sectionContent: "mb-6",
	techBadge: "px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-200",
	codeBlock: "bg-gray-100 dark:bg-gray-800 rounded-md p-4 overflow-x-auto mb-4",
	inlineCode: "bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm gh-text font-mono",
	button: {
		primary:
			"inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
		secondary:
			"inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
	},
};

interface ProjectReadmeProps {
	project: {
		name: string;
		description: string;
		longDescription?: string;
		technologies: string[];
		liveUrl?: string;
		githubUrl?: string;
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

// Define proper types for component props
interface TechDetailsType {
	framework: string;
	styling: string;
	animations?: string;
	deployment: string;
	performance?: {
		lighthouse: number;
		loadTime: string;
		coreWebVitals: string;
	};
}

interface InstallationType {
	prerequisites: string[];
	steps: string[];
}

interface EnvVariableType {
	name: string;
	description: string;
	required: boolean;
}

interface CustomSectionType {
	title: string;
	icon: string;
	content: string;
}

interface ReactComponentProps {
	children?: React.ReactNode;
}

interface LinkProps extends ReactComponentProps {
	href?: string;
}

interface ImageProps {
	src?: string | Blob;
	alt?: string;
}

// Header Component
const ReadmeHeader = ({ isGitHub }: { isGitHub: boolean }) => (
	<div className={STYLES.header}>
		<DocumentTextIcon className="w-4 h-4 gh-text-muted" />
		<span className="font-semibold gh-text">README.md</span>
		<span className="text-xs gh-text-muted ml-auto">{isGitHub ? "Fetched from GitHub" : "Generated content"}</span>
	</div>
);

// Section Header Component
const SectionHeader = ({ icon, title }: { icon: string; title: string }) => (
	<h2 className={STYLES.sectionHeader}>
		<span>{icon}</span> {title}
	</h2>
);

// Tech Stack Component
const TechStack = ({ technologies }: { technologies: string[] }) => (
	<section className={STYLES.sectionContent}>
		<SectionHeader icon="🛠️" title="Tech Stack" />
		<div className="flex flex-wrap gap-2">
			{technologies.map((tech) => (
				<span key={tech} className={STYLES.techBadge}>
					{tech}
				</span>
			))}
		</div>
	</section>
);

// Features Component
const Features = ({ features }: { features: string[] }) => (
	<section className={STYLES.sectionContent}>
		<SectionHeader icon="✨" title="Features" />
		<ul className="space-y-2">
			{features.map((feature, index) => (
				<li key={index} className="flex items-start gap-2">
					<span className="text-green-500 mt-1">✓</span>
					<span className="gh-text">{feature}</span>
				</li>
			))}
		</ul>
	</section>
);

// Technical Details Component
const TechnicalDetails = ({ techDetails }: { techDetails: TechDetailsType }) => (
	<section className={STYLES.sectionContent}>
		<SectionHeader icon="⚙️" title="Technical Details" />
		<ul className="space-y-2">
			<li className="gh-text">
				<strong>Framework:</strong> {techDetails.framework}
			</li>
			<li className="gh-text">
				<strong>Styling:</strong> {techDetails.styling}
			</li>
			{techDetails.animations && (
				<li className="gh-text">
					<strong>Animations:</strong> {techDetails.animations}
				</li>
			)}
			<li className="gh-text">
				<strong>Deployment:</strong> {techDetails.deployment}
			</li>
			{techDetails.performance && (
				<li className="gh-text">
					<strong>Performance:</strong> Lighthouse Score {techDetails.performance.lighthouse}/100, Load Time{" "}
					{techDetails.performance.loadTime}, Core Web Vitals: {techDetails.performance.coreWebVitals}
				</li>
			)}
		</ul>
	</section>
);

// Installation Component
const Installation = ({ installation }: { installation: InstallationType }) => (
	<section className={STYLES.sectionContent}>
		<SectionHeader icon="🚀" title="Getting Started" />
		<div>
			<h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
			<ul className="mb-4 space-y-1">
				{installation.prerequisites.map((prereq: string, index: number) => (
					<li key={index} className="gh-text">
						• {prereq}
					</li>
				))}
			</ul>

			<h3 className="text-lg font-semibold mb-2">Installation</h3>
			<div className={STYLES.codeBlock}>
				<pre className="text-sm">
					<code>
						{installation.steps.map((step: string, index: number) => (
							<div key={index}>{step}</div>
						))}
					</code>
				</pre>
			</div>
		</div>
	</section>
);

// Environment Variables Component
const EnvironmentVariables = ({ envVars }: { envVars: EnvVariableType[] }) => (
	<section className={STYLES.sectionContent}>
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
					{envVars.map((envVar, index) => (
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
);

// Demo Links Component
const DemoLinks = ({ liveUrl, githubUrl }: { liveUrl?: string; githubUrl?: string }) => (
	<section className={STYLES.sectionContent}>
		<SectionHeader icon="🔗" title="Links" />
		<div className="flex gap-4">
			{liveUrl && (
				<a href={liveUrl} target="_blank" rel="noopener noreferrer" className={STYLES.button.primary}>
					🌐 Live Demo
				</a>
			)}
			{githubUrl && (
				<a href={githubUrl} target="_blank" rel="noopener noreferrer" className={STYLES.button.secondary}>
					📂 Source Code
				</a>
			)}
		</div>
	</section>
);

// Custom Sections Component
const CustomSections = ({ sections }: { sections: CustomSectionType[] }) => (
	<>
		{sections.map((section, index) => (
			<section key={index} className={STYLES.sectionContent}>
				<SectionHeader icon={section.icon} title={section.title} />
				<p className="gh-text">{section.content}</p>
			</section>
		))}
	</>
);

// Markdown Components Configuration
const getMarkdownComponents = () => ({
	h1: ({ children }: ReactComponentProps) => (
		<h1 className="text-3xl font-bold gh-text mb-6 pb-2 border-b gh-border">{children}</h1>
	),
	h2: ({ children }: ReactComponentProps) => (
		<h2 className="text-2xl font-semibold gh-text mb-4 mt-8 pb-2 border-b gh-border">{children}</h2>
	),
	h3: ({ children }: ReactComponentProps) => <h3 className="text-xl font-semibold gh-text mb-3 mt-6">{children}</h3>,
	h4: ({ children }: ReactComponentProps) => <h4 className="text-lg font-semibold gh-text mb-2 mt-4">{children}</h4>,
	p: ({ children }: ReactComponentProps) => <p className="gh-text mb-4 leading-relaxed">{children}</p>,
	ul: ({ children }: ReactComponentProps) => (
		<ul className="list-disc list-inside gh-text mb-4 space-y-1">{children}</ul>
	),
	ol: ({ children }: ReactComponentProps) => (
		<ol className="list-decimal list-inside gh-text mb-4 space-y-1">{children}</ol>
	),
	li: ({ children }: ReactComponentProps) => <li className="gh-text">{children}</li>,
	a: ({ href, children }: LinkProps) => (
		<a href={href} className="gh-text-accent hover:underline" target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	),
	// Inline code styling
	code: ({ children }: ReactComponentProps) => <code className={STYLES.inlineCode}>{children}</code>,

	// Code block container - children already contains <code> from ReactMarkdown
	pre: ({ children }: ReactComponentProps) => <pre className={STYLES.codeBlock}>{children}</pre>,
	blockquote: ({ children }: ReactComponentProps) => (
		<blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic gh-text-muted mb-4">
			{children}
		</blockquote>
	),
	img: ({ src, alt }: ImageProps) => {
		const srcString = src as string;
		const isBadge = srcString?.includes("img.shields.io");

		if (isBadge) {
			return (
				<Image
					src={srcString}
					alt={alt || ""}
					width={100}
					height={24}
					className="inline-block"
					style={{ width: "auto", height: "24px" }}
				/>
			);
		}

		return (
			<Image
				src={srcString}
				alt={alt || ""}
				width={800}
				height={400}
				className="max-w-full h-auto rounded-md shadow-sm object-contain mb-4 block"
				style={{ width: "auto", height: "auto" }}
			/>
		);
	},
	hr: () => <hr className="border-t gh-border my-8" />,
});

// GitHub README Component
const GitHubReadme = ({ content }: { content: string }) => (
	<div className={STYLES.content}>
		<div className={STYLES.proseGenerated}>
			<ReactMarkdown components={getMarkdownComponents()}>{content}</ReactMarkdown>
		</div>
	</div>
);

// Generated README Component
const GeneratedReadme = ({ project }: { project: ProjectReadmeProps["project"] }) => {
	const { readmeContent } = project;

	return (
		<div className={STYLES.content}>
			<div className={STYLES.prose}>
				{/* Project Title & Description */}
				<section className={STYLES.sectionContent}>
					<h1 className="flex text-3xl font-bold items-center gap-2 mb-4">
						<span>🚀</span> {project.name}
					</h1>
					<p className="text-lg gh-text-muted mb-4">{project.description}</p>
					{project.longDescription && <p className="gh-text leading-relaxed">{project.longDescription}</p>}
				</section>

				{/* Features */}
				{readmeContent?.features?.length && <Features features={readmeContent.features} />}

				{/* Tech Stack */}
				<TechStack technologies={project.technologies} />

				{/* Technical Details */}
				{readmeContent?.techDetails && <TechnicalDetails techDetails={readmeContent.techDetails} />}

				{/* Installation */}
				{readmeContent?.installation && <Installation installation={readmeContent.installation} />}

				{/* Environment Variables */}
				{readmeContent?.envVariables?.length && <EnvironmentVariables envVars={readmeContent.envVariables} />}

				{/* Demo Links */}
				{(project.liveUrl || project.githubUrl) && (
					<DemoLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
				)}

				{/* Custom Sections */}
				{readmeContent?.customSections?.length && <CustomSections sections={readmeContent.customSections} />}
			</div>
		</div>
	);
};

// Main Component
export function ProjectReadme({ project, readmeContent }: ProjectReadmeProps) {
	return (
		<div className={STYLES.container}>
			<ReadmeHeader isGitHub={!!readmeContent} />
			{readmeContent ? <GitHubReadme content={readmeContent} /> : <GeneratedReadme project={project} />}
		</div>
	);
}
