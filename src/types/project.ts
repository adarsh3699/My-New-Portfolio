// GitHub repository reference used for README fetching
export interface GitHubRepo {
	owner: string;
	name: string;
	branch?: string;
}

// Sub-types for readmeContent
export interface ReadmeTechDetails {
	framework: string;
	language?: string;
	styling: string;
	stateManagement?: string;
	animations?: string;
	deployment: string;
	backend?: string;
	performance?: {
		lighthouse: number;
		loadTime: string;
		coreWebVitals: string;
	};
}

export interface ReadmeInstallation {
	prerequisites: string[];
	steps: string[];
}

export interface ReadmeEnvVariable {
	name: string;
	description: string;
	required: boolean;
}

export interface ReadmeCustomSection {
	title: string;
	icon: string;
	content: string;
}

export interface ReadmeContent {
	features?: string[];
	techDetails?: ReadmeTechDetails;
	installation?: ReadmeInstallation;
	envVariables?: ReadmeEnvVariable[];
	customSections?: ReadmeCustomSection[];
}


export interface ProjectScreenshot {
	url: string;
	title: string;
	description: string;
}

// Core project interface — single source of truth
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
	githubRepo?: GitHubRepo; // to fetch readme from github

	// Tech details
	technologies: string[];
	primaryLanguage: { name: string; color: string };
	category: "Web" | "Mobile" | "App" | "Tool" | "Game" | "AI/ML" | "API" | "Blockchain" | "Other" | "Web + AI";

	// Status
	isPinned: boolean;
	featured?: boolean;
	createdAt: string;

	// Visual content
	screenshots?: ProjectScreenshot[];

	// README content (fallback when GitHub README unavailable)
	readmeContent?: ReadmeContent;
}
