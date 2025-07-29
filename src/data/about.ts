// About page data structure
export const aboutData = {
	// Quick Stats data
	stats: [
		{ label: "Years Coding", value: "3+" },
		{ label: "Projects Built", value: "10+" },
		{ label: "Technologies", value: "15+" },
		{ label: "GitHub Commits", value: "1000+" },
	],

	// Personal story/bio content
	story: {
		paragraphs: [
			"I'm Adarsh, a passionate full-stack developer currently pursuing my B.Tech in Computer Science at Lovely Professional University. My journey in technology started with curiosity about how websites work, and it has evolved into a deep love for creating innovative solutions that make a real difference.",
			"I specialize in modern web technologies including React, Next.js, Node.js, and various databases. What excites me most is the intersection of frontend creativity and backend logic - building seamless, performant applications that users love to interact with.",
			"Beyond coding, I enjoy sharing and learning knowledge with other developers. I believe in continuous learning and always stay updated with the latest industry trends and best practices through collaboration and knowledge exchange.",
		],
	},

	// Current Focus and goals
	currentFocus: [
		{
			title: "Data Structures & Algorithms Mastery",
			description:
				"Strengthening problem-solving skills and mastering core DSA concepts for competitive programming",
			color: "bg-indigo-500",
		},
		{
			title: "Full-Stack Mastery",
			description: "Deepening expertise in modern web technologies and building scalable applications",
			color: "bg-blue-500",
		},
		// {
		// 	title: "Open Source Impact",
		// 	description: "Contributing meaningfully to developer community and popular React/Next.js projects",
		// 	color: "bg-green-500",
		// },
		{
			title: "Cloud & DevOps Skills",
			description: "Learning cloud architecture, containerization, and modern deployment practices",
			color: "bg-purple-500",
		},
		{
			title: "Career Growth",
			description: "Seeking opportunities in innovative companies where I can create impactful solutions",
			color: "bg-orange-500",
		},
	],

	// Technical skills categorized
	skillCategories: [
		{
			title: "Frontend Development",
			color: "text-blue-600",
			skills: [
				{ name: "React", level: "Expert" },
				{ name: "Next.js", level: "Advanced" },
				{ name: "JavaScript", level: "Expert" },
				{ name: "TypeScript", level: "Advanced" },
				{ name: "Tailwind CSS", level: "Advanced" },
			],
		},
		{
			title: "Backend & Database",
			color: "text-green-600",
			skills: [
				{ name: "Node.js", level: "Advanced" },
				{ name: "Express.js", level: "Advanced" },
				{ name: "PostgreSQL", level: "Intermediate" },
				{ name: "MongoDB", level: "Intermediate" },
				{ name: "Firebase", level: "Intermediate" },
			],
		},
		{
			title: "Tools & Others",
			color: "text-purple-600",
			skills: [
				{ name: "Git", level: "Expert" },
				{ name: "C Programming", level: "Intermediate" },
				{ name: "C++", level: "Intermediate" },
				{ name: "Python", level: "Intermediate" },
				{ name: "AWS", level: "Noob" },
			],
		},
	],

	// Education information
	education: [
		{
			degree: "Bachelor of Technology",
			field: "Computer Science & Engineering",
			institution: "Lovely Professional University",
			duration: "2024-2028",
			cgpa: "8.86",
			color: "bg-blue-500",
		},
		{
			degree: "Higher Secondary Education",
			field: "Science (PCM)",
			institution: "Allama Iqbal College",
			duration: "2022-2024",
			// percentage: "92%",
			color: "bg-green-500",
		},
		{
			degree: "Secondary Education",
			field: "Science & Mathematics",
			institution: "RPS Public School",
			duration: "2019-2021",
			// percentage: "95%",
			color: "bg-purple-500",
		},
	],

	// Certificates and achievements
	achievements: [
		{
			title: "Code-A-Haunt 2.0 Hackathon : Round 3 Top 15",
			organization: "CodingBlock LPU",
			year: "2025",
			description:
				"Participated in State-Level Inter-University Hackathon showcasing exceptional skills in coding and problem-solving",
			color: "bg-red-500",
		},
		{
			title: "Hack-a-Throne 1.0 : Round 2",
			organization: "GeeksforGeeks",
			year: "2024",
			description: "Participated in hackathon organized by AIESEC in Jalandhar under GeeksforGeeks guidance",
			color: "bg-green-500",
		},
		{
			title: "Introduction to DSA with Proctored Exam",
			organization: "Coding Tantra",
			year: "2025",
			description: "Completed 15+ hours MOOC on Data Structures and Algorithms with proctored examination",
			color: "bg-blue-500",
		},
		{
			title: "Computer Programming Certification",
			organization: "Lovely Professional University",
			year: "2025",
			description: "Completed 72 hours online course on Computer Programming via iamneo Platform",
			color: "bg-purple-500",
		},
	],

	// Personal interests and hobbies
	interests: [
		{ icon: "🍿", name: "Watching Movies" },
		{ icon: "🎧", name: "Listening to Music" },
		{ icon: "🎥", name: "Video Editing" },
		{ icon: "📸", name: "Photography" },
		{ icon: "🏃‍♂️", name: "Exercise" },
		{ icon: "🎮", name: "Gaming" },
		{ icon: "🎲", name: "Chess" },
		{ icon: "🤖", name: "Exploring AI Tools" },
	],

	// Core professional values
	values: [
		{
			title: "Continuous Learning",
			desc: "Always staying curious and open to new technologies",
		},
		{
			title: "Quality Code",
			desc: "Writing clean, maintainable, and well-documented code",
		},
		{
			title: "User-Centric",
			desc: "Prioritizing user experience in every project",
		},
		{
			title: "Collaboration",
			desc: "Believing in the power of teamwork and knowledge sharing",
		},
	],

	// Fun personal facts
	funFacts: [
		"🚀 Built my first website at age 16",
		"🌙 Night owl - best coding happens after 10 PM",
		"⚡ Can spot a missing semicolon from across the room",
		// "🎯 Completed 100+ coding challenges on LeetCode",
		"🔥 Can code for 12 hours straight when in the zone",
		"🐛 I actually enjoy debugging - it's like solving puzzles",
		"📝 Write code comments like I'm explaining to my future self",
		"💡 Get my best ideas while taking shower breaks",
	],
};

// Export individual sections for easier importing
export const { stats, story, currentFocus, skillCategories, education, achievements, interests, values, funFacts } =
	aboutData;
