import { Project } from "./index";

export const youngMindsClubData: Project = {
	// Basic info
	id: "youngminds-club",
	name: "YoungMinds Club",
	description:
		"A comprehensive platform for youth engagement activities and events with role-based access control (RBAC), built using the MERN stack",
	longDescription:
		"YoungMinds Club is a comprehensive platform for youth engagement activities and events featuring role-based access control (RBAC). Built with the MERN stack and TypeScript, it enables seamless event management, user authentication, and role-based dashboards for different user types including Users, Organizers, and Admins. The platform provides secure JWT + Google OAuth authentication, QR code ticketing, cloud-based image storage, and modern responsive design.",

	// Links
	liveUrl: "https://www.youngminds.club",
	// Note: GitHub repo is private, so we use the fallback readmeContent below

	// Tech details
	technologies: [
		"React 19",
		"TypeScript",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Vite",
		"Tailwind CSS",
		"Headless UI",
		"JWT Authentication",
		"Google OAuth",
		"Cloudinary",
		"QR Code Generation",
		"Role-Based Access Control",
		"Vercel Deployment",
		"Mongoose ODM",
		"React Router DOM",
	],
	primaryLanguage: { name: "TypeScript", color: "bg-blue-500" },
	category: "Web",

	// Status
	isPinned: true,
	featured: true,
	createdAt: "2025-05-01",

	// Visual content
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
			title: "Role-Based Dashboard",
			description:
				"Customized dashboards for Users, Organizers, and Admins with role-specific features and analytics for comprehensive event management",
		},
		{
			url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
			title: "Event Management System",
			description:
				"Comprehensive event creation and management interface with image uploads, QR code generation, and attendee tracking capabilities",
		},
		{
			url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
			title: "QR Code Ticketing",
			description:
				"Secure QR code-based ticketing system with cloud storage integration and real-time validation for seamless event entry",
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"🔐 Secure Authentication - JWT + Google OAuth integration for secure user access",
			"👥 Role-Based Access Control - User, Organizer, and Admin roles with tailored permissions",
			"📱 Responsive Dashboards - Customized views for different user roles and responsibilities",
			"🎉 Event Management - Create, update, and manage events with comprehensive tools",
			"🔍 Event Discovery - Browse and book available events with advanced filtering",
			"👤 Profile Management - Complete profile system with cloud-based image uploads",
			"☁️ Cloud Storage - Cloudinary integration for efficient image handling and storage",
			"📊 QR Code Generation - Event ticketing system with QR codes for seamless entry",
			"🚀 Modern Tech Stack - Built with React 19, TypeScript, Node.js, and MongoDB",
			"📱 Mobile-First Design - Tailwind CSS for responsive, modern styling",
			"🔄 Real-time Updates - Live data synchronization across all user interfaces",
			"🛡️ Secure File Uploads - Multer and Cloudinary for safe file handling",
		],
		techDetails: {
			framework: "React 19 with TypeScript and Vite for fast development",
			styling: "Tailwind CSS 4.1 with Headless UI components and modern animations",
			animations: "React Router DOM 7.5 for smooth client-side routing",
			deployment: "Vercel deployment for both frontend and backend with serverless functions",
			performance: {
				lighthouse: 95,
				loadTime: "< 2s",
				coreWebVitals: "All green metrics with TypeScript optimization",
			},
		},
		installation: {
			prerequisites: [
				"Node.js (v18 or higher) for runtime environment",
				"npm or yarn package manager for dependency management",
				"MongoDB (local installation or MongoDB Atlas cloud database)",
				"Git for version control and repository cloning",
			],
			steps: [
				'Clone the repository: `git clone <repository-url> && cd "YoungMinds Club"`',
				"Install backend dependencies: `cd server && npm install`",
				"Set up backend environment variables in server/.env file",
				"Install frontend dependencies: `cd ../client && npm install`",
				"Set up frontend environment variables in client/.env file",
				"Start backend server: `cd server && npm run dev` (port 5000)",
				"Start frontend development server: `cd client && npm run dev` (port 5173)",
				"Access the application at http://localhost:5173",
			],
		},
		envVariables: [
			{
				name: "MONGODB_URI",
				description: "MongoDB connection string for database access",
				required: true,
			},
			{
				name: "JWT_SECRET",
				description: "Super secure JWT secret key for token generation",
				required: true,
			},
			{
				name: "GOOGLE_CLIENT_ID",
				description: "Google OAuth client ID for authentication",
				required: true,
			},
			{
				name: "GOOGLE_CLIENT_SECRET",
				description: "Google OAuth client secret for authentication",
				required: true,
			},
			{
				name: "CLOUDINARY_CLOUD_NAME",
				description: "Cloudinary cloud name for image storage",
				required: true,
			},
			{
				name: "CLOUDINARY_API_KEY",
				description: "Cloudinary API key for cloud storage access",
				required: true,
			},
			{
				name: "CLOUDINARY_API_SECRET",
				description: "Cloudinary API secret for secure cloud operations",
				required: true,
			},
		],
		customSections: [
			{
				title: "Architecture & Tech Stack",
				icon: "🏗️",
				content:
					"**Frontend Stack:** React 19 with TypeScript, Vite for fast builds, Tailwind CSS for styling, Headless UI for accessible components\n**Backend Stack:** Node.js with Express.js framework, MongoDB with Mongoose ODM, JWT for authentication, Google APIs for OAuth\n**Development Tools:** TypeScript for type safety, ESLint for code quality, Nodemon for auto-restart, Morgan for request logging\n**Cloud Services:** Cloudinary for image storage, Vercel for deployment, MongoDB Atlas for database hosting",
			},
			{
				title: "Role-Based Access Control",
				icon: "👥",
				content:
					"**User Role:** Browse and book events, manage personal profile, view booking history, generate QR tickets\n**Organizer Role:** Create and manage events, view event analytics, handle attendee management, access organizer dashboard\n**Admin Role:** Manage all users and roles, oversee all events, access system analytics, moderate platform content\n**Security:** JWT token-based authentication with role validation middleware for secure access control",
			},
			{
				title: "Event Management System",
				icon: "🎉",
				content:
					"**Event Creation:** Rich event creation with images, descriptions, pricing, and capacity management\n**Booking System:** Secure event booking with payment integration and confirmation emails\n**QR Code Ticketing:** Generate unique QR codes for each booking with validation system\n**Event Discovery:** Advanced filtering by category, date, location, and price range\n**Analytics:** Comprehensive event performance tracking and attendee insights",
			},
			{
				title: "Development & Deployment",
				icon: "🚀",
				content:
					"**TypeScript Integration:** Full TypeScript support for enhanced developer experience and type safety\n**Modern Development:** Vite for lightning-fast builds, ESLint for code quality, hot module replacement for instant updates\n**Vercel Deployment:** Separate deployments for frontend (SPA) and backend (serverless functions)\n**Environment Management:** Secure environment variable handling for different deployment stages\n**Performance Optimization:** Code splitting, lazy loading, and optimized bundle sizes for fast loading",
			},
		],
	},
};
