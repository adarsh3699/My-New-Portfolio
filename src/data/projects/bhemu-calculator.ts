import { Project } from "./index";

export const bhemuCalculatorData: Project = {
	// Basic info
	id: "bhemu-calculator",
	name: "Bhemu Calculator",
	description:
		"A comprehensive educational calculator suite designed for students, featuring GPA calculation, profile management, real-time collaboration, and additional utility calculators",
	longDescription:
		"Bhemu Calculator is a comprehensive educational calculator suite built specifically for students. It features a powerful GPA calculator with multi-semester management, profile system, and real-time collaboration capabilities. Beyond GPA calculations, it includes additional utility calculators for physics, linear algebra, and number systems. Built with React and Firebase, it offers secure authentication, real-time synchronization, and seamless sharing features for collaborative learning.",

	// Links
	githubUrl: "https://github.com/adarsh3699/Bhemu-Calculator",
	liveUrl: "https://calc-bhemu.vercel.app/",
	githubRepo: {
		owner: "adarsh3699",
		name: "Bhemu-Calculator",
		branch: "main",
	},

	// Tech details
	technologies: [
		"React",
		"Firebase",
		"Firestore",
		"Firebase Authentication",
		"React Router DOM",
		"Math.js",
		"JavaScript",
		"CSS",
		"Google OAuth",
		"Real-time Collaboration",
		"Create React App",
		"Responsive Design",
		"PWA Ready",
	],
	primaryLanguage: { name: "JavaScript", color: "bg-yellow-500" },
	category: "Tool",

	// Status
	isPinned: false,
	featured: false,
	createdAt: "2024-08-15",

	// Visual content
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=600&fit=crop",
			title: "GPA Calculator Dashboard",
			description:
				"Comprehensive GPA calculator with multi-semester management, profile system, and real-time grade tracking for academic excellence",
		},
		{
			url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
			title: "Real-time Collaboration",
			description:
				"Share GPA profiles with classmates using email-based sharing system with customizable read-only or edit permissions",
		},
		{
			url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
			title: "Multiple Calculator Suite",
			description:
				"Additional utility calculators including Speed/Distance/Time, Matrix Determinant, and Number System converters for comprehensive learning",
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"🎯 Multi-semester GPA Management - Organize subjects by semesters with individual and cumulative GPA calculation",
			"👥 Profile System - Create multiple GPA profiles for different academic programs and courses",
			"🤝 Real-time Collaboration - Share profiles with classmates with read-only or edit permissions",
			"📊 Grade System Support - Indian/International grading scale (O=10, A+=9, A=8, etc.)",
			"🔄 Automatic Sync - Real-time synchronization across all devices and platforms",
			"📈 Smart Analytics - Track total subjects, credits, and semester-wise performance insights",
			"🧮 Speed/Distance/Time Calculator - Physics calculations with multiple unit conversions",
			"🔢 Matrix Determinant Calculator - Linear algebra tool supporting up to 5×5 matrices",
			"🔀 Number Converter - Convert between binary, octal, decimal, and hexadecimal systems",
			"🔐 Firebase Authentication - Secure login with email/password or Google OAuth integration",
			"📱 Responsive Design - Seamless experience across desktop, tablet, and mobile devices",
			"🌐 Live Demo Available - Try all features without setup at calc-bhemu.vercel.app",
		],
		techDetails: {
			framework: "React 18.2.0 with Create React App for fast development",
			styling: "Custom CSS with responsive design and modern UI components",
			backend: "Firebase with Authentication and Firestore for real-time data",
			deployment: "Vercel deployment with continuous integration from GitHub",
			performance: {
				lighthouse: 92,
				loadTime: "< 1.5s",
				coreWebVitals: "Optimized for educational use with fast calculations",
			},
		},
		installation: {
			prerequisites: [
				"Node.js (v14 or higher) for runtime environment",
				"npm or yarn package manager for dependency management",
				"Firebase project with Authentication and Firestore enabled",
				"Git for version control and repository cloning",
			],
			steps: [
				"Clone the repository: `git clone https://github.com/adarsh3699/Bhemu-Calculator.git && cd Bhemu-Calculator`",
				"Install dependencies: `npm install`",
				"Configure Firebase by creating .env file in root directory",
				"Add Firebase configuration keys to environment variables",
				"Start the development server: `npm start`",
				"Open browser and navigate to http://localhost:3000",
				"Sign up or login to start using the calculator suite",
			],
		},
		envVariables: [
			{
				name: "REACT_APP_FIREBASE_API_KEY",
				description: "Firebase API key for project authentication",
				required: true,
			},
			{
				name: "REACT_APP_FIREBASE_AUTH_DOMAIN",
				description: "Firebase authentication domain for user management",
				required: true,
			},
			{
				name: "REACT_APP_FIREBASE_PROJECT_ID",
				description: "Firebase project ID for Firestore database access",
				required: true,
			},
			{
				name: "REACT_APP_FIREBASE_STORAGE_BUCKET",
				description: "Firebase storage bucket for file uploads",
				required: true,
			},
			{
				name: "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
				description: "Firebase messaging sender ID for notifications",
				required: true,
			},
			{
				name: "REACT_APP_FIREBASE_APP_ID",
				description: "Firebase app ID for application identification",
				required: true,
			},
		],
		customSections: [
			{
				title: "GPA Calculator Features",
				icon: "🎓",
				content:
					"**Multi-semester Management:** Organize subjects by academic semesters with automatic GPA calculations\n**Profile System:** Create multiple GPA profiles for different academic programs or courses\n**Grade Systems:** Support for Indian grading scale (O=10, A+=9, A=8, B+=7, etc.) and international systems\n**Smart Analytics:** Track total subjects, credits, semester-wise performance, and cumulative GPA trends\n**Real-time Updates:** Instant calculation updates as you modify grades and credits",
			},
			{
				title: "Collaboration & Sharing",
				icon: "🤝",
				content:
					"**Email-based Sharing:** Share GPA profiles with classmates using their email addresses\n**Permission Control:** Grant read-only or full edit access to shared profiles\n**Live Collaboration:** Multiple users can simultaneously edit shared profiles with real-time sync\n**Share Management:** View and manage all your shared and received profiles in one dashboard\n**Security:** Secure sharing with Firebase authentication and access control",
			},
			{
				title: "Additional Calculators",
				icon: "🧮",
				content:
					"**Speed/Distance/Time Calculator:** Physics calculations with multiple unit conversions for problem-solving\n**Matrix Determinant Calculator:** Linear algebra tool supporting matrices up to 5×5 for mathematical computations\n**Number System Converter:** Convert between binary, octal, decimal, and hexadecimal number systems\n**Math.js Integration:** Powerful mathematical computation engine for accurate results\n**Educational Focus:** Designed specifically for student needs and academic requirements",
			},
			{
				title: "Technical Architecture",
				icon: "🏗️",
				content:
					"**Frontend:** React 18.2.0 with Create React App for modern component-based architecture\n**Backend:** Firebase services including Authentication, Firestore database, and real-time synchronization\n**Routing:** React Router DOM 6.24.1 for seamless single-page application navigation\n**UI Components:** React Responsive Modal and custom CSS for polished user interface\n**Deployment:** Vercel platform with continuous deployment from GitHub repository\n**Security:** Firebase security rules and authentication for protected data access",
			},
		],
	},
};
