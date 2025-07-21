import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Performance optimizations
	experimental: {
		optimizePackageImports: ["@heroicons/react", "motion"],
	},

	// Remove console logs in production
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},

	// Image optimization
	images: {
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		unoptimized: false,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "img.shields.io",
				port: "",
				pathname: "/**",
			},
		],
	},

	// Performance headers
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
				],
			},
		];
	},
};

export default nextConfig;
