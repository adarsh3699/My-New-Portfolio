import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { education } from "@/data/about";

export default function Education() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-2xl font-semibold gh-text mb-4 flex items-center">
				<AcademicCapIcon className="w-6 h-6 mr-2 gh-text-accent" />
				Education
			</h2>
			<div className="space-y-4">
				{education.map((edu, index) => (
					<div key={index} className={`border-l-4 ${edu.color} pl-4`}>
						<h3 className="font-medium gh-text">{edu.degree}</h3>
						<p className="gh-text-accent text-sm font-medium">{edu.field}</p>
						<p className="gh-text-muted text-sm">
							{edu.institution} • {edu.duration}
						</p>
						{edu.cgpa && <p className="gh-text-muted text-sm mt-1">Current CGPA: {edu.cgpa}</p>}
						{edu.percentage && <p className="gh-text-muted text-sm mt-1">Percentage: {edu.percentage}</p>}
					</div>
				))}
			</div>
		</div>
	);
}
