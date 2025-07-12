import React from "react";
import { Search } from "lucide-react";

interface Project {
	id: number;
	name: string;
	description: string;
	language: string;
	languageColor: string;
	stars: number;
	forks: number;
	isPrivate: boolean;
	updatedAt: string;
	topics: string[];
}

const projects: Project[] = [
	{
		id: 1,
		name: "portfolio-website",
		description:
			"A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring GitHub-inspired design and dark mode support.",
		language: "TypeScript",
		languageColor: "#3178c6",
		stars: 47,
		forks: 12,
		isPrivate: false,
		updatedAt: "2 days ago",
		topics: ["nextjs", "tailwindcss", "portfolio", "react"],
	},
	{
		id: 2,
		name: "task-management-app",
		description:
			"Full-stack task management application with real-time collaboration, built with Node.js, React, and Socket.io.",
		language: "JavaScript",
		languageColor: "#f1e05a",
		stars: 89,
		forks: 23,
		isPrivate: false,
		updatedAt: "5 days ago",
		topics: ["nodejs", "react", "socketio", "mongodb"],
	},
	{
		id: 3,
		name: "ecommerce-microservices",
		description:
			"Scalable e-commerce platform built with microservices architecture using Docker, Kubernetes, and various technologies.",
		language: "Go",
		languageColor: "#00add8",
		stars: 156,
		forks: 34,
		isPrivate: false,
		updatedAt: "1 week ago",
		topics: ["microservices", "docker", "kubernetes", "golang"],
	},
	{
		id: 4,
		name: "ai-content-generator",
		description:
			"AI-powered content generation tool using OpenAI's GPT models with a clean interface built in React.",
		language: "Python",
		languageColor: "#3572a5",
		stars: 203,
		forks: 67,
		isPrivate: false,
		updatedAt: "3 days ago",
		topics: ["ai", "openai", "python", "react"],
	},
	{
		id: 5,
		name: "mobile-fitness-tracker",
		description:
			"Cross-platform mobile fitness tracking app built with React Native and integrated with health APIs.",
		language: "TypeScript",
		languageColor: "#3178c6",
		stars: 78,
		forks: 19,
		isPrivate: false,
		updatedAt: "1 week ago",
		topics: ["react-native", "fitness", "mobile", "health"],
	},
	{
		id: 6,
		name: "blockchain-voting-system",
		description: "Secure voting system built on Ethereum blockchain with smart contracts and a React frontend.",
		language: "Solidity",
		languageColor: "#aa6746",
		stars: 112,
		forks: 28,
		isPrivate: false,
		updatedAt: "2 weeks ago",
		topics: ["blockchain", "ethereum", "solidity", "voting"],
	},
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="max-w-6xl mx-auto px-4 py-12">
			<div className="mb-8">
				<h2 className="text-2xl font-bold gh-text mb-2">Popular repositories</h2>
				<p className="gh-text-muted">A showcase of my most popular and recent projects</p>
			</div>

			{/* Repository Filter/Search Bar */}
			<div className="mb-6 flex flex-col sm:flex-row gap-4">
				<div className="flex-1">
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Search className="h-4 w-4 gh-text-muted" />
						</div>
						<input
							type="text"
							placeholder="Find a repository..."
							className="w-full pl-10 pr-4 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent gh-text"
						/>
					</div>
				</div>
				<div className="flex gap-2">
					<select className="px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md gh-text">
						<option>Type: All</option>
						<option>Sources</option>
						<option>Forks</option>
						<option>Archived</option>
					</select>
					<select className="px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md gh-text">
						<option>Language: All</option>
						<option>TypeScript</option>
						<option>JavaScript</option>
						<option>Python</option>
						<option>Go</option>
					</select>
					<select className="px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md gh-text">
						<option>Sort: Updated</option>
						<option>Name</option>
						<option>Stars</option>
						<option>Created</option>
					</select>
				</div>
			</div>

			{/* Repository List */}
			<div className="space-y-4">
				{projects.map((project) => (
					<div
						key={project.id}
						className="gh-bg-canvas-overlay border gh-border rounded-lg p-6 hover:gh-bg-canvas-subtle transition-colors"
					>
						<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
							<div className="flex-1">
								{/* Repository Header */}
								<div className="flex items-center gap-3 mb-2">
									<h3 className="text-lg font-semibold">
										<a href="#" className="gh-text-accent hover:underline">
											{project.name}
										</a>
									</h3>
									<span
										className={`text-xs px-2 py-1 border rounded-full ${
											project.isPrivate ? "gh-text-muted gh-border" : "gh-text-muted gh-border"
										}`}
									>
										{project.isPrivate ? "Private" : "Public"}
									</span>
								</div>

								{/* Description */}
								<p className="gh-text-muted text-sm mb-3 leading-relaxed">{project.description}</p>

								{/* Topics */}
								{project.topics.length > 0 && (
									<div className="flex flex-wrap gap-2 mb-3">
										{project.topics.map((topic) => (
											<span
												key={topic}
												className="text-xs px-2 py-1 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle hover:gh-bg-accent-muted transition-colors cursor-pointer"
											>
												{topic}
											</span>
										))}
									</div>
								)}

								{/* Repository Stats */}
								<div className="flex items-center gap-4 text-xs gh-text-muted">
									{project.language && (
										<span className="flex items-center gap-1">
											<div
												className="w-3 h-3 rounded-full"
												style={{ backgroundColor: project.languageColor }}
											/>
											{project.language}
										</span>
									)}
									<span className="flex items-center gap-1">
										<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										{project.stars}
									</span>
									<span className="flex items-center gap-1">
										<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										{project.forks}
									</span>
									<span>Updated {project.updatedAt}</span>
								</div>
							</div>

							{/* Repository Actions */}
							<div className="flex gap-2">
								<button className="btn-secondary text-xs px-3 py-1">
									<svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									Star
								</button>
								<button className="btn-secondary text-xs px-3 py-1">
									<svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Fork
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Load More */}
			<div className="text-center mt-8">
				<button className="btn-secondary">Load more repositories</button>
			</div>
		</section>
	);
}
