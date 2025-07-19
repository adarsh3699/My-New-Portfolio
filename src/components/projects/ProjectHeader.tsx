import { ColourfulText } from "@/components/ui";

interface ProjectHeaderProps {
	totalProjects: number;
}

export function ProjectHeader({ totalProjects }: ProjectHeaderProps) {
	return (
		<div className="mb-8">
			<h1 className="text-3xl font-bold gh-text mb-4">
				All <ColourfulText text="Repositories" />
			</h1>
			<p className="gh-text-muted text-lg">
				A showcase of all my projects and repositories ({totalProjects} total)
			</p>
		</div>
	);
}
