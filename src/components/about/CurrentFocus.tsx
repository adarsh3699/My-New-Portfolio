import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { currentFocus } from "@/data/about";

export default function CurrentFocus() {
	return (
		<div className="border gh-border rounded-lg p-6 gh-bg-canvas-subtle">
			<h2 className="text-2xl font-semibold gh-text mb-4 flex items-center">
				<RocketLaunchIcon className="w-6 h-6 mr-2 gh-text-accent" />
				Current Focus & Goals
			</h2>
			<div className="space-y-4">
				{currentFocus.map((focus, index) => (
					<div key={index} className={`border-l-4 ${focus.color} pl-4`}>
						<h3 className="font-medium gh-text">{focus.title}</h3>
						<p className="gh-text-muted text-sm">{focus.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
