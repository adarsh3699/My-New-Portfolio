import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { education } from "@/data/about";

export default function Education() {
	return (
		<div className="border gh-border rounded-xl p-6">
			<h2 className="text-2xl font-bold gh-text mb-5 flex items-center">
				<div className="p-2 rounded-lg bg-gradient-to-r from-green-400/20 to-blue-400/20 mr-3">
					<AcademicCapIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
				</div>
				Education
			</h2>

			{education.map((edu, index) => (
				<div key={index} className="group p-2 hover:gh-bg-canvas-subtle flex items-start">
					<div className={`w-2.5 h-2.5 rounded-full ${edu.color} mt-1.5 mr-3`} />
					<div className="flex-1">
						<h3 className="font-bold gh-text mb-1 group-hover:gh-text-accent transition-colors">
							{edu.degree}
						</h3>
						<p className="gh-text-accent text-sm font-semibold mb-1">{edu.field}</p>
						<div className="flex flex-wrap items-center gap-2 text-sm gh-text-muted">
							<span className="font-medium">{edu.institution}</span>
							<span>•</span>
							<span>{edu.duration}</span>
							{edu.cgpa && (
								<>
									<span>•</span>
									<span className="font-medium">CGPA: {edu.cgpa}</span>
								</>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
