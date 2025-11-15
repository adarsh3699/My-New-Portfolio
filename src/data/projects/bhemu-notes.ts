import { Project } from "./index";

export const bhemuNotesData: Project = {
	// Basic info
	id: "bhemu-notes",
	name: "Bhemu Notes",
	description: "Advanced Multi-User Notes Application with Rich Text Editor and Real-time Collaboration",
	longDescription:
		"Bhemu Notes is a comprehensive note-taking application that facilitates creative writing and organization. Features include a rich text editor powered by Quill.js, encrypted data storage, folder organization, PDF export capabilities, and real-time note sharing with collaborative editing features.",

	// Links
	githubUrl: "https://github.com/adarsh3699/Bhemu-Notes-Web",
	liveUrl: "https://notes.bhemu.in",
	githubRepo: {
		owner: "adarsh3699",
		name: "Bhemu-Notes-Web",
		branch: "master",
	},

	// Tech details
	technologies: [
		"React",
		"JavaScript",
		"Material-UI",
		"Firebase",
		"Quill.js",
		"Vite",
		"CryptoJS",
		"Real-time Database",
		"Authentication",
		"PWA",
	],
	primaryLanguage: { name: "JavaScript", color: "bg-yellow-500" },
	category: "Web",

	// Status
	isPinned: true,
	featured: true,
	createdAt: "2023-01-15",

	// Visual content
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
			title: "Dashboard Overview",
			description:
				"Main dashboard showing organized notes with folder structure and quick access to recent documents with an intuitive and clean interface",
		},
		{
			url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
			title: "Rich Text Editor",
			description:
				"Advanced text editor with formatting tools, media embedding, and real-time collaboration features powered by Quill.js for enhanced writing experience",
		},
		{
			url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
			title: "Note Sharing & Collaboration",
			description:
				"Collaborative note sharing with role-based access control, real-time editing, and secure sharing options for team productivity",
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"🎨 Rich Text Editor - Powered by Quill.js for creative and formatted note-taking",
			"🔐 Encrypted Storage - User data and notes stored securely in encrypted form",
			"📁 Folder Organization - Group notes in folders to keep them organized",
			"📄 PDF Export - Export any note as PDF for offline access and sharing",
			"🤝 Note Sharing - Share notes with others as editor or viewer with link-based access",
			"🔄 Real-time Sync - Changes sync across devices instantly with Firebase",
			"👥 Multi-user Support - Complete user authentication and profile management",
			"📱 Responsive Design - Works seamlessly across desktop, tablet, and mobile devices",
			"🎯 Demo Account - Try the app with pre-configured demo credentials",
			"⚡ Fast Performance - Built with Vite for optimal loading speeds",
		],
		techDetails: {
			framework: "React with Vite build system",
			styling: "Material-UI (MUI) for consistent design language",
			animations: "Material-UI transitions and custom CSS animations",
			deployment: "Firebase Hosting with CI/CD pipeline",
		},
		installation: {
			prerequisites: [
				"Node.js (v16 or higher)",
				"npm or yarn package manager",
				"Firebase account for backend services",
				"Git for version control",
			],
			steps: [
				"Clone the repository: `git clone https://github.com/adarsh3699/Bhemu-Notes-Web.git`",
				"Navigate to project directory: `cd Bhemu-Notes-Web`",
				"Install dependencies: `npm install`",
				"Set up Firebase configuration in environment variables",
				"Start development server: `npm run dev`",
				"Open http://localhost:3000 to view the application",
			],
		},
		envVariables: [
			{
				name: "VITE_FIREBASE_API_KEY",
				description: "Firebase API key for authentication and database access",
				required: true,
			},
			{
				name: "VITE_FIREBASE_AUTH_DOMAIN",
				description: "Firebase authentication domain",
				required: true,
			},
			{
				name: "VITE_FIREBASE_PROJECT_ID",
				description: "Firebase project identifier",
				required: true,
			},
			{
				name: "VITE_FIREBASE_STORAGE_BUCKET",
				description: "Firebase storage bucket for file uploads",
				required: true,
			},
		],
		customSections: [
			{
				title: "Demo Account",
				icon: "🎯",
				content:
					"Try the application with demo credentials:\n**Email:** demo@bhemu.com\n**Password:** demo1234\n\nThe demo account comes with sample notes and folders to explore all features.",
			},
			{
				title: "Key Features Breakdown",
				icon: "⭐",
				content:
					"**Rich Text Editor:** Quill.js integration for advanced formatting\n**Security:** CryptoJS encryption for sensitive data\n**Collaboration:** Real-time sharing with permission controls\n**Organization:** Hierarchical folder structure\n**Export:** PDF generation for offline access",
			},
			{
				title: "Technology Stack",
				icon: "🛠️",
				content:
					"**Frontend:** React, Material-UI, Quill.js\n**Backend:** Firebase (Auth, Firestore, Hosting)\n**Security:** CryptoJS for data encryption\n**Build Tool:** Vite for fast development and optimized builds\n**Deployment:** Firebase Hosting with automatic SSL",
			},
		],
	},
};
