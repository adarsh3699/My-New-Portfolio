import { Project } from "./index";

export const sharpLearnData: Project = {
	// Basic info
	id: "sharplearn",
	name: "SharpLearn",
	description:
		"A comprehensive full-stack e-learning platform designed for employee skill development and training with course management, shopping cart, and referral system",
	longDescription:
		"SharpLearn is a comprehensive full-stack e-learning platform designed for employee skill development and training. Built with React, Node.js, Express, and MongoDB, it features secure user authentication, course management, shopping cart functionality, real-time search, referral system, and virtual wallet for course purchases. The platform offers 21 diverse courses across multiple technologies with a responsive mobile-first design and Material-UI components for a professional user experience.",

	// Links
	liveUrl: "https://sharplearn.bhemu.in/",
	githubUrl: "https://github.com/adarsh3699/SharpLearn-production",

	githubRepo: {
		owner: "adarsh3699",
		name: "SharpLearn-production",
		branch: "master",
	},

	// Tech details
	technologies: [
		"React",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Material-UI",
		"JWT Authentication",
		"bcrypt",
		"Mongoose",
		"React Router DOM",
		"Axios",
		"CORS",
		"Responsive Design",
		"Shopping Cart",
		"Search Functionality",
		"Referral System",
	],
	primaryLanguage: { name: "JavaScript", color: "bg-yellow-500" },
	category: "Web",

	// Status
	isPinned: false,
	featured: true,
	createdAt: "2024-05-01",

	// Visual content
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
			title: "Course Catalog & Search",
			description:
				"Comprehensive course catalog with real-time search functionality and category-based organization across multiple technologies",
		},
		{
			url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
			title: "Shopping Cart & Purchase System",
			description:
				"Full-featured shopping cart with add/remove functionality, virtual wallet integration, and secure course purchase flow",
		},
		{
			url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
			title: "User Dashboard & Progress Tracking",
			description:
				"Personalized user dashboard for tracking enrolled courses, progress monitoring, and referral system management",
		},
		{
			url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
			title: "Responsive Mobile Design",
			description:
				"Mobile-first responsive design with Material-UI components ensuring optimal user experience across all devices",
		},
	],

	// README content
	readmeContent: {
		features: [
			"🔐 Secure Authentication - JWT-based login/signup system with bcrypt password hashing",
			"📚 Course Management - Browse, search, and view detailed course information with demo videos",
			"🛒 Shopping Cart System - Add/remove courses with secure purchase functionality",
			"🔍 Real-time Search - Advanced course search with filtering and category organization",
			"📱 Responsive Design - Mobile-first responsive UI with Material-UI components",
			"👤 User Dashboard - Track enrolled courses, progress, and manage user profile",
			"🎁 Referral System - User referral tracking and rewards with balance management",
			"💳 Virtual Wallet - Balance management system for course purchases",
			"🎯 Course Categories - Organized course catalog by technology and skill level",
			"🎥 Demo Videos - Course preview functionality for better course selection",
			"⚡ Real-time Updates - Dynamic content loading and live data synchronization",
			"🎨 Material Design - Professional UI with consistent design system and smooth animations",
		],
		techDetails: {
			framework: "React with Material-UI for modern component-based architecture",
			styling: "Material-UI design system with responsive grid and consistent theming",
			backend: "Node.js with Express.js, MongoDB with Mongoose ODM, and JWT authentication",
			deployment: "Production-ready deployment with CORS configuration and environment management",
			performance: {
				lighthouse: 92,
				loadTime: "< 2.5s",
				coreWebVitals: "Optimized with responsive images and efficient API calls",
			},
		},
		installation: {
			prerequisites: [
				"Node.js (v16 or higher) for runtime environment",
				"MongoDB (local installation or cloud instance) for database",
				"npm or yarn package manager for dependency management",
				"Git for version control and repository cloning",
			],
			steps: [
				"Clone the repository: `git clone https://github.com/adarsh3699/SharpLearn-production.git`",
				"Navigate to project directory: `cd SharpLearn-production`",
				"Install backend dependencies: `cd backend && npm install`",
				"Install frontend dependencies: `cd ../frontend && npm install`",
				"Configure database connection in backend/index.js",
				"Set up API base URL in frontend/src/utils.js",
				"Start backend server: `cd backend && npm run dev` (port 4000)",
				"Start frontend development server: `cd frontend && npm start` (port 3000)",
				"Access the application at http://localhost:3000",
			],
		},
		envVariables: [
			{
				name: "MONGO_URI",
				description: "MongoDB connection string for database access",
				required: true,
			},
			{
				name: "JWT_SECRET",
				description: "Secret key for JWT token generation and validation",
				required: true,
			},
			{
				name: "PORT",
				description: "Backend server port number (default: 4000)",
				required: false,
			},
			{
				name: "API_BASE_URL",
				description: "Frontend API base URL for backend communication",
				required: true,
			},
			{
				name: "CORS_ORIGINS",
				description: "Allowed CORS origins for cross-origin requests",
				required: true,
			},
		],
		customSections: [
			{
				title: "E-Learning Platform Architecture",
				icon: "🎓",
				content:
					"**Frontend Architecture:** React with Material-UI components, client-side routing with React Router DOM, responsive grid system\n**Backend Architecture:** Node.js with Express.js RESTful API, MongoDB with Mongoose ODM, JWT authentication middleware\n**Project Structure:** Monorepo with frontend/ and backend/ directories, modular component architecture, service-oriented API design\n**Database Design:** MongoDB collections for users, courses, cart items, and referral tracking with efficient indexing",
			},
			{
				title: "Course Management System",
				icon: "📚",
				content:
					"**Course Catalog:** 21 diverse courses across multiple technologies with detailed descriptions and preview videos\n**Search & Filtering:** Real-time search functionality with category-based organization and advanced filtering options\n**Course Details:** Comprehensive course information with demo videos, pricing, and enrollment statistics\n**Content Organization:** Technology-based categorization with skill level indicators and learning path recommendations",
			},
			{
				title: "E-Commerce & Payment Features",
				icon: "🛒",
				content:
					"**Shopping Cart:** Full-featured cart system with add/remove functionality and persistent storage\n**Virtual Wallet:** Balance management system for course purchases with transaction history\n**Purchase Flow:** Secure course purchase process with confirmation and enrollment automation\n**Referral System:** User referral tracking with reward mechanisms and balance credits for successful referrals",
			},
			{
				title: "User Experience & Design",
				icon: "🎨",
				content:
					"**Material Design:** Consistent UI with Material-UI components and professional color schemes\n**Responsive Layout:** Mobile-first design with responsive grid system and touch-friendly interfaces\n**Loading States:** Smooth loading animations and skeleton screens for better perceived performance\n**Navigation:** Dynamic navigation bar with user authentication states and breadcrumb navigation for better orientation",
			},
			{
				title: "Authentication & Security",
				icon: "🔐",
				content:
					"**JWT Authentication:** Secure token-based authentication with automatic token refresh and validation\n**Password Security:** bcrypt password hashing with salt rounds for secure password storage\n**CORS Protection:** Configured cross-origin resource sharing for secure API access\n**Input Validation:** Server-side validation for all user inputs and API endpoints with error handling",
			},
			{
				title: "API Design & Integration",
				icon: "🔌",
				content:
					"**RESTful API:** Well-structured REST endpoints for authentication, courses, cart, and user management\n**Service Layer:** Modular API services for auth, courses, and cart functionality with proper error handling\n**Real-time Features:** Dynamic content loading with efficient API calls and caching strategies\n**Documentation:** Comprehensive API endpoint documentation with request/response examples and authentication requirements",
			},
		],
	},
};
