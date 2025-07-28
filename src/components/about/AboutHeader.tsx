import Image from "next/image";

export default function AboutHeader() {
	return (
		<div className="text-center mb-16 relative">
			{/* Background decoration */}
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl sm:blur-3xl opacity-80 sm:opacity-100" />

			<div className="relative z-10 py-12">
				{/* Profile Image with enhanced styling */}
				<div className="relative w-40 h-40 mx-auto mb-8 group">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
					<div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900" />
					<Image
						src="/images/myPhoto.png"
						alt="Profile Photo"
						fill
						sizes="(max-width: 640px) 160px, (max-width: 768px) 160px, 160px"
						className="rounded-full object-cover border-4 gh-border relative z-10"
					/>
					{/* Floating elements around profile */}
					<div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-60" />
					<div
						className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce opacity-60"
						style={{ animationDelay: "0.5s" }}
					/>
				</div>

				{/* Enhanced Typography */}
				<div className="space-y-6">
					<h1 className="text-5xl font-bold gh-text mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
						About Me
					</h1>

					<div className="relative">
						<p className="gh-text-muted text-xl max-w-3xl mx-auto leading-relaxed">
							Full-Stack Developer passionate about creating innovative solutions and building amazing
							user experiences
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
