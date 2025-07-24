import { Project } from "./index";

export const youngMindsClubData: Project = {
	// Basic info
	id: "youngminds-club",
	name: "YoungMinds Club",
	description: "A dynamic community platform for young minds to connect, learn, and grow together",
	longDescription:
		"YoungMinds Club is a vibrant online community platform designed to bring together young professionals, students, and learners from diverse backgrounds. The platform serves as a hub for knowledge sharing, networking, skill development, and collaborative learning, providing various tools and resources to foster personal and professional growth.",

	// Links
	githubUrl: "https://github.com/adarsh3699/YoungMinds-Club",
	liveUrl: "https://www.youngminds.club",
	// Note: GitHub repo is private, so we use the fallback readmeContent below

	// Tech details
	technologies: [
		"React",
		"JavaScript",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Material-UI",
		"Socket.io",
		"JWT Authentication",
		"REST API",
		"Responsive Design",
		"Real-time Chat",
		"Community Features",
	],
	primaryLanguage: { name: "JavaScript", color: "bg-yellow-500" },
	category: "Web",

	// Status
	isPinned: true,
	featured: true,
	createdAt: "2025-05-01",

	// Visual content
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
			title: "Community Dashboard",
			description:
				"Main community dashboard featuring member activity, discussions, events, and quick access to all platform features",
		},
		{
			url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
			title: "Learning Resources",
			description:
				"Comprehensive learning resources section with courses, tutorials, and skill development materials for young professionals",
		},
		{
			url: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=600&fit=crop",
			title: "Community Networking",
			description:
				"Interactive networking features allowing members to connect, collaborate, and build meaningful professional relationships",
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"👥 Community Management - User registration, profiles, and member directory",
			"💬 Real-time Chat - Instant messaging and group discussions for community members",
			"📚 Learning Resources - Curated educational content and skill development materials",
			"🎯 Event Management - Community events, workshops, and meetup organization",
			"🤝 networking Tools - Connect with like-minded individuals based on interests and skills",
			"📊 Progress Tracking - Personal development tracking and achievement systems",
			"🔔 Notification System - Stay updated with community activities and announcements",
			"📱 Responsive Design - Seamless experience across all devices and screen sizes",
			"🔐 Secure Authentication - JWT-based secure user authentication and authorization",
			"🌟 Gamification - Engagement features with points, badges, and community rankings",
			"🎨 Customizable Profiles - Personalized member profiles with skills and interests",
			"📈 Analytics Dashboard - Community insights and engagement analytics for admins",
		],
		techDetails: {
			framework: "React with Material-UI for modern, responsive design",
			styling: "Material-UI components with custom CSS for branding",
			deployment: "Full-stack deployment with MongoDB Atlas and cloud hosting",
		},
		installation: {
			prerequisites: [
				"Node.js (v16 or higher)",
				"MongoDB (local or Atlas)",
				"npm or yarn package manager",
				"Git for version control",
			],
			steps: [
				"Clone the repository: `git clone https://github.com/adarsh3699/YoungMinds-Club.git`",
				"Navigate to project directory: `cd YoungMinds-Club`",
				"Install backend dependencies: `cd backend && npm install`",
				"Install frontend dependencies: `cd ../frontend && npm install`",
				"Set up environment variables for database and authentication",
				"Start MongoDB service (if running locally)",
				"Start backend server: `cd backend && npm start` (runs on port 5000)",
				"Start frontend application: `cd frontend && npm start` (runs on port 3000)",
				"Open http://localhost:3000 to view the application",
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
				description: "Secret key for JWT token generation and verification",
				required: true,
			},
			{
				name: "EMAIL_SERVICE_KEY",
				description: "Email service API key for notifications and verification",
				required: false,
			},
			{
				name: "SOCKET_PORT",
				description: "Port for Socket.io real-time communication",
				required: false,
			},
		],
		customSections: [
			{
				title: "Community Features",
				icon: "👥",
				content:
					"**Member Profiles:** Comprehensive user profiles with skills, interests, and achievements\n**Discussion Forums:** Topic-based discussion areas for various subjects and interests\n**Study Groups:** Create and join study groups for collaborative learning\n**Mentorship Program:** Connect experienced members with those seeking guidance",
			},
			{
				title: "Learning & Development",
				icon: "📚",
				content:
					"**Resource Library:** Curated collection of articles, tutorials, and educational materials\n**Skill Assessments:** Interactive quizzes and assessments to track learning progress\n**Certification Tracking:** Keep track of completed courses and certifications\n**Workshop Calendar:** Schedule and attend virtual workshops and seminars",
			},
			{
				title: "Networking & Events",
				icon: "🤝",
				content:
					"**Event Calendar:** Browse and RSVP to community events and meetups\n**Professional Networking:** Connect with members in your field or area of interest\n**Project Collaboration:** Find team members for projects and initiatives\n**Career Opportunities:** Job postings and internship opportunities shared by members",
			},
			{
				title: "Platform Architecture",
				icon: "🏗️",
				content:
					"**Frontend:** React SPA with Material-UI for consistent design\n**Backend:** Express.js REST API with MongoDB for data persistence\n**Real-time Features:** Socket.io for live chat and notifications\n**Authentication:** JWT-based secure authentication with role management\n**Deployment:** Scalable cloud deployment with automated CI/CD pipeline",
			},
		],
	},
};
