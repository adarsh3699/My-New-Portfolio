import Image from "next/image";

export default function AboutHeader() {
	return (
		<div className="text-center mb-12">
			<div className="relative w-32 h-32 mx-auto mb-6">
				<Image
					src="/images/myPhoto.png"
					alt="Profile Photo"
					fill
					sizes="(max-width: 640px) 128px, (max-width: 768px) 128px, 128px"
					className="rounded-full object-cover border-4 gh-border"
				/>
			</div>
			<h1 className="text-4xl font-bold gh-text mb-4">About Me</h1>
			<p className="gh-text-muted text-xl max-w-2xl mx-auto">
				Full-Stack Developer passionate about creating innovative solutions and building amazing user
				experiences
			</p>
		</div>
	);
}
