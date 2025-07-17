import { ColourfulText } from "../ui";

export default function ExperienceHeader() {
	return (
		<div className="mb-8">
			<h1 className="text-3xl font-bold gh-text mb-4">
				Work <ColourfulText text="Experience" />
			</h1>
			<p className="gh-text-muted text-lg">
				My professional journey and the companies I&apos;ve had the pleasure to work with.
			</p>
		</div>
	);
}
