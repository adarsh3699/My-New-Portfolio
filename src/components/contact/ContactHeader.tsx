import { ColourfulText } from "@/components/ui";

export default function ContactHeader() {
	return (
		<div className="mb-8">
			<h1 className="text-3xl font-bold gh-text mb-4">
				Get In <ColourfulText text="Touch" />
			</h1>
			<p className="gh-text-muted text-lg">
				Let&apos;s connect! Whether you have a project in mind, want to collaborate, or just want to say hello.
			</p>
		</div>
	);
}
