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
import { facilityEvaluationSystemIITPData } from "./facility-evaluation-system-iitp";
import { youngMindsClubData } from "./youngminds-club";

// All projects - single source of truth
export const projects: Project[] = [
	youngMindsClubData,
	nirakshGuardianData,
	bhemuNotesData,
	bhemuCalculatorData,
	priceComparisonWebData,
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

// Language colors for tech badges
export const languageColors: Record<string, string> = {
	JavaScript: "bg-yellow-500",
	TypeScript: "bg-blue-500",
	Python: "bg-blue-600",
	Java: "bg-orange-500",
	"C++": "bg-blue-700",
	React: "bg-cyan-500",
	Vue: "bg-green-500",
	Angular: "bg-red-500",
	Node: "bg-green-600",
	Go: "bg-cyan-600",
	Rust: "bg-orange-700",
	PHP: "bg-purple-500",
	Ruby: "bg-red-600",
	Swift: "bg-orange-400",
	Kotlin: "bg-purple-600",
};

export default projects;
