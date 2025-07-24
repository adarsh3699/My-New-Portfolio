import { type Project } from "./index";

export const facilityEvaluationSystemIITPData: Project = {
	// Required fields
	id: "facility-evaluation-system-iitp",
	name: "Facility Evaluation System - IIT Patna",
	description:
		"A comprehensive web-based faculty recruitment evaluation system designed for IIT Patna to streamline the faculty hiring process with multi-role access and automated report generation.",

	// Optional extended description
	longDescription:
		"Developed during my internship at IIT Patna, this system facilitates the faculty recruitment process by providing a platform where candidates can register and submit applications, faculty members can evaluate candidates based on standardized criteria, and administrators can generate comprehensive reports. The system features a complete multi-role architecture with secure authentication, email verification, and automated PDF report generation.",

	// URLs and links
	githubUrl: "https://github.com/adarsh3699/Facility-Evaluation-System-IITP",
	// Note: No live demo URL as this is an internal system for IIT Patna

	// GitHub repository info for README fetching
	githubRepo: {
		owner: "adarsh3699",
		name: "Facility-Evaluation-System-IITP",
		branch: "master",
	},

	// Technical details
	technologies: [
		"React",
		"Node.js",
		"JavaScript",
		"MySQL",
		"MongoDB",
		"Material-UI",
		"Express.js",
		"PDFKit",
		"Nodemailer",
	],
	primaryLanguage: {
		name: "JavaScript",
		color: "bg-yellow-500",
	},

	// Classification
	category: "Web",
	isPinned: true,
	featured: true,

	// Dates
	createdAt: "2022-06-01",

	// Project screenshots with descriptions
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
			title: "Multi-Role Dashboard",
			description:
				"The system features separate dashboards for candidates, faculty evaluators, and administrators. Each role has tailored interfaces with appropriate access controls and functionality specific to their needs in the recruitment process.",
		},
		{
			url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
			title: "Evaluation System",
			description:
				"Faculty members can evaluate candidates on 12 standardized criteria including Knowledge & Concepts, Research Aptitude, Patents & Technology Transfer, and Communication Skills. The scoring system uses a 1-10 scale with suitable/unsuitable recommendations.",
		},
		{
			url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
			title: "Automated Report Generation",
			description:
				"Administrators can generate comprehensive PDF reports with evaluation statistics, department-wise candidate management, and detailed faculty feedback. The system automates the entire reporting process for efficient decision-making.",
		},
	],

	// README content for fallback
	readmeContent: {
		features: [
			"Multi-role authentication system (Candidates, Faculty, Administrators)",
			"Secure user registration with email verification",
			"Comprehensive candidate profile management",
			"12-point standardized evaluation criteria for faculty assessments",
			"Automated PDF report generation with detailed statistics",
			"Department-wise candidate organization and management",
			"Email notification system with Gmail OAuth2 integration",
			"Password recovery and account management",
			"Real-time application status tracking",
			"Mobile-responsive Material-UI interface",
		],
		techDetails: {
			framework: "React 18 with Material-UI",
			styling: "Material-UI Components with Custom Styling",
			animations: "Material-UI Transitions",
			deployment: "Node.js Backend with MySQL Database",
		},
		installation: {
			prerequisites: [
				"Node.js (v14 or higher)",
				"MySQL (v5.7 or higher)",
				"npm or yarn package manager",
				"Gmail OAuth2 credentials for email service",
			],
			steps: [
				"Clone the repository",
				"Install backend dependencies: cd back-end && npm install",
				"Configure MySQL database and update credentials in helpers.js",
				"Set up Gmail OAuth2 credentials for email service",
				"Configure encryption key for security",
				"Start backend server: npm start (runs on port 4000)",
				"Install frontend dependencies: cd front-end && npm install",
				"Start frontend application: npm start (runs on port 3000)",
			],
		},
		customSections: [
			{
				title: "Internship Context",
				icon: "🎓",
				content:
					"This project was developed during my internship at Indian Institute of Technology Patna (IIT Patna) from June 1, 2022 to July 15, 2022. The system was designed to modernize and streamline the faculty recruitment process for the institute, replacing traditional paper-based evaluations with a digital solution.",
			},
			{
				title: "Key Achievements",
				icon: "🏆",
				content:
					"Successfully created a complete end-to-end solution that handles the entire faculty recruitment workflow. Implemented secure multi-user authentication, automated email notifications, and comprehensive reporting features. The system significantly improved the efficiency of the evaluation process and provided better data management capabilities.",
			},
			{
				title: "System Architecture",
				icon: "🏗️",
				content:
					"Built with a clear separation between frontend (React with Material-UI) and backend (Node.js with Express). Used MySQL for data persistence and implemented secure authentication with encryption. The system supports concurrent evaluations by multiple faculty members with real-time data synchronization.",
			},
		],
	},
};
