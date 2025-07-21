import dynamic from "next/dynamic";
import { ContactFormSkeleton } from "@/components/contact/ContactForm";

// Dynamic imports - lightweight components don't need skeletons
const ContactHeader = dynamic(() => import("@/components/contact/ContactHeader"));
const ContactInformation = dynamic(() => import("@/components/contact/ContactInformation"));
const SocialLinks = dynamic(() => import("@/components/contact/SocialLinks"));
const ResponseTime = dynamic(() => import("@/components/contact/ResponseTime"));

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
	loading: () => <ContactFormSkeleton />,
});

const OpportunitiesSection = dynamic(() => import("@/components/ui/opportunities-section"), {
	loading: () => <div className="animate-pulse h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>,
});

export default function ContactPage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
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
