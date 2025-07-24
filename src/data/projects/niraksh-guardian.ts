import { type Project } from "./index";

export const nirakshGuardianData: Project = {
	id: "niraksh-guardian",
	name: "Niraksh Guardian",
	description:
		"AI-powered healthcare assistant featuring doctor recommendations, medicine search, prescription explanation, and drug-drug interaction checking for enhanced patient safety.",
	longDescription:
		"Niraksh Guardian is a comprehensive healthcare application that leverages artificial intelligence to provide patients with intelligent medical assistance. The platform offers AI-driven doctor recommendations based on symptoms, comprehensive medicine search capabilities, detailed prescription explanations, and crucial drug-drug interaction warnings to ensure patient safety.",

	// URLs and links
	githubUrl: "https://github.com/adarsh3699/Niraksh-Guardian",
	liveUrl: "https://niraksh-20.vercel.app",

	// GitHub repository information for README fetching
	githubRepo: {
		owner: "adarsh3699",
		name: "Niraksh-Guardian",
		branch: "main",
	},

	// Technical details
	technologies: ["React", "JavaScript", "Node.js", "Express", "Generative AI", "Medical APIs"],
	primaryLanguage: {
		name: "JavaScript",
		color: "bg-yellow-500",
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
			title: "AI Doctor Recommendations",
			description:
				"Smart doctor recommendation system that analyzes patient symptoms and suggests appropriate specialists using advanced AI algorithms for optimal healthcare guidance.",
		},
		{
			url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
			title: "Medicine Search & Information",
			description:
				"Comprehensive medicine database with detailed drug information, dosage instructions, side effects, and contraindications for informed medication decisions.",
		},
		{
			url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",
			title: "Prescription Explanation Tool",
			description:
				"User-friendly prescription explainer that breaks down complex medical prescriptions into simple, understandable terms for better patient comprehension.",
		},
		{
			url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
			title: "Drug Interaction Checker",
			description:
				"Advanced safety system that identifies potential harmful drug interactions and provides critical warnings to ensure patient safety and prevent adverse reactions.",
		},
	],

	// All README content organized in one place
	readmeContent: {
		// Core project features
		features: [
			"AI-powered doctor recommendations based on patient symptoms",
			"Comprehensive medicine search with detailed drug information",
			"Intelligent prescription explanation in simple terms",
			"Drug-drug interaction checker for patient safety",
			"User-friendly interface for easy navigation",
			"Multi-language support for accessibility",
			"Secure patient data handling",
			"Integration with medical databases",
		],

		// Technical implementation details
		techDetails: {
			framework: "React",
			styling: "CSS Modules",
			deployment: "Vercel",
			performance: {
				lighthouse: 88,
				loadTime: "< 2s",
				coreWebVitals: "Good",
			},
		},

		// Installation instructions
		installation: {
			prerequisites: [
				"Node.js (v16 or higher)",
				"npm or yarn package manager",
				"Medical API access keys",
				"Git for version control",
			],
			steps: [
				"Clone the repository: git clone https://github.com/adarsh3699/Niraksh-Guardian.git",
				"Navigate to project directory: cd Niraksh-Guardian",
				"Install dependencies: npm install",
				"Set up environment variables: cp .env.example .env",
				"Configure API keys for medical services",
				"Start development server: npm start",
			],
		},

		// Environment variables
		envVariables: [
			{
				name: "REACT_APP_MEDICAL_API_KEY",
				description: "API key for medical database access",
				required: true,
			},
			{
				name: "REACT_APP_DRUG_API_KEY",
				description: "API key for drug interaction database",
				required: true,
			},
			{
				name: "REACT_APP_AI_SERVICE_URL",
				description: "URL for AI recommendation service",
				required: true,
			},
			{
				name: "REACT_APP_BACKEND_URL",
				description: "Backend service URL for data processing",
				required: false,
			},
		],

		// All custom sections including contributing and license
		customSections: [
			{
				title: "Doctor Suggestion System",
				icon: "👨‍⚕️",
				content:
					"Uses AI to recommend the best doctors based on patient symptoms or disease. The system analyzes symptoms patterns and suggests appropriate specialists, helping patients find the right medical care quickly and efficiently.",
			},
			{
				title: "Medicine Search Engine",
				icon: "💊",
				content:
					"Enables users to search for medicines and retrieve comprehensive details including dosage, uses, side effects, and contraindications. The database includes both generic and brand name medications with detailed information.",
			},
			{
				title: "Prescription Explainer",
				icon: "📋",
				content:
					"Helps users understand complex medical prescriptions by breaking them down into simpler terms. This feature explains medication purposes, timing, dosages, and potential interactions in patient-friendly language.",
			},
			{
				title: "Drug Interaction Checker",
				icon: "⚠️",
				content:
					"Warns users about potential harmful interactions between different medicines. The system checks combinations of drugs and alerts users to dangerous interactions, ensuring safer medication management.",
			},
			{
				title: "Patient Safety Features",
				icon: "🛡️",
				content:
					"Prioritizes patient safety through comprehensive drug interaction warnings, allergy alerts, and contraindication checks. The system maintains detailed safety profiles to prevent adverse drug reactions.",
			},
			{
				title: "Contributing",
				icon: "🤝",
				content:
					"We welcome contributions from healthcare professionals and developers! Please read our contributing guidelines and ensure all medical information is verified by qualified professionals before submitting PRs.",
			},
			{
				title: "License & Disclaimer",
				icon: "📄",
				content:
					"This project is licensed under the MIT License. Important: This application is for informational purposes only and should not replace professional medical advice. Always consult with healthcare professionals for medical decisions.",
			},
		],
	},
};
