import { type Project } from "./index";

export const myNewPortfolioData: Project = {
	id: "my-new-portfolio",
	name: "My New Portfolio",
	description:
		"A modern, GitHub-inspired portfolio website built with Next.js 15, showcasing my projects, experience, and skills with a clean, professional design.",
	longDescription:
		"This portfolio website represents a complete redesign of my personal brand, featuring a GitHub-inspired interface that developers will find familiar and intuitive. Built with the latest Next.js 15 and TypeScript, it showcases modern web development practices including server-side rendering, responsive design, and optimized performance.",

	// URLs and links
	githubUrl: "https://github.com/adarsh3699/My-New-Portfolio",
	liveUrl: "https://my-new-portfolio-mu-livid.vercel.app",
	demoVideoUrl: "https://www.youtube.com/watch?v=example123", // Example demo video URL

	// GitHub repository information
	githubRepo: {
		owner: "adarsh3699",
		name: "My-New-Portfolio",
		branch: "main",
	},

	// Technical details
	technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
	primaryLanguage: {
		name: "TypeScript",
		color: "bg-blue-500",
	},

	// Classification
	category: "Web",
	isPinned: true,
	featured: true,

	// Dates
	createdAt: "2023-01-15",

	// Project screenshots with descriptions
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
			title: "Homepage Design",
			description:
				"The main landing page showcasing a clean, GitHub-inspired design with modern typography and smooth animations. Features a hero section with personal introduction and quick navigation to key sections.",
		},
		{
			url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
			title: "Projects Showcase",
			description:
				"Interactive projects gallery with advanced filtering, search functionality, and detailed project cards. Each project displays technologies used, GitHub stats, and quick access to live demos.",
		},
		{
			url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
			title: "Responsive Design",
			description:
				"Fully responsive layout that adapts beautifully to all screen sizes. Mobile-first approach ensures optimal user experience across desktop, tablet, and mobile devices.",
		},
	],

	// All README content organized in one place
	readmeContent: {
		// Core project features
		features: [
			"GitHub-inspired UI design with familiar developer experience",
			"Server-side rendering with Next.js 15 for optimal SEO",
			"TypeScript for type-safe development and better maintainability",
			"Framer Motion animations for smooth user interactions",
			"Responsive design that works perfectly on all devices",
			"Dark/light mode support with system preference detection",
			"Real-time GitHub data integration for projects and contributions",
			"Advanced project filtering and search capabilities",
			"Contact form with email integration",
			"Optimized performance with lazy loading and code splitting",
		],

		// Technical implementation details
		techDetails: {
			framework: "Next.js 15",
			styling: "Tailwind CSS",
			animations: "Framer Motion",
			deployment: "Vercel",
			performance: {
				lighthouse: 95,
				loadTime: "< 2s",
				coreWebVitals: "Excellent",
			},
		},

		// Installation instructions
		installation: {
			prerequisites: ["Node.js (v18 or higher)", "npm or yarn package manager", "Git for version control"],
			steps: [
				"Clone the repository: git clone https://github.com/adarsh3699/My-New-Portfolio.git",
				"Navigate to project directory: cd My-New-Portfolio",
				"Install dependencies: npm install",
				"Create environment file: cp .env.example .env.local",
				"Add your environment variables (GitHub token, email service, etc.)",
				"Start development server: npm run dev",
				"Open http://localhost:3000 in your browser",
			],
		},

		// Environment variables configuration
		envVariables: [
			{
				name: "GITHUB_TOKEN",
				description: "GitHub personal access token for API requests",
				required: true,
			},
			{
				name: "NEXT_PUBLIC_SITE_URL",
				description: "Your site URL for metadata and SEO",
				required: true,
			},
			{
				name: "EMAILJS_SERVICE_ID",
				description: "EmailJS service ID for contact form",
				required: false,
			},
		],

		// All custom sections including contributing and license
		customSections: [
			{
				title: "Architecture",
				icon: "🏗️",
				content:
					"Built using modern React patterns with TypeScript for type safety. The application follows a component-based architecture with reusable UI components and a clean separation of concerns.",
			},
			{
				title: "SEO & Performance",
				icon: "⚡",
				content:
					"Optimized for search engines with proper meta tags, structured data, and server-side rendering. Achieves Lighthouse scores of 95+ with lazy loading, code splitting, and optimized assets.",
			},
			{
				title: "Contributing",
				icon: "🤝",
				content:
					"Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change. Make sure to update tests and documentation as appropriate.",
			},
			{
				title: "License",
				icon: "📄",
				content:
					"This project is licensed under the MIT License - see the LICENSE file for details. Feel free to use this code for your own projects.",
			},
		],
	},
};
