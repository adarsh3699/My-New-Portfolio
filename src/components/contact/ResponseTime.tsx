import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function ResponseTime() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<div className="flex items-center gap-3 mb-3">
				<div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
					<ChatBubbleLeftRightIcon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
				</div>
				<h3 className="font-semibold gh-text">Response Time</h3>
			</div>
			<p className="gh-text-muted text-sm">
				I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via LinkedIn
				for a faster response.
			</p>
		</div>
	);
}
