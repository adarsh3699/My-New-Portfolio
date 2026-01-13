import { Project } from "./index";

export const bhemuUniDownloaderData: Project = {
	// Basic info
	id: "bhemu-uni-downloader",
	name: "Bhemu UNI Downloader",
	description:
		"A beautiful macOS app for downloading videos from YouTube, Instagram, TikTok, and 1000+ websites with playlist support, multiple quality options, and subtitle embedding",
	longDescription:
		"Bhemu UNI Downloader is a comprehensive macOS application built with Swift and SwiftUI that enables seamless video downloads from over 1000 websites including YouTube, Instagram, TikTok, Twitter, Facebook, Reddit, and more. It features a beautiful native UI with real-time progress tracking, concurrent playlist downloads, automatic subtitle embedding, and smart retry mechanisms. All processing happens locally on your Mac, ensuring complete privacy and security.",

	// Links
	liveUrl: "https://github.com/adarsh3699/Bhemu-UNI-Downloader/releases",
	githubUrl: "https://github.com/adarsh3699/Bhemu-UNI-Downloader",
	githubRepo: {
		owner: "adarsh3699",
		name: "Bhemu-UNI-Downloader",
		branch: "main",
	},

	// Tech details
	technologies: [
		"Swift",
		"SwiftUI",
		"yt-dlp",
		"FFmpeg",
		"macOS",
		"MVVM Architecture",
		"Concurrency",
		"Drag & Drop",
		"Real-time Progress",
		"Auto-Retry",
		"Subtitle Support",
		"Playlist Support",
	],
	primaryLanguage: { name: "Swift", color: "bg-orange-500" },
	category: "Tool",

	// Status
	isPinned: true,
	featured: true,
	createdAt: "2026-01-12",

	// Visual content
	screenshots: [
		{
			url: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop",
			title: "Universal Video Downloader for 1000+ Websites",
			description:
				"Download videos from YouTube, Instagram, TikTok, Twitter, Facebook, Reddit, Vimeo, Twitch, SoundCloud and 1000+ more platforms with a single app. Simply paste the URL and choose your preferred quality or audio-only format",
		},
		{
			url: "https://plus.unsplash.com/premium_photo-1720371280126-41fd99e04291?w=800&h=600&fit=crop",
			title: "Smart Playlist Downloads with Concurrent Processing",
			description:
				"Download entire YouTube playlists with intelligent concurrent processing (up to 2 simultaneous downloads). Select specific videos, choose quality for all, and track real-time progress with automatic retry for failed downloads",
		},
		{
			url: "https://images.unsplash.com/photo-1549192309-b5b9ecf012e0?w=800&h=600&fit=crop",
			title: "Multi-Language Subtitles & Audio Extraction",
			description:
				"Automatically download and embed subtitles in multiple languages (English, Spanish, French, etc.) directly into videos. Extract audio-only MP3 from any video with high-quality FFmpeg conversion for podcast or music downloads",
		},
	],

	// README content (fallback when GitHub README unavailable)
	readmeContent: {
		features: [
			"🌐 1000+ Websites Support - YouTube, Instagram, TikTok, Twitter/X, Facebook, Reddit, Vimeo, Twitch, SoundCloud, and more",
			"🎬 Multiple Quality Options - Best, 1440p, 1080p, 720p, 480p, or Audio-only (MP3) downloads",
			"📋 Playlist Support - Download entire playlists with concurrent downloads (up to 3 simultaneous)",
			"💬 Subtitle Support - Download and embed subtitles in multiple languages automatically",
			"⚡ Real-time Progress - Live speed, percentage, and ETA tracking with beautiful progress indicators",
			"🔄 Auto-Retry Mechanism - Failed downloads automatically retry up to 3 times with smart error handling",
			"🎭 Drag & Drop Interface - Drop video URLs directly into the app for instant processing",
			"🔒 100% Private - All processing happens locally on your Mac with no data sharing",
			"🎨 Native macOS Design - Beautiful SwiftUI interface with dark mode support",
			"📁 Flexible Save Location - Choose custom download folders for organized file management",
			"⌨️ Keyboard Shortcuts - Quick actions with ⌘↩ (start), ⌘. (cancel), ⌘, (settings), ⌘? (help)",
			"🚀 Automatic Setup - First launch automatically installs yt-dlp and ffmpeg dependencies",
		],
		techDetails: {
			framework: "Swift 5.9+ with SwiftUI for modern native macOS application development",
			styling: "SwiftUI native components with adaptive layout and dark mode support",
			backend: "yt-dlp integration for video processing and FFmpeg for media conversion",
			deployment: "macOS 13.0+ (Ventura or later) with DMG distribution for easy installation",
			performance: {
				lighthouse: 95,
				loadTime: "< 0.5s",
				coreWebVitals: "Native app performance with optimized concurrent downloads and efficient memory usage",
			},
		},
		installation: {
			prerequisites: [
				"macOS 13.0+ (Ventura or later) for SwiftUI compatibility",
				"Xcode 14.0+ for building from source (developers only)",
				"Homebrew (automatically installed by the app if needed)",
				"yt-dlp and ffmpeg (automatically installed on first launch)",
			],
			steps: [
				"Download the latest .dmg from GitHub Releases: https://github.com/adarsh3699/Bhemu-UNI-Downloader/releases",
				"Open the DMG file and drag the app to Applications folder",
				"Launch the app - it will automatically install dependencies (yt-dlp and ffmpeg)",
				"If you see security warning, go to System Settings → Privacy & Security → Click 'Open Anyway'",
				"For building from source: Clone repository and open BhemuUNIDownloader.xcodeproj in Xcode",
				"Build and run with ⌘+R in Xcode for development",
			],
		},
		customSections: [
			{
				title: "Core Features",
				icon: "🎯",
				content:
					"**Universal Support:** Download from 1000+ websites including all major platforms like YouTube, Instagram, TikTok, Twitter/X, Facebook, Reddit, Vimeo, Twitch, and SoundCloud\n**Quality Selection:** Choose from Best, 1440p, 1080p, 720p, 480p video quality or extract audio-only MP3\n**Playlist Processing:** Download entire playlists with up to 3 concurrent downloads and selective video choosing\n**Smart Retry:** Automatic retry mechanism for failed downloads with up to 3 attempts\n**Progress Tracking:** Real-time speed, percentage, and ETA display with beautiful progress indicators",
			},
			{
				title: "Subtitle & Media Features",
				icon: "💬",
				content:
					"**Multi-language Subtitles:** Download subtitles in multiple languages (en, es, fr, etc.)\n**Automatic Embedding:** Embed subtitles directly into video files for seamless playback\n**Format Conversion:** Automatic video and audio format conversion using FFmpeg\n**Quality Optimization:** Smart quality selection based on available formats\n**Download Log:** Detailed download history and error tracking for troubleshooting",
			},
			{
				title: "User Experience",
				icon: "🎨",
				content:
					"**Native macOS Design:** Beautiful SwiftUI interface with dark mode support and adaptive layout\n**Drag & Drop:** Drop video URLs directly into the app for instant processing\n**Keyboard Shortcuts:** Quick actions with ⌘↩ (start), ⌘. (cancel), ⌘, (settings), ⌘? (help)\n**Custom Save Locations:** Choose flexible download folders for organized file management\n**Real-time Feedback:** Live progress updates with speed and ETA indicators\n**Error Handling:** Clear error messages and automatic retry for failed downloads",
			},
			{
				title: "Privacy & Security",
				icon: "🔒",
				content:
					"**100% Local Processing:** All video processing happens locally on your Mac\n**No Data Sharing:** No analytics, tracking, or data collection of any kind\n**Open Source:** Fully transparent codebase available on GitHub under MIT license\n**Secure Downloads:** All downloads are direct from source with no intermediate servers\n**Privacy First:** Built with privacy as a core principle from day one",
			},
			{
				title: "Technical Architecture",
				icon: "🏗️",
				content:
					"**Frontend:** SwiftUI with MVVM architecture for clean separation of concerns\n**Download Engine:** yt-dlp integration for powerful video extraction from 1000+ sites\n**Media Processing:** FFmpeg for format conversion, subtitle embedding, and audio extraction\n**Concurrency:** Swift async/await for efficient concurrent playlist downloads\n**Dependency Management:** Automatic yt-dlp and ffmpeg installation on first launch\n**Project Structure:** Models, Views, ViewModels, Services, and Utilities for maintainable code",
			},
		],
	},
};
