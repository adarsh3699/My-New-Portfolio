import { Project } from "./index";

export const priceComparisonWebData: Project = {
	// Basic info
	id: "price-comparison-web",
	name: "Price Comparison Web",
	description: "Smart price comparison tool across multiple e-commerce platforms to find the best deals",
	longDescription:
		"A modern, responsive web application that helps users compare product prices across multiple e-commerce platforms including Amazon, Flipkart, Myntra, Paytm, and others. Built with React and Node.js, this tool provides real-time price comparisons, automatic discount detection, and intelligent search functionality to help users make informed purchasing decisions.",

	// Links
	githubUrl: "https://github.com/adarsh3699/price-comparison-web",
	liveUrl: "https://comparison.bhemu.me",
	githubRepo: {
		owner: "adarsh3699",
		name: "price-comparison-web",
		branch: "main",
	},

	// Tech details
	technologies: [
		"React",
		"Node.js",
		"Express.js",
		"JavaScript",
		"Axios",
		"Cheerio",
		"React Router DOM",
		"CSS3",
		"CORS",
		"Vercel",
		"REST API",
		"Web Scraping",
	],
	primaryLanguage: { name: "JavaScript", color: "bg-yellow-500" },
	category: "Tool",

	// Status
	isPinned: true,
	featured: true,
	createdAt: "2023-02-10",

	// Visual content
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
			title: "Smart Product Search",
			description:
				"Intelligent search interface with real-time product results, advanced filtering options, and category-based browsing for easy product discovery",
		},
		{
			url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
			title: "Price Comparison Results",
			description:
				"Side-by-side price comparison across multiple e-commerce platforms with discount calculations, savings highlights, and direct purchase links",
		},
		{
			url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
			title: "Mobile Responsive Design",
			description:
				"Fully optimized mobile experience with touch-friendly interface, fast loading times, and seamless shopping experience across all devices",
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"🔍 Smart Product Search - Intelligent search with real-time results across platforms",
			"💰 Multi-Platform Price Comparison - Compare prices from Amazon and Flipkart",
			"🏷️ Automatic Deal Detection - Real-time discount calculation and offer highlighting",
			"📱 Responsive Design - Optimized for desktop, tablet, and mobile devices",
			"⚡ Fast Loading - Efficient API calls with loading states and error handling",
			"🔄 Pagination Support - Smooth navigation through large product catalogs",
			"🎯 Direct Purchase Links - One-click redirection to retailer websites",
			"🚀 Real-time Updates - Live price and availability information",
			"🛒 Product Details - Comprehensive product information with images and specifications",
			"📊 Price Analytics - Historical price trends and best deal recommendations",
		],
		techDetails: {
			framework: "React with React Router DOM for client-side routing",
			styling: "Custom CSS3 with responsive design principles",
			deployment: "Vercel serverless deployment with custom domain",
		},
		installation: {
			prerequisites: ["Node.js (v14 or higher)", "npm or yarn package manager", "Git for version control"],
			steps: [
				"Clone the repository: `git clone https://github.com/adarsh3699/price-comparison-web.git`",
				"Navigate to project directory: `cd price-comparison-web`",
				"Install backend dependencies: `cd backend && npm install`",
				"Install frontend dependencies: `cd ../frontend && npm install`",
				"Start backend server: `cd backend && npm run dev` (runs on port 10000)",
				"Start frontend development server: `cd frontend && npm start` (runs on port 3000)",
				"Open http://localhost:3000 to view the application",
			],
		},
		envVariables: [
			{
				name: "API_BASE_URL",
				description: "Base URL for the backend API endpoint",
				required: true,
			},
			{
				name: "CORS_ALLOWLIST",
				description: "Comma-separated list of allowed domains for CORS",
				required: true,
			},
		],
		customSections: [
			{
				title: "Live Demo",
				icon: "🌐",
				content:
					"Experience the application live at **https://comparison.bhemu.me**\n\nSimply search for any product to see real-time price comparisons across multiple e-commerce platforms. The first API call may take longer on free hosting platforms.",
			},
			{
				title: "API Documentation",
				icon: "📡",
				content:
					"**Search Products:** `GET /?search={query}&page={page}`\n**Get Product URL:** `GET /product/{productId}`\n\n**Base URLs:**\n- Production: `https://api-comparison.bhemu.me/`\n- Development: `http://localhost:10000/`",
			},
			{
				title: "Project Architecture",
				icon: "🏗️",
				content:
					"**Frontend:** React 18 SPA with component-based architecture\n**Backend:** Express.js API server with web scraping capabilities\n**Data Flow:** Real-time API calls → Cheerio parsing → React state management\n**Deployment:** Vercel serverless functions with automatic scaling",
			},
			{
				title: "Key Features",
				icon: "✨",
				content:
					"**Multi-Platform Support:** Amazon and Flipkart integration\n**Real-time Data:** Live price updates and availability status\n**Smart Search:** Intelligent query processing with pagination\n**Mobile First:** Responsive design for all screen sizes\n**Performance:** Optimized API calls with caching and error handling",
			},
		],
	},
};
