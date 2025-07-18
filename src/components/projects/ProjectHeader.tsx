interface ProjectHeaderProps {
	totalProjects: number;
	filteredCount: number;
}

export function ProjectHeader({ totalProjects, filteredCount }: ProjectHeaderProps) {
	return (
		<>
			<div className="mb-8">
				<h2 className="text-2xl font-bold gh-text mb-2">All repositories</h2>
				<p className="gh-text-muted">A showcase of all my projects and repositories ({totalProjects} total)</p>
			</div>

			<div className="mb-4">
				<p className="text-sm gh-text-muted">
					{filteredCount} {filteredCount === 1 ? "repository" : "repositories"}
				</p>
			</div>
		</>
	);
}
