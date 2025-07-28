import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { education } from "@/data/about";

export default function Education() {
	return (
		<div className="border gh-border rounded-xl p-4 sm:p-6 lg:p-8">
			<h2 className="text-xl sm:text-2xl font-bold gh-text mb-4 sm:mb-5 flex items-center">
				<div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-green-400/20 to-blue-400/20 mr-2 sm:mr-3">
					<AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
				</div>
				Education
			</h2>

			<div className="space-y-1 sm:space-y-2">
				{education.map((edu, index) => (
					<div
						key={index}
						className="group p-2 sm:p-2.5 lg:p-3 hover:gh-bg-canvas-subtle rounded-lg flex items-start"
					>
						<div
							className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${edu.color} mt-1.5 mr-2 sm:mr-3 flex-shrink-0`}
						/>
						<div className="flex-1 min-w-0">
							<h3 className="font-bold gh-text mb-1 text-sm sm:text-base group-hover:gh-text-accent transition-colors">
								{edu.degree}
							</h3>
							<p className="gh-text-accent text-xs sm:text-sm font-semibold mb-1">{edu.field}</p>
							<div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm gh-text-muted">
								<span className="font-medium">{edu.institution}</span>
								<span className="hidden sm:inline">•</span>
								<span>{edu.duration}</span>
								{edu.cgpa && (
									<>
										<span className="hidden sm:inline">•</span>
										<span className="font-medium block sm:inline">CGPA: {edu.cgpa}</span>
									</>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
