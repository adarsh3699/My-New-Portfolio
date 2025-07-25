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
		company: "Auric Touch LLP",
		position: "ReactJS Developer",
		location: "Remote",
		startDate: "July 2022",
		endDate: "October 2022",
		isCurrent: false,
		description: [
			"Worked on Fantasy Points Optimizer platform using React.js and modern frontend technologies.",
			"Implemented comprehensive authorization-based features and role-based access control using JWT.",
			"Built responsive and cross-browser compatible UI components using React.js, Tailwind CSS, and Material UI.",
			"Setup and integrated various frontend features enhancing user experience and platform functionality.",
			"Collaborated effectively with the development team to deliver high-quality features on schedule."
		],
		technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Material UI", "JWT"],
		companyUrl: "https://drive.google.com/file/d/1OwEC4pNXD2OGM-F5TtCw8crnZa-StBtg/view?usp=drive_link",
		companyLogo: "/images/aurictouch-logo.png"
	},
	{
		id: 2,
		company: "Indian Institute of Technology Patna",
		position: "Full Stack Developer",
		location: "Remote",
		startDate: "June 2022",
		endDate: "July 2022",
		isCurrent: false,
		description: [
			"Developed Facility evaluation System for college IITP.",
			"Internships duration from 1 june 2022 to 15 july 2022.",
			"Work on both the frontend and backend.",
			"Created a multiuser login system for the facility, candidate, and admin.",
			"Learned and did software architecture design of complete project."
		],
		technologies: ["React", "Node.js", "JavaScript", "MySQL", "MongoDB", "Material-UI", "Express.js", "PDFKit", "Nodemailer"],
		companyUrl: "https://drive.google.com/file/d/1E87uohp5lcWnNxixL27b4vlunchCWTWs/view?usp=drive_link",
		companyLogo: "/images/iitp-logo.png"
	},
	{
		id: 3,
		company: "Be A Wiz Education",
		position: "Web Developer",
		location: "Remote",
		startDate: "May 2022",
		endDate: "June 2022",
		isCurrent: false,
		description: [
			"Enhanced the BeAwiz website's frontend functionality and user experience.",
			"Fixed CSS issues and improved overall website responsiveness across different devices.",
			"Implemented CAPTCHA integration on the login page to enhance security.",
			"Worked on optimizing website performance and cross-browser compatibility.",
		],
		technologies: ["HTML", "CSS", "JavaScript", "PHP"],
		companyUrl: "https://drive.google.com/file/d/1k1Ga9QeMbF4-f-9-zVIPOubJy8oud2wB/view?usp=drive_link",
		companyLogo: "/images/beawiz-logo.png"
	}
]; 