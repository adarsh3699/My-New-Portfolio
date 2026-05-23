import { type Project } from "./index";

export const nirakshGuardianData: Project = {
	id: "niraksh-guardian",
	name: "Niraksh Guardian",
	description:
		"AI-powered healthcare platform featuring smart symptom analysis, lab report parsing, prescription workspace, real-time streaming AI chat, doctor recommendations, and drug-drug interaction checking — built for speed, safety, and multi-language accessibility.",
	longDescription:
		"Niraksh Guardian is a full-stack AI healthcare companion that transforms fragmented patient health data into clear, actionable insights. The platform orchestrates multi-modal AI analysis across symptoms, images, prescriptions, and lab reports — returning structured results with urgency triaging, specialist recommendations, and personalised safety checks. Built on a Next.js 16 frontend with real-time SSE streaming and an Express + PostgreSQL + Redis backend powered by Google Gemini, it delivers a fast, private, and clinically-aware experience across all devices and languages.",

	// URLs and links
	githubUrl: "https://github.com/adarsh3699/Niraksh-Guardian",
	liveUrl: "https://niraksh.vercel.app/",

	// GitHub repository information for README fetching
	githubRepo: {
		owner: "adarsh3699",
		name: "Niraksh-Guardian",
		branch: "main",
	},

	// Technical details
	technologies: [
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"React",
		"Node.js",
		"Express.js",
		"PostgreSQL",
		"Prisma",
		"Redis",
		"Google Gemini API",
		"AWS SES",
		"AWS SNS",
		"Cloudinary",
		"SWR",
		"React Hook Form",
		"Zod",
		"JWT Authentication",
		"bcrypt",
	],
	primaryLanguage: {
		name: "TypeScript",
		color: "bg-blue-600",
	},

	// Classification
	category: "Web + AI",
	isPinned: true,
	featured: true,

	// Dates
	createdAt: "2024-10-15",

	// Project screenshots with descriptions
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
			title: "Symptom Relationship Intelligence",
			description:
				"AI connects multiple symptoms and health signals into a visual relationship map, revealing hidden patterns and possible medical conditions — not just a list of guesses.",
		},
		{
			url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
			title: "AI-Driven Doctor Ranking",
			description:
				"Doctors are ranked by symptom conditions, proximity, experience, and quality signals — helping users find the right specialist, not just any doctor.",
		},
		{
			url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
			title: "Personal Health Dashboard",
			description:
				"A centralised view of conditions, prescriptions, reports, and health history — enabling better understanding of personal health trends over time.",
		},
		{
			url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",
			title: "Personalized Drug Interaction",
			description:
				"Detects medicine conflicts and risks using the user's prescription data, chronic conditions, and full health history — or runs a direct head-to-head comparison between two medicines.",
		},
		{
			url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
			title: "Unified Health Report",
			description:
				"Automatically generated patient report combining prescriptions, symptoms, chat history, and AI insights into a single document for clear clinical understanding.",
		},
		{
			url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
			title: "Emergency & Care Support",
			description:
				"Allows manual or risk-triggered sharing of critical health information with emergency contacts for timely support when it matters most.",
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"Symptom Relationship Intelligence with multi-symptom reasoning, visual relationship mapping, triage level (Home / Doctor / ER), and specialist routing",
			"Lab report parsing with granular component rows, reference ranges, sparkline trends, AI insights, and secure share tokens",
			"Unified prescription + lab report workspace for seamless context switching",
			"Real-time SSE-streamed AI chat with image attachments and multi-language awareness",
			"Doctor Recommendation Engine ranked by symptoms, specialisation, location, fee, and availability",
			"Medicine search by name or image (OCR + Gemini Vision)",
			"Drug interaction checker with personalised safety checks against user's active medication history",
			"AI Health Report Generator producing downloadable PDF summaries",
			"Personal Health Dashboard with Health Risk Score (0–100), trends, and one-click Emergency Mode",
			"Disease & Medicine Explorers with 30-day DB-level cache keyed by topic + language",
			"Emergency Response System using Redis Pub/Sub, AWS SES alerts, and emergency contact routing",
			"Multi-language support with user language preference stored in profile",
			"Offline-resilient architecture with optimistic UI, IndexedDB partial recovery, and mutation queuing",
			"AI fallback chain: Gemini (primary) → FastAPI local inference (secondary) → graceful degradation",
		],

		techDetails: {
			framework: "Next.js 16 (App Router) + Express.js",
			language: "TypeScript 5.x",
			styling: "Tailwind CSS v4",
			stateManagement: "React Context + SWR",
			animations: "CSS transitions + incremental SSE chunk rendering",
			deployment: "Vercel (frontend) · Docker → ECS / Cloud Run (backend)",
			backend:
				"Express.js · PostgreSQL (Prisma ORM) · Redis · Google Gemini API · FastAPI (local inference fallback) · AWS SES/SNS · Cloudinary",
			performance: {
				lighthouse: 90,
				loadTime: "< 2s",
				coreWebVitals: "Good",
			},
		},

		installation: {
			prerequisites: [
				"Node.js v20+",
				"PostgreSQL",
				"Redis",
				"pnpm",
				"Google Gemini API Key",
				"Google OAuth Client ID & Secret",
				"AWS Account with SES configured",
				"Cloudinary Account",
			],
			steps: [
				"cd frontend && pnpm install",
				"Create frontend/.env.local with NEXT_PUBLIC_API_URL and NEXT_PUBLIC_GOOGLE_CLIENT_ID",
				"cd frontend && pnpm dev  →  http://localhost:3000",
				"cd backend && pnpm install",
				"Create backend/.env from .env.example (DB, Redis, JWT, Gemini, AWS, Cloudinary keys)",
				"pnpm prisma generate && pnpm prisma:migrate && pnpm seed",
				"cd backend && pnpm dev  →  http://localhost:4000",
			],
		},

		envVariables: [
			{
				name: "NEXT_PUBLIC_API_URL",
				description: "Base URL of the backend API (e.g. http://localhost:4000/api)",
				required: true,
			},
			{
				name: "NEXT_PUBLIC_GOOGLE_CLIENT_ID",
				description: "Google OAuth client ID for the frontend sign-in flow",
				required: true,
			},
			{
				name: "DATABASE_URL",
				description: "PostgreSQL connection string used by Prisma ORM",
				required: true,
			},
			{
				name: "REDIS_URL",
				description: "Redis connection string for rate limiting, token blacklist, and Pub/Sub",
				required: true,
			},
			{
				name: "JWT_SECRET",
				description: "Secret key used to sign and verify access and refresh JWTs",
				required: true,
			},
			{
				name: "GEMINI_API_KEY",
				description: "Google Gemini API key for AI analysis, chat, and Vision endpoints",
				required: true,
			},
			{
				name: "GOOGLE_CLIENT_ID",
				description: "Google OAuth client ID for backend ID token verification",
				required: true,
			},
			{
				name: "GOOGLE_CLIENT_SECRET",
				description: "Google OAuth client secret",
				required: true,
			},
			{
				name: "AWS_ACCESS_KEY_ID",
				description: "AWS credentials for SES email sending and SNS event handling",
				required: true,
			},
			{
				name: "AWS_SECRET_ACCESS_KEY",
				description: "AWS secret key for SES and SNS access",
				required: true,
			},
			{
				name: "AWS_SES_FROM_EMAIL",
				description: "Verified SES sender address used for password resets and emergency alerts",
				required: true,
			},
			{
				name: "CLOUDINARY_CLOUD_NAME",
				description: "Cloudinary cloud name for medicine, prescription, and lab report uploads",
				required: true,
			},
			{
				name: "CLOUDINARY_API_KEY",
				description: "Cloudinary API key",
				required: true,
			},
			{
				name: "CLOUDINARY_API_SECRET",
				description: "Cloudinary API secret",
				required: true,
			},
			{
				name: "PORT",
				description: "Backend server port (default: 4000)",
				required: false,
			},
		],

		customSections: [
			{
				title: "Symptom Relationship Intelligence",
				icon: "🧠",
				content:
					"Accepts text symptoms, duration, severity, and optional skin or visible-symptom images. Gemini reasons across all inputs in JSON mode to return a ranked list of predicted conditions with probabilities, urgency level (🟢 Mild / 🟡 Moderate / 🔴 Emergency), a triage recommendation (Home Care / See a Doctor / Go to ER), and the best-fit specialist. History is persisted to the symptom_analysis_history table and surfaced as trends on the health dashboard.",
			},
			{
				title: "Lab Report Analysis",
				icon: "🧪",
				content:
					"Upload a PDF or image lab report and receive a structured breakdown at the individual component level (e.g. Glucose, Hemoglobin). Each row shows the observed value, reference range, status (Normal / High / Low), AI insights, urgency tag, actionable next steps, related conditions, and a sparkline trend from previous reports. An abnormal count and overall risk level are surfaced at the top. Users can annotate reports with pinned notes and generate secure share tokens with configurable expiry.",
			},
			{
				title: "Prescription + Medicine Workspace",
				icon: "📄",
				content:
					"A unified workspace lets users switch between prescription analysis and medicine image lookup without losing context. Prescriptions are OCR-extracted via Gemini Vision, simplified into plain-language instructions, and cross-checked against the user's drug interaction history. Medicine searches support both text and image input, returning dosage, side effects, and contraindication summaries — all stored in prescription_history and medicine_history.",
			},
			{
				title: "Streaming AI Chat",
				icon: "💬",
				content:
					"Niraksh AI streams responses via Server-Sent Events (SSE) with typed event frames: ack → chunk → meta → done / error. The frontend renders incremental chunks live, shows a typing indicator, and persists partials to IndexedDB for recovery on disconnect. Conversations support image attachments for visual health queries and load locale-specific prompts based on the user's stored language preference. Full chat history is searchable and downloadable.",
			},
			{
				title: "Doctor Recommendation Engine",
				icon: "👨‍⚕️",
				content:
					"After symptom analysis, Gemini returns a ranked list of specialisations with clinical reasoning. The backend queries the Doctors table filtered by specialisation, location, consultation fee, and availability, then returns a ranked shortlist. Doctor profiles include years of experience, bio, contact info, and profile images served via Cloudinary CDN.",
			},
			{
				title: "Disease & Medicine Explorers",
				icon: "🔬",
				content:
					"Users can look up any disease to get AI-generated content: description, symptoms, causes, prevention, treatment, and when to see a doctor. Results are cached in the disease_info_cache table per topic + language combination with a 30-day TTL, eliminating redundant Gemini calls. A ?refresh=true param forces regeneration. The medicine explorer supports name search and image-based lookup with side-effect and contraindication summaries.",
			},
			{
				title: "Personal Health Dashboard",
				icon: "📊",
				content:
					"A centralised timeline of all health activity: symptom checks, medicine lookups, lab reports, prescriptions, and AI chat sessions. A running Health Risk Score (0–100) is computed from cumulative data and shown prominently. The dashboard surfaces 'Most Frequent Issue' and 'Last Checked Symptoms' trends. Emergency Mode is one click away — triggering Redis Pub/Sub alerts to stored emergency contacts via AWS SES and SNS alongside first-aid context.",
			},
			{
				title: "AI Fallback & Resilience",
				icon: "🛡️",
				content:
					"Primary AI calls route to Google Gemini. On error or rate-limit the system falls back to a locally-hosted FastAPI microservice running a lightweight inference model. If both fail, a graceful degraded response is returned with any available cached data flagged as partial. Fallback rate is monitored and alerts fire if it exceeds 10% of total AI calls. The frontend applies exponential backoff on SSE reconnection and resumes streams using a requestId.",
			},
			{
				title: "Security & Privacy",
				icon: "🔒",
				content:
					"All tokens are stored hashed in PostgreSQL. JWTs use short-lived access tokens with silent rotation via hashed refresh tokens. Redis blacklists revoked tokens until expiry. Passwords are bcrypt-hashed. Helmet and CORS headers are enforced on all routes. Zod validates every request body. PII is never logged; media is stored on Cloudinary with secure API uploads and CDN delivery over HTTPS.",
			},
			{
				title: "Contributing",
				icon: "🤝",
				content:
					"Contributions are welcome from both healthcare professionals and engineers. Medical content changes require review by a qualified professional before merge. Run pnpm lint and pnpm test before submitting a PR, and follow the ADR docs in docs/adr/ for architectural decisions.",
			},
			{
				title: "License & Disclaimer",
				icon: "📄",
				content:
					"Licensed under the MIT License. This application is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for diagnosis and treatment decisions.",
			},
		],
	},
};
