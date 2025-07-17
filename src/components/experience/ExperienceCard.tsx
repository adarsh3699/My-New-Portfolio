import { CalendarIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { type Experience } from "@/data";

interface ExperienceCardProps {
	experience: Experience;
}

export default function ExperienceCard({ experience: exp }: ExperienceCardProps) {
	return (
		<div className="relative flex items-start space-x-6">
			{/* Timeline dot */}
			<div className="flex-shrink-0 relative">
				<div
					className={`w-4 h-4 rounded-full border-2 ${
						exp.isCurrent ? "bg-green-500 border-green-500" : "bg-gh-canvas-default border-gh-border-muted"
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
	);
}
