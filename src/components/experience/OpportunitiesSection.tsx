import Link from "next/link";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function OpportunitiesSection() {
	return (
		<div className="mt-12 text-center">
			<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6">
				<h3 className="text-lg font-semibold gh-text mb-2">Looking for Opportunities</h3>
				<p className="gh-text-muted mb-4">
					I&apos;m always interested in hearing about new opportunities and exciting projects.
				</p>
				<Link href="/contact" className="btn-primary inline-flex items-center gap-2">
					<BriefcaseIcon className="w-4 h-4" />
					Get In Touch
				</Link>
			</div>
		</div>
	);
}
