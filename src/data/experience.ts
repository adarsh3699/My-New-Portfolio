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

export const experiences: Experience[] = [
	{
		id: 1,
		company: "Tech Solutions Inc.",
		position: "Senior Full Stack Developer",
		location: "San Francisco, CA",
		startDate: "Jan 2023",
		endDate: "Present",
		isCurrent: true,
		description: [
			"Lead development of scalable web applications using React, Next.js, and Node.js",
			"Architected and implemented microservices infrastructure using Docker and Kubernetes",
			"Mentored junior developers and conducted code reviews to maintain code quality",
			"Collaborated with product teams to deliver features that improved user engagement by 40%",
		],
		technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes"],
		companyUrl: "https://techsolutions.com",
	},
	{
		id: 2,
		company: "StartupXYZ",
		position: "Full Stack Developer",
		location: "Remote",
		startDate: "Jun 2021",
		endDate: "Dec 2022",
		isCurrent: false,
		description: [
			"Built and maintained customer-facing web applications using React and Python",
			"Implemented real-time features using WebSocket connections and Redis",
			"Optimized database queries resulting in 50% performance improvement",
			"Developed RESTful APIs and integrated third-party services",
		],
		technologies: ["React", "Python", "Django", "PostgreSQL", "Redis", "AWS"],
		companyUrl: "https://startupxyz.com",
	},
	{
		id: 3,
		company: "Digital Agency Pro",
		position: "Frontend Developer",
		location: "New York, NY",
		startDate: "Aug 2020",
		endDate: "May 2021",
		isCurrent: false,
		description: [
			"Developed responsive websites and web applications for various clients",
			"Collaborated with designers to implement pixel-perfect UI/UX designs",
			"Optimized websites for performance and SEO, achieving 95+ PageSpeed scores",
			"Maintained and updated existing client websites",
		],
		technologies: ["React", "JavaScript", "HTML", "CSS", "SASS", "WordPress"],
		companyUrl: "https://digitalagencypro.com",
	},
]; 