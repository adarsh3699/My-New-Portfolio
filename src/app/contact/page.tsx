import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
	return (
		<>
			<Header />
			<main className="min-h-screen gh-bg-canvas-default">
				<section className="max-w-6xl mx-auto px-4 py-12">
					<div className="mb-8">
						<h1 className="text-3xl font-bold gh-text mb-4">Get In Touch</h1>
						<p className="gh-text-muted text-lg">
							Let&apos;s connect! Whether you have a project in mind, want to collaborate, or just want to
							say hello.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Contact Information */}
						<div className="space-y-6">
							<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6">
								<h2 className="text-xl font-semibold gh-text mb-4">Contact Information</h2>
								<div className="space-y-4">
									<a
										href="mailto:adarsh3699@gmail.com"
										className="flex items-center gap-3 p-3 rounded-lg hover:gh-bg-canvas-subtle transition-colors group"
									>
										<div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
											<Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
										</div>
										<div>
											<h3 className="font-medium gh-text">Email</h3>
											<p className="gh-text-muted text-sm">adarsh3699@gmail.com</p>
										</div>
									</a>

									<a
										href="tel:+1234567890"
										className="flex items-center gap-3 p-3 rounded-lg hover:gh-bg-canvas-subtle transition-colors group"
									>
										<div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
											<Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
										</div>
										<div>
											<h3 className="font-medium gh-text">Phone</h3>
											<p className="gh-text-muted text-sm">+1 (234) 567-890</p>
										</div>
									</a>

									<div className="flex items-center gap-3 p-3 rounded-lg">
										<div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
											<MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
										</div>
										<div>
											<h3 className="font-medium gh-text">Location</h3>
											<p className="gh-text-muted text-sm">Available for Remote Work</p>
										</div>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6">
								<h2 className="text-xl font-semibold gh-text mb-4">Connect With Me</h2>
								<div className="space-y-3">
									<a
										href="https://github.com/adarsh3699"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 p-3 rounded-lg hover:gh-bg-canvas-subtle transition-colors group"
									>
										<Github className="w-5 h-5 gh-text-muted group-hover:gh-text-accent" />
										<span className="gh-text group-hover:gh-text-accent">GitHub</span>
									</a>
									<a
										href="https://linkedin.com/in/adarsh3699"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 p-3 rounded-lg hover:gh-bg-canvas-subtle transition-colors group"
									>
										<Linkedin className="w-5 h-5 gh-text-muted group-hover:gh-text-accent" />
										<span className="gh-text group-hover:gh-text-accent">LinkedIn</span>
									</a>
								</div>
							</div>

							{/* Response Time */}
							<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6">
								<div className="flex items-center gap-3 mb-3">
									<div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
										<MessageSquare className="w-5 h-5 text-orange-600 dark:text-orange-400" />
									</div>
									<h3 className="font-semibold gh-text">Response Time</h3>
								</div>
								<p className="gh-text-muted text-sm">
									I typically respond to emails within 24 hours. For urgent matters, feel free to
									reach out via LinkedIn for a faster response.
								</p>
							</div>
						</div>

						{/* Contact Form */}
						<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6">
							<h2 className="text-xl font-semibold gh-text mb-4">Send a Message</h2>
							<form className="space-y-4">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<label htmlFor="firstName" className="block text-sm font-medium gh-text mb-1">
											First Name
										</label>
										<input
											type="text"
											id="firstName"
											name="firstName"
											className="w-full px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent gh-text"
											placeholder="John"
										/>
									</div>
									<div>
										<label htmlFor="lastName" className="block text-sm font-medium gh-text mb-1">
											Last Name
										</label>
										<input
											type="text"
											id="lastName"
											name="lastName"
											className="w-full px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent gh-text"
											placeholder="Doe"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm font-medium gh-text mb-1">
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent gh-text"
										placeholder="john.doe@example.com"
									/>
								</div>

								<div>
									<label htmlFor="subject" className="block text-sm font-medium gh-text mb-1">
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										className="w-full px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent gh-text"
										placeholder="Project Collaboration"
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium gh-text mb-1">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										className="w-full px-3 py-2 text-sm gh-bg-canvas-inset border gh-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent gh-text resize-none"
										placeholder="Tell me about your project or just say hello..."
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full btn-primary flex items-center justify-center gap-2"
								>
									<Send className="w-4 h-4" />
									Send Message
								</button>
							</form>
						</div>
					</div>

					{/* Additional CTA */}
					<div className="mt-12 text-center">
						<div className="gh-bg-canvas-overlay border gh-border rounded-lg p-6">
							<h3 className="text-lg font-semibold gh-text mb-2">Looking to Hire?</h3>
							<p className="gh-text-muted mb-4">
								I&apos;m currently open to new opportunities and would love to discuss how I can
								contribute to your team.
							</p>
							<div className="flex flex-col sm:flex-row gap-3 justify-center">
								<a
									href="/experience"
									className="btn-secondary inline-flex items-center justify-center gap-2"
								>
									View My Experience
								</a>
								<a
									href="/projects"
									className="btn-secondary inline-flex items-center justify-center gap-2"
								>
									See My Work
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
