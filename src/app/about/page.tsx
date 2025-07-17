export default function AboutPage() {
	return (
		<main className="min-h-screen gh-bg-canvas-default">
			<section className="max-w-7xl mx-auto px-3 md:px-8 lg:px-6 py-8 sm:py-12">
				<div className="mb-8">
					<h1 className="text-3xl font-bold gh-text mb-4">About Me</h1>
					<p className="gh-text-muted text-lg">
						Learn more about my background, skills, and passion for technology.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Bio Section */}
					<div className="border gh-border rounded-lg p-6">
						<h2 className="text-xl font-semibold gh-text mb-4">My Story</h2>
						<div className="space-y-4 gh-text-muted">
							<p>
								I&apos;m a passionate full-stack developer with a love for creating innovative solutions
								that make a difference. My journey in technology started several years ago, and
								I&apos;ve been constantly learning and evolving ever since.
							</p>
							<p>
								I specialize in modern web technologies including React, Next.js, Node.js, and various
								databases. I enjoy working on both frontend and backend development, always striving to
								create seamless user experiences.
							</p>
							<p>
								When I&apos;m not coding, you can find me exploring new technologies, contributing to
								open-source projects, or sharing knowledge with the developer community.
							</p>
						</div>
					</div>

					{/* Skills Section */}
					<div className="border gh-border rounded-lg p-6">
						<h2 className="text-xl font-semibold gh-text mb-4">Technical Skills</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-medium gh-text mb-2">Frontend</h3>
								<div className="flex flex-wrap gap-2">
									{["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"].map((skill) => (
										<span
											key={skill}
											className="text-xs px-3 py-1 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
							<div>
								<h3 className="font-medium gh-text mb-2">Backend</h3>
								<div className="flex flex-wrap gap-2">
									{["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
										<span
											key={skill}
											className="text-xs px-3 py-1 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
							<div>
								<h3 className="font-medium gh-text mb-2">Tools & Others</h3>
								<div className="flex flex-wrap gap-2">
									{["Docker", "Kubernetes", "Git", "AWS", "Linux", "CI/CD"].map((skill) => (
										<span
											key={skill}
											className="text-xs px-3 py-1 gh-bg-accent-subtle gh-text-accent rounded-full border gh-border-subtle"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Education & Certifications */}
				<div className="mt-8 border gh-border rounded-lg p-6">
					<h2 className="text-xl font-semibold gh-text mb-4">Education & Certifications</h2>
					<div className="space-y-4">
						<div className="border-l-2 border-blue-500 pl-4">
							<h3 className="font-medium gh-text">Bachelor&apos;s in Computer Science</h3>
							<p className="gh-text-muted text-sm">University Name • 2018-2022</p>
							<p className="gh-text-muted text-sm mt-1">
								Focused on software engineering, data structures, algorithms, and web development.
							</p>
						</div>
						<div className="border-l-2 border-green-500 pl-4">
							<h3 className="font-medium gh-text">AWS Certified Developer</h3>
							<p className="gh-text-muted text-sm">Amazon Web Services • 2023</p>
							<p className="gh-text-muted text-sm mt-1">
								Certified in developing and maintaining applications on AWS platform.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
