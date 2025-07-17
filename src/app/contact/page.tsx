import dynamic from "next/dynamic";
import { ContactHeader, ContactInformation, SocialLinks, ResponseTime } from "@/components/contact";
import { ContactFormSkeleton } from "@/components/contact/ContactForm";
import { OpportunitiesSection } from "@/components/ui";

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
	loading: () => <ContactFormSkeleton />,
});

export default function ContactPage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-4 py-12">
				<ContactHeader />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-6">
						<ContactInformation />
						<SocialLinks />
						<ResponseTime />
					</div>
					<ContactForm />
				</div>

				<OpportunitiesSection variant="contact" />
			</section>
		</main>
	);
}
