import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "@/components/icons";
import { contactMethods } from "@/data/contact";

// Icon mapping for contact methods
const iconMap = {
	email: EnvelopeIcon,
	phone: PhoneIcon,
	whatsapp: WhatsAppIcon,
};

export default function ContactInformation() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-xl font-semibold gh-text mb-4">Contact On</h2>
			<div className="space-y-1">
				{contactMethods.map((contact, index) => {
					const IconComponent = iconMap[contact.type as keyof typeof iconMap];
					return (
						<a
							key={index}
							href={contact.href}
							{...(contact.external && {
								target: "_blank",
								rel: "noopener noreferrer",
							})}
							className="flex items-center w-fit gap-3 p-2 rounded-lg hover:gh-bg-canvas-subtle transition-colors group"
							aria-label={`${contact.label}: ${contact.value}`}
						>
							<div className={`p-2 ${contact.bg} rounded-lg ${contact.hoverBg} transition-colors`}>
								<IconComponent className={`w-5 h-5 ${contact.text}`} />
							</div>
							<div className="flex flex-col">
								<div className="flex items-center gap-2">
									<h3 className="font-medium gh-text  group-hover:gh-text-accent transition-colors duration-300">
										{contact.label}
									</h3>
									{contact.isPrimary && (
										<span className="text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full">
											Primary
										</span>
									)}
								</div>
								<p className="gh-text-muted text-sm">{contact.value}</p>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
