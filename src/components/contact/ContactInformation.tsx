import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "@/components/icons";

const contactMethods = [
	{
		type: "email",
		icon: EnvelopeIcon,
		label: "Email",
		value: "adarsh3699@gmail.com",
		href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adarsh3699@gmail.com",
		bg: "bg-blue-100 dark:bg-blue-900",
		hoverBg: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800",
		text: "text-blue-600 dark:text-blue-400",
		isPrimary: true,
		external: true,
	},
	{
		type: "email",
		icon: EnvelopeIcon,
		label: "Email",
		value: "bhemu369@gmail.com",
		href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bhemu369@gmail.com",
		bg: "bg-blue-100 dark:bg-blue-900",
		hoverBg: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800",
		text: "text-blue-600 dark:text-blue-400",
		isPrimary: false,
		external: true,
	},
	{
		type: "phone",
		icon: PhoneIcon,
		label: "Phone",
		value: "+91 94707-56460",
		href: "tel:+919470756460",
		bg: "bg-emerald-100 dark:bg-emerald-900",
		hoverBg: "group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800",
		text: "text-emerald-600 dark:text-emerald-400",
		isPrimary: false,
	},
	{
		type: "whatsapp",
		icon: WhatsAppIcon,
		label: "WhatsApp",
		value: "+91 94707-56460",
		href: "https://wa.me/919470756460",
		bg: "bg-green-100 dark:bg-green-800",
		hoverBg: "group-hover:bg-green-200 dark:group-hover:bg-green-700",
		text: "text-green-600 dark:text-green-400",
		isPrimary: false,
		external: true,
	},
	{
		type: "location",
		icon: MapPinIcon,
		label: "Location",
		value: "Nalanda, Bihar, India",
		href: "https://maps.app.goo.gl/Wr5hEa4Q3bTswgs18",
		bg: "bg-purple-100 dark:bg-purple-900",
		hoverBg: "group-hover:bg-purple-200 dark:group-hover:bg-purple-800",
		text: "text-purple-600 dark:text-purple-400",
		isPrimary: false,
		external: true,
	},
];

export default function ContactInformation() {
	return (
		<div className="border gh-border rounded-lg p-6">
			<h2 className="text-xl font-semibold gh-text mb-4">Contact On</h2>
			<div className="space-y-1">
				{contactMethods.map((contact, index) => (
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
							<contact.icon className={`w-5 h-5 ${contact.text}`} />
						</div>
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<h3 className="font-medium gh-text">{contact.label}</h3>
								{contact.isPrimary && (
									<span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
										Primary
									</span>
								)}
							</div>
							<p className="gh-text-muted text-sm">{contact.value}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
