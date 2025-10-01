import { CalendarIcon, MapPinIcon, ArrowTopRightOnSquareIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { type Experience } from "@/data";
import Image from "next/image";

interface ExperienceCardProps {
	experience: Experience;
	onViewDetails?: (exp: Experience) => void;
}

export default function ExperienceCard({ experience: exp, onViewDetails }: ExperienceCardProps) {
	return (
		<div className="group gh-bg-canvas-overlay border gh-border rounded-lg p-4 sm:p-5 md:p-6 hover:gh-bg-canvas-subtle transition-all duration-300 ease-in-out mb-6 sm:mb-8 hover:shadow-lg transform hover:-translate-y-1">
			{/* Header Section */}
			<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between">
				<div className="flex-1">
					{/* Logo and Title Section */}
					<div className="flex items-start gap-3 sm:gap-4">
						{/* Company Logo */}
						<div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border gh-border flex items-center justify-center bg-white flex-shrink-0">
							{exp.companyLogo ? (
								<Image
									src={exp.companyLogo}
									alt={`${exp.company} logo`}
									width={48}
									height={48}
									className="object-contain w-10 h-10 sm:w-12 sm:h-12"
								/>
							) : (
								<BuildingOffice2Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
							)}
						</div>

						{/* Title and Company Info */}
						<div className="flex-1 min-w-0">
							<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1 sm:mb-2">
								<h2 className="text-lg sm:text-xl font-semibold gh-text truncate">{exp.position}</h2>
								{exp.isCurrent && (
									<span className="inline-flex items-center text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full font-medium w-fit">
										Current
									</span>
								)}
							</div>
							<div className="flex items-center gap-2">
								<a
									href={exp.companyUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-base sm:text-lg font-medium gh-text-accent hover:underline flex items-center gap-1 truncate"
								>
									{exp.company}
									<ArrowTopRightOnSquareIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
								</a>
							</div>
						</div>
					</div>

					{/* Date and Location */}
					<div className="flex flex-wrap items-center gap-2 mt-3 text-sm gh-text-muted">
						<div className="flex items-center gap-1">
							<CalendarIcon className="w-4 h-4 flex-shrink-0" />
							<span>
								{exp.startDate} - {exp.endDate}
							</span>
						</div>
						<span className="hidden sm:block">•</span>
						<div className="flex items-center gap-1">
							<MapPinIcon className="w-4 h-4 flex-shrink-0" />
							<span>{exp.location}</span>
						</div>
					</div>
				</div>
			</div>

			{/* Description */}
			<div className="mt-4 sm:mt-6">
				<ul className="space-y-2 sm:space-y-3">
					{exp.description.map((item, i) => (
						<li key={i} className="gh-text text-sm flex items-start group/item">
							<span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gh-text-accent rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
							<span className="flex-1">{item}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Technologies */}
			<div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
				<h3 className="text-base font-medium gh-text">Technologies Used:</h3>
				<div className="flex flex-wrap gap-1.5 sm:gap-2">
					{exp.technologies.map((tech) => (
						<span
							key={tech}
							className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle hover:gh-bg-accent hover:text-white transition-colors cursor-default"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* View Details Button */}
			{onViewDetails && (
				<button
					onClick={() => onViewDetails(exp)}
					className="mt-4 sm:mt-6 w-full text-sm gh-text-accent hover:gh-text-accent-emphasis border gh-border rounded-lg py-1.5 sm:py-2 transition-colors"
				>
					View Details
				</button>
			)}
		</div>
	);
}
