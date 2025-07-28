import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { skillCategories } from "@/data/about";

export default function TechnicalExpertise() {
	return (
		<div className="border gh-border rounded-lg p-6 mb-12">
			<h2 className="text-2xl font-semibold gh-text mb-6 flex items-center">
				<WrenchScrewdriverIcon className="w-6 h-6 mr-2 gh-text-accent" />
				Technical Expertise
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{skillCategories.map((category, index) => (
					<div key={index} className="space-y-6">
						<div>
							<h3 className={`font-semibold gh-text mb-4 ${category.color} text-lg`}>{category.title}</h3>
							<div className="space-y-3">
								{category.skills.map((skill) => (
									<div
										key={skill.name}
										className="flex justify-between items-center p-2 rounded gh-bg-canvas-subtle"
									>
										<span className="gh-text">{skill.name}</span>
										<span className="text-xs px-3 py-1 gh-bg-accent-subtle gh-text-accent rounded-full">
											{skill.level}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
