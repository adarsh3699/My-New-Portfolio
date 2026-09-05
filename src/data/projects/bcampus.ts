import { Project } from "./index";

export const bcampusData: Project = {
	// Basic info
	id: "bcampus",
	name: "bCampus",
	description:
		"Academic companion for LPU students — calculators, UMS sync, real-time campus chat, notifications, and shareable academic profiles.",
	longDescription:
		"bCampus is an all-in-one academic toolkit designed specifically for LPU students. Track GPA/CGPA, analyze marks, monitor attendance, plan reappear strategies, sync data from UMS, and chat with your campus community from the web or mobile app. Available as a Next.js web app, an Expo mobile app, and a Chrome extension for direct UMS data sync.",

	// Links
	githubUrl: "https://github.com/adarsh3699/Bhemu-Calculator",
	liveUrl: "https://campus.bhemu.in",
	githubRepo: {
		owner: "adarsh3699",
		name: "Bhemu-Calculator",
		branch: "main",
	},

	// Tech details
	technologies: [
		"Next.js",
		"TypeScript",
		"React",
		"Tailwind CSS",
		"Firebase",
		"Expo",
		"React Native",
		"Cloudflare Workers",
		"Hono",
		"Plasmo",
		"WebSockets"
	],
	primaryLanguage: { name: "TypeScript", color: "bg-blue-500" },
	category: "Tool",

	// Status
	isPinned: true,
	featured: true,
	createdAt: "2025-08-15",

	// Visual content
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
			title: "bCampus Dashboard",
			description: "All-in-one academic toolkit featuring GPA, marks analysis, and attendance tracking"
		},
		{
			url: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&h=600&fit=crop",
			title: "Real-time Campus Chat",
			description: "University and batchmate rooms with live messaging, replies, and reactions"
		},
		{
			url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
			title: "UMS Integration",
			description: "Sync grades, marks, attendance, and timetable directly from LPU UMS"
		},
		{
			url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
			title: "Mobile App Companion",
			description: "Expo Android/iOS app with offline caching and native notifications for timetable and exams"
		},
		{
			url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
			title: "Profile Sharing & Leaderboard",
			description: "Share academic profiles with classmates and compete on the CGPA leaderboard"
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"📊 Academic Tools - GPA/CGPA calculator, Marks Analysis, Attendance Tracker, Goal Planner, and Reappear Calculator",
			"🔄 UMS Integration - Web extension and mobile native sync for grades, marks, attendance, and timetable",
			"💬 Campus Chat - Real-time messaging with batchmates and university rooms using Cloudflare Workers",
			"📱 Mobile App - Expo Android/iOS app with offline caching and native notifications",
			"👥 Profile Sharing - Share academic profiles with classmates and collaborate in real-time",
			"🏆 Leaderboard - CGPA rankings to compare within your branch and batch year",
			"🚀 Fast Sync - Parallel fetching of UMS data with Plasmo Chrome extension",
			"🔔 Notifications - Timetable and exam reminders via Expo Notifications",
			"🏗️ Monorepo - Turborepo workspace sharing types, APIs, and UI components",
		],
		techDetails: {
			framework: "Next.js 16 (App Router) for Web, Expo SDK 57 for Mobile, Plasmo for Extension",
			styling: "Tailwind CSS v4 with custom design tokens for mobile",
			backend: "Firebase Firestore/Auth and Cloudflare Workers with Hono and Durable Objects",
			deployment: "Vercel (Web), EAS (Mobile), Chrome Web Store (Extension)",
			performance: {
				lighthouse: 95,
				loadTime: "Fast",
				coreWebVitals: "Optimized with RSC and offline caching",
			},
		},
		installation: {
			prerequisites: [
				"Node.js 20+ and pnpm 10+",
				"Firebase Project (for Auth & Firestore)",
			],
			steps: [
				"Clone the repository: `git clone https://github.com/adarsh3699/Bhemu-Calculator.git && cd Bhemu-Calculator`",
				"Install dependencies: `pnpm install`",
				"Configure Firebase in apps/frontend/.env and apps/ums-extension/.env",
				"Start frontend dev server: `pnpm dev:web`",
				"Start the mobile app: `pnpm dev:mobile`",
				"Run local chat Worker: `cd apps/chat-worker && pnpm dev`",
			],
		},
		envVariables: [
			{
				name: "NEXT_PUBLIC_FIREBASE_API_KEY",
				description: "Firebase API key for project authentication",
				required: true,
			},
			{
				name: "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
				description: "Firebase project ID for Firestore database access",
				required: true,
			},
			{
				name: "NEXT_PUBLIC_CHAT_API_BASE",
				description: "Optional local chat Worker override",
				required: false,
			},
			{
				name: "PLASMO_PUBLIC_FIREBASE_API_KEY",
				description: "Firebase API key for Chrome Extension",
				required: true,
			},
		],
		customSections: [
			{
				title: "Academic Tools",
				icon: "📊",
				content:
					"**GPA & CGPA Calculator:** Semester-wise grade tracking with cumulative computation\n**Marks Analysis:** Detailed CA, Mid-term, End-term & attendance breakdowns\n**Attendance Tracker:** Smart calculator showing exactly how many classes you can miss or need to attend\n**Goal Planner:** Set target CGPA and see required grades for upcoming semesters",
			},
			{
				title: "UMS Integration",
				icon: "🔄",
				content:
					"**Web Extension Sync:** Import grades, marks, attendance, and term data directly from UMS\n**Mobile UMS Sync:** Native WebView-based sync with cookie/session support\n**Background Sync:** Safe resume flow after verification or login",
			},
			{
				title: "Campus Chat",
				icon: "💬",
				content:
					"**Real-time Messaging:** Web/mobile client backed by Cloudflare Worker and WebSockets\n**Modern Features:** Replies, reactions, message editing/deletion, reporting, and presence\n**Fast Startup:** Mobile caches the latest 100 messages per room",
			},
			{
				title: "Technical Architecture",
				icon: "🏗️",
				content:
					"**Monorepo:** pnpm workspaces + Turborepo for sharing packages (@bhemu/shared, @bhemu/chat, @bhemu/firebase)\n**Web Frontend:** Next.js 16 with React 19, Tailwind CSS v4, Firebase 12\n**Mobile App:** Expo SDK 57 React Native app with Expo Router\n**Chat Backend:** Cloudflare Workers, Hono, WebSockets, Durable Objects, Neon PostgreSQL, Drizzle ORM\n**Chrome Extension:** Plasmo Chrome MV3 with linkedom parser",
			},
		],
	},
};
