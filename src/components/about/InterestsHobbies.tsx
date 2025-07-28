import { PaintBrushIcon } from "@heroicons/react/24/outline";
import { interests } from "@/data/about";

export default function InterestsHobbies() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-2xl font-semibold gh-text mb-4 flex items-center">
				<PaintBrushIcon className="w-6 h-6 mr-2 gh-text-accent" />
				Interests & Hobbies
			</h2>
			<div className="grid grid-cols-2 gap-4">
				{interests.map((interest) => (
					<div key={interest.name} className="flex items-center space-x-2 p-2 rounded gh-bg-accent-subtle">
						<span className="text-lg">{interest.icon}</span>
						<span className="gh-text text-sm">{interest.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
