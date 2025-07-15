import Link from "next/link";
import { BriefcaseIcon, CalendarIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Experience {
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
}

const experiences: Experience[] = [
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

export default function ExperiencePage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-6xl mx-auto px-4 py-12">
				<div className="mb-8">
					<h1 className="text-3xl font-bold gh-text mb-4">Work Experience</h1>
					<p className="gh-text-muted text-lg">
						My professional journey and the companies I&apos;ve had the pleasure to work with.
					</p>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gh-border-muted"></div>

					{/* Experience items */}
					<div className="space-y-8">
						{experiences.map((exp) => (
							<div key={exp.id} className="relative flex items-start space-x-6">
								{/* Timeline dot */}
								<div className="flex-shrink-0 relative">
									<div
										className={`w-4 h-4 rounded-full border-2 ${
											exp.isCurrent
												? "bg-green-500 border-green-500"
												: "bg-gh-canvas-default border-gh-border-muted"
										}`}
									></div>
									{exp.isCurrent && (
										<div className="absolute -inset-1 w-6 h-6 rounded-full bg-green-500/20 animate-pulse"></div>
									)}
								</div>

								{/* Experience card */}
								<div className="flex-1 gh-bg-canvas-overlay border gh-border rounded-lg p-6 hover:gh-bg-canvas-subtle transition-colors">
									<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
										<div className="flex-1">
											<div className="flex items-center gap-3 mb-2">
												<h3 className="text-xl font-semibold gh-text">{exp.position}</h3>
												{exp.isCurrent && (
													<span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
														Current
													</span>
												)}
											</div>
											<div className="flex items-center gap-2 mb-2">
												<a
													href={exp.companyUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="text-lg font-medium gh-text-accent hover:underline flex items-center gap-1"
												>
													{exp.company}
													<ArrowTopRightOnSquareIcon className="w-4 h-4" />
												</a>
											</div>
											<div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm gh-text-muted">
												<div className="flex items-center gap-1">
													<CalendarIcon className="w-4 h-4" />
													<span>
														{exp.startDate} - {exp.endDate}
													</span>
												</div>
												<span className="hidden sm:block">•</span>
												<div className="flex items-center gap-1">
													<MapPinIcon className="w-4 h-4" />
													<span>{exp.location}</span>
												</div>
											</div>
										</div>
									</div>

									{/* Description */}
									<div className="mb-4">
										<ul className="space-y-2">
											{exp.description.map((item, i) => (
												<li key={i} className="gh-text-muted text-sm flex items-start">
													<span className="w-1.5 h-1.5 bg-gh-text-muted rounded-full mt-2 mr-3 flex-shrink-0"></span>
													{item}
												</li>
											))}
										</ul>
									</div>

									{/* Technologies */}
									<div>
										<h4 className="text-sm font-medium gh-text mb-2">Technologies Used:</h4>
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="text-xs px-2 py-1 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Additional Info */}
				<div className="mt-12 text-center">
					<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6">
						<h3 className="text-lg font-semibold gh-text mb-2">Looking for Opportunities</h3>
						<p className="gh-text-muted mb-4">
							I&apos;m always interested in hearing about new opportunities and exciting projects.
						</p>
						<Link href="/contact" className="btn-primary inline-flex items-center gap-2">
							<BriefcaseIcon className="w-4 h-4" />
							Get In Touch
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
