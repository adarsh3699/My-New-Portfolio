import { type Project } from "./index";

// TEMPLATE: Copy this file and rename to your project ID (e.g., my-awesome-project.ts)
// Then update the projects/index.ts file to import and include your new project

export const yourProjectNameData: Project = {
	// Required fields
	id: "your-project-id", // URL-friendly identifier
	name: "Your Project Name",
	description: "Brief description of your project (used in cards and listings)",

	// Optional extended description
	longDescription:
		"Detailed description of your project. This will be used in the project detail page and README fallback.",

	// URLs and links (optional)
	githubUrl: "https://github.com/username/repo-name",
	liveUrl: "https://your-project.vercel.app",
	demoVideoUrl: "https://www.youtube.com/watch?v=your-demo-video", // Optional: Demo video URL (YouTube, Vimeo, etc.)

	// GitHub repository info for README fetching (optional)
	githubRepo: {
		owner: "your-github-username",
		name: "repository-name",
		branch: "main", // or "master", defaults to "main"
	},

	// Technical details (required)
	technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"], // List of technologies used
	primaryLanguage: {
		name: "TypeScript", // Primary language
		color: "bg-blue-500", // Tailwind color class for language badge
	},

	// Classification (required)
	category: "Web", // "Web" | "Mobile" | "Desktop" | "Library" | "Tool" | "Game" | "AI/ML" | "API" | "Blockchain" | "Other"
	isPinned: false, // Show in pinned projects section
	featured: false, // Show in featured projects (optional)

	// Dates (required)
	createdAt: "2024-01-01",

	// Project screenshots with descriptions (optional)
	screenshots: [
		{
			url: "https://example.com/screenshot1.jpg",
			title: "Main Dashboard",
			description: "Overview of the main dashboard showing key metrics and navigation",
		},
		{
			url: "https://example.com/screenshot2.jpg",
			title: "User Profile",
			description: "User profile page with settings and preferences",
		},
	],

	// README content for fallback when GitHub README is not available (optional)
	readmeContent: {
		// Core project features (optional)
		features: [
			"List the main features of your project",
			"Each feature should be a clear, concise statement",
			"Users will see these as checkmarked bullet points",
			"Focus on user benefits and key capabilities",
		],

		// Technical implementation details (optional)
		techDetails: {
			framework: "React", // Main framework used
			styling: "Tailwind CSS", // CSS framework or approach
			animations: "Framer Motion", // Animation library (optional)
			deployment: "Vercel", // Deployment platform
			performance: {
				// Performance metrics (optional)
				lighthouse: 95,
				loadTime: "< 2s",
				coreWebVitals: "Excellent",
			},
		},

		// Installation instructions (optional)
		installation: {
			prerequisites: [
				"Node.js (v18 or higher)",
				"Your package manager (npm/yarn/pnpm)",
				"Any other requirements",
			],
			steps: [
				"git clone https://github.com/username/repo.git",
				"cd repo-name",
				"npm install",
				"cp .env.example .env",
				"npm run dev",
			],
		},

		// Environment variables (optional)
		envVariables: [
			{
				name: "DATABASE_URL",
				description: "Connection string for your database",
				required: true,
			},
			{
				name: "API_KEY",
				description: "External API key for third-party service",
				required: false,
			},
		],

		// All custom sections including contributing and license (optional)
		customSections: [
			{
				title: "Custom Section Title",
				icon: "🎯", // Any emoji or icon
				content:
					"Custom content for this section. You can add any additional information about your project here.",
			},
			{
				title: "Another Section",
				icon: "📊",
				content:
					"Add as many custom sections as needed. Each section will appear with the specified icon and content.",
			},
			{
				title: "Contributing",
				icon: "🤝",
				content:
					"Custom contributing guidelines for your project. Explain how others can contribute, coding standards, PR process, etc.",
			},
			{
				title: "License",
				icon: "📄",
				content: "Custom license information. Specify the license type and any additional terms.",
			},
		],
	},
};

// Steps to add a new project:
// 1. Copy this template to a new file: your-project-id.ts
// 2. Fill in all the project details above
// 3. Update src/data/projects/index.ts:
//    - Add import: import { yourProjectNameData } from './your-project-id';
//    - Add to projects array: yourProjectNameData,
// 4. The project will automatically appear in your portfolio!
