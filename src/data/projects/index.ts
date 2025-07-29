import { fetchGitHubReadme, type GitHubRepo } from "@/lib/github-readme";

// Core project interface
export interface Project {
	// Basic info
	id: string;
	name: string;
	description: string;
	longDescription?: string;

	// Links
	githubUrl?: string;
	liveUrl?: string;
	demoVideoUrl?: string;
	githubRepo?: GitHubRepo; // For README fetching

	// Tech details
	technologies: string[];
	primaryLanguage: { name: string; color: string };
	category: "Web" | "Mobile" | "Library" | "Tool" | "Game" | "AI/ML" | "API" | "Blockchain" | "Other" | "Web + AI";

	// Status
	isPinned: boolean;
	featured?: boolean;
	createdAt: string;

	// Visual content
	screenshots?: Array<{
		url: string;
		title: string;
		description: string;
	}>;

	// README content (fallback when GitHub README unavailable)
	readmeContent?: {
		features?: string[];
		techDetails?: {
			framework: string;
			styling: string;
			animations?: string;
			deployment: string;
			backend?: string;
			performance?: {
				lighthouse: number;
				loadTime: string;
				coreWebVitals: string;
			};
		};
		installation?: {
			prerequisites: string[];
			steps: string[];
		};
		envVariables?: Array<{
			name: string;
			description: string;
			required: boolean;
		}>;
		customSections?: Array<{
			title: string;
			icon: string;
			content: string;
		}>;
	};
}

// Import project data
import { myNewPortfolioData } from "./my-new-portfolio";
import { nirakshGuardianData } from "./niraksh-guardian";
import { bhemuNotesData } from "./bhemu-notes";
import { bhemuCalculatorData } from "./bhemu-calculator";
import { priceComparisonWebData } from "./price-comparison-web";
import { bhemuCalendarData } from "./bhemu-calendar";
import { facilityEvaluationSystemIITPData } from "./facility-evaluation-system-iitp";
import { youngMindsClubData } from "./youngminds-club";

// All projects - single source of truth
export const projects: Project[] = [
	youngMindsClubData,
	nirakshGuardianData,
	priceComparisonWebData,
	bhemuCalculatorData,
	bhemuCalendarData,
	bhemuNotesData,
	facilityEvaluationSystemIITPData,
	myNewPortfolioData,
];

// Core utility functions
export const getProjectById = (id: string): Project | undefined => {
	return projects.find((project) => project.id === id);
};

export const getPinnedProjects = (limit?: number): Project[] => {
	const pinnedProjects = projects.filter((project) => project.isPinned);
	return limit ? pinnedProjects.slice(0, limit) : pinnedProjects;
};

export const getProjectsCount = (): number => {
	return projects.length;
};

// Main function for project detail page
export async function getProjectWithReadme(id: string): Promise<{
	project: Project;
	readme: string | null;
} | null> {
	const project = getProjectById(id);

	if (!project) {
		return null;
	}

	let readme: string | null = null;

	// Try to fetch GitHub README
	if (project.githubRepo) {
		try {
			readme = await fetchGitHubReadme(project.githubRepo);
		} catch (error) {
			console.error(`Error fetching README for ${id}:`, error);
		}
	}

	return { project, readme };
}

// Language colors for tech badges - arranged alphabetically with authentic logo colors
export const languageColors: Record<string, string> = {
	Axios: "bg-purple-600", // Axios purple
	"C++": "bg-blue-700", // ISO C++ blue
	"Express.js": "bg-gray-300", // Express.js gray
	Firebase: "bg-orange-400", // Firebase orange
	"Firebase Authentication": "bg-orange-400", // Firebase Authentication orange
	Firestore: "bg-orange-400", // Firebase/Firestore orange
	"Framer Motion": "bg-yellow-300", // Framer Motion yellow
	Java: "bg-orange-500", // Java orange
	JavaScript: "bg-yellow-400", // JavaScript yellow
	"Material-UI": "bg-blue-500", // MUI blue
	MongoDB: "bg-green-500", // MongoDB green
	MySQL: "bg-blue-600", // MySQL blue
	"Next.js": "bg-gray-200", // Next.js black
	"Node.js": "bg-green-600", // Node.js green
	PHP: "bg-indigo-600", // PHP indigo/purple
	Python: "bg-yellow-500", // Python yellow (could also use blue-600 for the blue variant)
	React: "bg-cyan-400", // React cyan
	"React 19": "bg-cyan-400", // React cyan
	"Redux Toolkit": "bg-purple-600", // Redux purple
	"Tailwind CSS": "bg-teal-500", // Tailwind teal
	TypeScript: "bg-blue-600", // TypeScript blue
};

export default projects;
