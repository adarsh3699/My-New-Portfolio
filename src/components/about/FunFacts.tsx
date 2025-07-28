import { SparklesIcon } from "@heroicons/react/24/outline";
import { funFacts } from "@/data/about";

export default function FunFacts() {
	return (
		<div className="border gh-border rounded-lg p-6 mb-12">
			<h2 className="text-2xl font-semibold gh-text mb-4 flex items-center">
				<SparklesIcon className="w-6 h-6 mr-2 gh-text-accent" />
				Fun Facts About Me
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{funFacts.map((fact, index) => (
					<div key={index} className="p-3 rounded gh-bg-canvas-subtle border gh-border-subtle">
						<p className="gh-text text-sm">{fact}</p>
					</div>
				))}
			</div>
		</div>
	);
}
