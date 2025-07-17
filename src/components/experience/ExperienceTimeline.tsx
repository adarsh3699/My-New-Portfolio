import { experiences } from "@/data";
import ExperienceCard from "./ExperienceCard";
import { Timeline } from "@/components/ui/timeline";

export default function ExperienceTimeline() {
	const timelineData = experiences.map((experience) => ({
		title: experience.startDate,
		content: <ExperienceCard experience={experience} />,
	}));

	return <Timeline data={timelineData} />;
}
