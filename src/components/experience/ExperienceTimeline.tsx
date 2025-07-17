import { experiences } from "@/data";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
	return (
		<div className="relative">
			{/* Timeline line */}
			<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gh-border-muted"></div>

			{/* Experience items */}
			<div className="space-y-8">
				{experiences.map((experience) => (
					<ExperienceCard key={experience.id} experience={experience} />
				))}
			</div>
		</div>
	);
}
