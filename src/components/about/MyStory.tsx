import { UserIcon } from "@heroicons/react/24/outline";
import { story } from "@/data/about";

export default function MyStory() {
	return (
		<div className="border gh-border rounded-lg p-6 gh-bg-canvas-subtle">
			<h2 className="text-2xl font-semibold gh-text mb-4 flex items-center">
				<UserIcon className="w-6 h-6 mr-2 gh-text-accent" />
				My Story
			</h2>
			<div className="space-y-4 gh-text-muted">
				{story.paragraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>
		</div>
	);
}
