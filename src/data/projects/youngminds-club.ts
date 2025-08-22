import { Project } from "./index";

export const youngMindsClubData: Project = {
	// Basic info
	id: "youngminds-club",
	name: "YoungMinds Club",
	description:
		"A comprehensive platform for youth engagement, event management, and career opportunities with advanced role-based access control (RBAC), built using the modern MERN stack with TypeScript",
	longDescription:
		"YoungMinds Club is a comprehensive platform for youth engagement, event management, and career opportunities featuring advanced role-based access control (RBAC). Built with the modern MERN stack and TypeScript, it combines event management, internship opportunities, and gamified user engagement. The platform includes a complete internship management system, XP-based gamification with badges and streaks, professional email monitoring, advanced admin analytics, and modern responsive design. Features include JWT + Google OAuth authentication, QR code ticketing, cloud-based image storage, automated email notifications, and real-time performance tracking.",

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
		"Mongoose",
		"Vite",
		"Tailwind CSS",
		"Headless UI",
		"Heroicons",
		"JWT",
		"Google OAuth",
		"Google APIs",
		"Google Calendar API",
		"Cloudinary",
		"AWS SES",
		"Nodemailer",
		"QR Code Generation",
		"Role-Based Access Control",
		"XP & Badge System",
		"Email Monitoring",
		"Rate Limiting",
		"Vercel Deployment",
		"React Router DOM",
		"ESLint",
		"Express Validator",
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
				"Customized dashboards for Users, Organizers, and Admins with role-specific features, XP tracking, badge systems, and comprehensive analytics",
		},
		{
			url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
			title: "Event & Internship Management",
			description:
				"Comprehensive management system for both events and internships with application tracking, QR code generation, and performance analytics",
		},
		{
			url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
			title: "Gamification & Email Monitoring",
			description:
				"Advanced XP system with badges, streak tracking, and professional email monitoring dashboard with delivery analytics and health scoring",
		},
		{
			url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
			title: "Admin Analytics Dashboard",
			description:
				"Comprehensive admin dashboard with user management, content moderation, system-wide announcements, and real-time performance metrics",
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"🔐 Advanced Authentication - JWT + Google OAuth with password reset and account security using bcrypt encryption",
			"👥 Three-Tier RBAC - User, Organizer, and Admin roles with granular permission-based actions and audit logging",
			"🎉 Complete Event Lifecycle - Create, manage, track events with QR ticketing, registration management, and analytics",
			"💼 Full Internship Platform - Post, manage internships with application tracking, compensation management, and skills matching",
			"🏆 Gamification System - XP points, badge progression (Newbie to Master), daily login streaks, and achievement tracking",
			"📧 Professional Email System - Automated notifications, delivery tracking, bounce handling, and health scoring (0-100)",
			"📊 Advanced Admin Analytics - User management, content moderation, system announcements, and real-time performance metrics",
			"🎨 Modern UI/UX - Dark/light themes, smooth animations, accessible components, and mobile-optimized design",
			"☁️ Cloud Integration - Cloudinary for images, AWS SES for emails, Google Calendar API, and MongoDB Atlas",
			"🛡️ Enterprise Security - Input validation, XSS protection, rate limiting, CORS protection, and MongoDB injection prevention",
			"📱 Mobile-First Design - Touch-friendly interface, swipe gestures, optimized images, and fast loading times",
			"⚡ Performance Optimized - Code splitting, bundle analysis, database indexing, compression middleware, and caching strategies",
		],
		techDetails: {
			framework: "React 19 with TypeScript for enhanced developer experience and concurrent features",
			styling: "Tailwind CSS with Headless UI, Heroicons, and responsive design system",
			backend: "Node.js with Express.js, MongoDB with Mongoose ODM, and JWT authentication",
			deployment:
				"Vercel deployment with serverless functions, MongoDB Atlas, Cloudinary, AWS SES, and Google APIs",
			performance: {
				lighthouse: 95,
				loadTime: "< 2s",
				coreWebVitals:
					"All green metrics with TypeScript optimization, code splitting, and >98% email delivery rate",
			},
		},
		installation: {
			prerequisites: [
				"Node.js (v18 or higher) for runtime environment",
				"npm or pnpm (recommended) package manager for dependency management",
				"MongoDB (local installation or MongoDB Atlas cloud database)",
				"Git for version control and repository cloning",
				"Google Cloud Console account for OAuth setup",
				"Cloudinary account for image management",
				"AWS SES account for email services (optional)",
			],
			steps: [
				'Clone the repository: `git clone <repository-url> && cd "YoungMinds Club"`',
				"Install backend dependencies: `cd server && npm install`",
				"Create server/.env file with all required environment variables",
				"Install frontend dependencies: `cd ../client && npm install`",
				"Create client/.env file with VITE_API_URL and VITE_CLIENT_URL",
				"Start backend server: `cd server && npm run dev` (port 4000)",
				"Start frontend development server: `cd client && npm run dev` (port 5173)",
				"Access the application at http://localhost:5173",
				"Create admin account and configure initial settings",
			],
		},
		envVariables: [
			{
				name: "PORT",
				description: "Server port number (default: 4000)",
				required: false,
			},
			{
				name: "NODE_ENV",
				description: "Environment mode (development/production)",
				required: true,
			},
			{
				name: "MONGODB_URI",
				description: "MongoDB connection string for database access",
				required: true,
			},
			{
				name: "CLIENT_URL",
				description: "Frontend application URL for CORS configuration",
				required: true,
			},
			{
				name: "CORS_URL_LIST",
				description: "Comma-separated list of allowed CORS origins",
				required: true,
			},
			{
				name: "JWT_SECRET",
				description: "Super secure JWT secret key for token generation",
				required: true,
			},
			{
				name: "JWT_EXPIRES_IN",
				description: "JWT token expiration time (default: 7d)",
				required: false,
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
				name: "GOOGLE_CALLBACK_URL",
				description: "Google OAuth callback URL for authentication flow",
				required: true,
			},
			{
				name: "CLOUDINARY_CLOUD_NAME",
				description: "Cloudinary cloud name for image storage and management",
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
			{
				name: "SMTP_HOST",
				description: "SMTP server host for email sending (AWS SES recommended)",
				required: true,
			},
			{
				name: "SMTP_PORT",
				description: "SMTP server port (587 for TLS)",
				required: true,
			},
			{
				name: "EMAIL_USER",
				description: "SMTP username for email authentication",
				required: true,
			},
			{
				name: "EMAIL_PASS",
				description: "SMTP password or app password for email service",
				required: true,
			},
		],
		customSections: [
			{
				title: "Architecture & Project Structure",
				icon: "🏗️",
				content:
					"**Frontend Architecture:** React 19 with TypeScript, Vite for builds, modular component structure with admin/, auth/, common/, organizer/, and user/ directories\n**Backend Architecture:** Node.js with Express.js, RESTful API design, MongoDB with Mongoose, middleware-based authentication and validation\n**Project Structure:** Monorepo with client/ and server/ directories, comprehensive type definitions, service-oriented architecture with controllers, models, routes, and utilities\n**Cloud Services:** Cloudinary for media, AWS SES for emails, Google APIs, MongoDB Atlas, Vercel serverless deployment",
			},
			{
				title: "Advanced Role-Based Access Control",
				icon: "👥",
				content:
					"**User Role:** Browse events/internships, apply and register, manage profile with XP/badges, track application history, generate QR tickets\n**Organizer Role:** Create and manage events/internships, view analytics, handle applications, access organizer dashboard, track performance metrics\n**Admin Role:** Comprehensive user management, content moderation with flagging, system announcements, email monitoring dashboard, platform-wide analytics\n**Security Features:** JWT authentication, bcrypt password hashing, role validation middleware, audit logging, rate limiting on sensitive endpoints",
			},
			{
				title: "Comprehensive Event & Internship Management",
				icon: "🎉",
				content:
					"**Event System:** Complete lifecycle management, QR code generation, registration tracking, capacity management, featured events, analytics dashboard\n**Internship Platform:** Full posting system, application management, compensation tracking (Paid/Unpaid), location types (Remote/On-site/Hybrid), skills matching\n**Application System:** Status tracking, automated notifications, third-party integration support, daily analytics tracking\n**Discovery Features:** Advanced filtering, search functionality, category-based organization, featured content promotion",
			},
			{
				title: "Gamification & User Engagement",
				icon: "🏆",
				content:
					"**XP System:** Event registration (+10 XP), attendance (+25 XP), internship application (+15 XP), profile completion (+20 XP), daily login streaks (+5 XP)\n**Badge Progression:** Newbie (0-49 XP), Regular (50-149 XP), Champ (150-299 XP), Veteran (300-499 XP), Master (500+ XP)\n**Streak Tracking:** Daily login streaks with bonus XP, visual achievement indicators, activity history tracking\n**User Profiles:** Comprehensive profile system, organizer application workflow, achievement showcasing, activity analytics",
			},
			{
				title: "Professional Email System & Monitoring",
				icon: "📧",
				content:
					"**Email Types:** Authentication (password reset, setup), event notifications (registration, reminders), internship communications (applications, status updates), administrative emails (organizer approval, announcements)\n**Advanced Monitoring:** Real-time delivery tracking, bounce and complaint handling, automatic suppression for problematic addresses, health scoring (0-100)\n**Performance Metrics:** >98% delivery rate target, <2% bounce rate, <0.1% complaint rate, professional HTML templates with responsive design\n**Email Analytics:** Daily tracking, deliverability insights, performance reporting, rate limiting for spam prevention",
			},
			{
				title: "Security & Performance Optimization",
				icon: "🛡️",
				content:
					"**Security Features:** Input validation with Express Validator, XSS protection, MongoDB injection prevention, CORS protection, secure file uploads\n**Performance Optimization:** Code splitting with React lazy loading, database indexing, connection pooling, compression middleware, caching strategies\n**Development Tools:** ESLint for code quality, TypeScript for type safety, Nodemon for development, Morgan for request logging\n**Deployment:** Vercel serverless functions, environment-based configurations, MongoDB Atlas cloud database, CDN optimization",
			},
		],
	},
};
