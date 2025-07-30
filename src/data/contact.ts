// Contact page dynamic data only
export const contactData = {
	// Contact methods data
	contactMethods: [
		{
			type: "email",
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
			label: "WhatsApp",
			value: "+91 94707-56460",
			href: "https://wa.me/919470756460",
			bg: "bg-green-100 dark:bg-green-800",
			hoverBg: "group-hover:bg-green-200 dark:group-hover:bg-green-700",
			text: "text-green-600 dark:text-green-400",
			isPrimary: false,
			external: true,
		},
	],

	// Social platforms data
	socialPlatforms: [
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/adarsh3699",
			bg: "bg-blue-100 dark:bg-blue-900",
			hoverBg: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800",
			text: "text-blue-600 dark:text-blue-400",
			description: "Professional network",
		},
		{
			name: "X (Twitter)",
			url: "https://twitter.com/adarsh3699",
			bg: "bg-slate-100 dark:bg-slate-800",
			hoverBg: "group-hover:bg-slate-200 dark:group-hover:bg-slate-700",
			text: "text-slate-600 dark:text-slate-400",
			description: "Latest updates",
		},
		{
			name: "YouTube",
			url: "https://youtube.com/@CodingWithBhemu",
			bg: "bg-red-100 dark:bg-red-900",
			hoverBg: "group-hover:bg-red-200 dark:group-hover:bg-red-800",
			text: "text-red-600 dark:text-red-400",
			description: "Video content",
		},
		{
			name: "GitHub",
			url: "https://github.com/adarsh3699",
			bg: "bg-gray-100 dark:bg-gray-800",
			hoverBg: "group-hover:bg-gray-200 dark:group-hover:bg-gray-700",
			text: "text-gray-600 dark:text-gray-400",
			description: "Code repositories",
		},
	],

	// Form action URL (dynamic configuration)
	formAction: "https://send.pageclip.co/YYFiRgfPYOw99mcNfB9R8RHgiwcappSO",
};

// Export individual sections for easier importing
export const { contactMethods, socialPlatforms, formAction } = contactData;
