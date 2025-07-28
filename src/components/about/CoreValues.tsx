import { LightBulbIcon } from "@heroicons/react/24/outline";
import { values } from "@/data/about";

export default function CoreValues() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-2xl font-semibold gh-text mb-4 flex items-center">
				<LightBulbIcon className="w-6 h-6 mr-2 gh-text-accent" />
				Core Values
			</h2>
			<div className="space-y-3">
				{values.map((value) => (
					<div key={value.title} className="p-3 rounded gh-bg-accent-subtle">
						<div className="font-medium gh-text text-sm">{value.title}</div>
						<p className="gh-text-muted text-xs">{value.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
}
