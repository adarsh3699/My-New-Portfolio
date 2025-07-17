import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Input, Textarea, Button } from "@/components/ui";

export default function ContactForm() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-xl font-semibold gh-text mb-4">Send a Message</h2>
			<form
				className="space-y-4"
				method="post"
				action="https://send.pageclip.co/YYFiRgfPYOw99mcNfB9R8RHgiwcappSO"
			>
				<div>
					<label htmlFor="fullName" className="block text-sm font-medium gh-text mb-1">
						Full Name
					</label>

					<Input
						type="text"
						id="fullName"
						name="fullName"
						required
						className="gh-bg-canvas-overlay"
						placeholder="John"
					/>
				</div>

				<div>
					<label htmlFor="email" className="block text-sm font-medium gh-text mb-1">
						Email Address
					</label>
					<Input
						type="email"
						id="email"
						name="email"
						required
						className="gh-bg-canvas-overlay"
						placeholder="john.doe@example.com"
					/>
				</div>

				<div>
					<label htmlFor="subject" className="block text-sm font-medium gh-text mb-1">
						Subject
					</label>
					<Input
						type="text"
						id="subject"
						name="subject"
						required
						className="gh-bg-canvas-overlay"
						placeholder="Project Collaboration"
					/>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-medium gh-text mb-1">
						Message
					</label>
					<Textarea
						id="message"
						name="body"
						required
						rows={10}
						style={{ resize: "vertical" }}
						className="gh-bg-canvas-overlay"
						placeholder="Tell me about your project or just say hello..."
					/>
				</div>

				<Button type="submit" className="w-full">
					<PaperAirplaneIcon className="w-4 h-4" />
					Send Message
				</Button>
			</form>
		</div>
	);
}

export function ContactFormSkeleton() {
	return (
		<div className="border gh-border rounded-lg p-6 animate-pulse">
			<div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
			<div className="space-y-4">
				<div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
				<div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
				<div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
				<div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
				<div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
			</div>
		</div>
	);
}
