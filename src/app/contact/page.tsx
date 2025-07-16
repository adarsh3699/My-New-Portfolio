import {
	ContactHeader,
	ContactInformation,
	SocialLinks,
	ResponseTime,
	ContactForm,
	HireCallToAction,
} from "@/components/contact";

export default function ContactPage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-6xl mx-auto px-4 py-12">
				<ContactHeader />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-6">
						<ContactInformation />
						<SocialLinks />
						<ResponseTime />
					</div>
					<ContactForm />
				</div>

				<HireCallToAction />
			</section>
		</main>
	);
}
