import { stats } from "@/data/about";

export default function QuickStats() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
			{stats.map((stat, index) => (
				<div key={index} className="text-center p-4 border gh-border rounded-lg gh-bg-canvas-subtle">
					<div className="text-2xl font-bold gh-text-accent">{stat.value}</div>
					<div className="text-sm gh-text-muted">{stat.label}</div>
				</div>
			))}
		</div>
	);
}
