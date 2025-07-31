import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
	title: "Projects",
	description:
		"Explore my comprehensive collection of web development projects, applications, and technical solutions built with modern technologies like React, Next.js, Node.js, and more.",
	path: "/projects",
	keywords: [
		"projects",
		"portfolio",
		"web development",
		"applications",
		"github projects",
		"react projects",
		"nextjs projects",
		"nodejs projects",
		"full stack applications",
		"coding projects",
	],
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
