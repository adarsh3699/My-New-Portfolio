import { Project } from "./index";

export const bhemuCalendarData: Project = {
	id: "bhemu-calendar",
	name: "Bhemu Calendar",
	description:
		"A full-stack calendar web application similar to Google Calendar with comprehensive goals and tasks management system.",
	longDescription:
		"Bhemu Calendar is a feature-rich calendar application that combines event scheduling with goal and task management. Built with modern web technologies, it offers an intuitive drag-and-drop interface for seamless event management and task-to-event conversion.",
	githubUrl: "https://github.com/adarsh3699/Bhemu-Calendar",
	liveUrl: "https://bhemu-calendar.vercel.app",
	githubRepo: {
		owner: "adarsh3699",
		name: "Bhemu-Calendar",
		branch: "main",
	},
	technologies: [
		"React",
		"Redux Toolkit",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Mongoose",
		"Vite",
		"Axios",
		"date-fns",
	],
	primaryLanguage: {
		name: "JavaScript",
		color: "bg-yellow-500",
	},
	category: "Web",
	isPinned: false,
	featured: false,
	createdAt: "2025-04-07",
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2139&q=80",
			title: "Calendar Week View",
			description:
				"Main calendar interface showing week view with drag-and-drop functionality for seamless event management",
		},
		{
			url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
			title: "Goals and Tasks Management",
			description:
				"Sidebar interface for managing goals and tasks with category organization and priority levels",
		},
		{
			url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
			title: "Task-to-Event Conversion",
			description:
				"Drag tasks from sidebar directly to calendar slots to create events with color-coded categories",
		},
	],
	readmeContent: {
		features: [
			"Week View Layout with 24-hour time slots",
			"Event CRUD Operations (Create, Read, Update, Delete)",
			"Drag-and-Drop Event Rescheduling",
			"6 Color-coded Event Categories",
			"Goal Management System",
			"Task Organization with Priority Levels",
			"Task-to-Event Conversion",
			"Progress Tracking",
			"Real-time Updates with Redux",
			"Responsive Modern UI Design",
		],
		techDetails: {
			framework: "React 18.2.0 with Redux Toolkit",
			styling: "CSS with drag-and-drop libraries",
			deployment: "Vercel",
			backend: "Node.js, Express.js, MongoDB",
		},
		installation: {
			prerequisites: ["Node.js (v16 or later)", "MongoDB (local or Atlas)", "npm or yarn"],
			steps: [
				"Clone the repository",
				"Install backend dependencies: cd server && npm install",
				"Install frontend dependencies: cd client && npm install",
				"Configure environment variables in server/.env",
				"Start backend server: cd server && npm run dev",
				"Start frontend application: cd client && npm run dev",
				"Open browser and navigate to http://localhost:5173",
			],
		},
		envVariables: [
			{
				name: "MONGO_URI",
				description: "MongoDB connection string",
				required: true,
			},
			{
				name: "PORT",
				description: "Server port (default: 4000)",
				required: false,
			},
			{
				name: "NODE_ENV",
				description: "Environment mode",
				required: false,
			},
		],
		customSections: [
			{
				title: "API Endpoints",
				icon: "🔌",
				content:
					"Events: GET/POST/PUT/DELETE /events, Goals: GET/POST/PUT/DELETE /goals, Tasks: GET/POST/PUT/DELETE /tasks",
			},
			{
				title: "Category Colors",
				icon: "🎨",
				content:
					"Exercise (Pink), Eating (Cyan), Work (Light Yellow), Relax (Yellow), Family (Light Purple), Social (Light Green)",
			},
			{
				title: "Project Structure",
				icon: "📁",
				content:
					"Frontend (client/) with React components, Redux store, and services. Backend (server/) with controllers, models, and API routes.",
			},
		],
	},
};
