// Work experience entry
export interface Experience {
	id: number;
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string;
	isCurrent: boolean;
	description: string[];
	technologies: string[];
	companyUrl?: string;
	companyLogo?: string;
}
