import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-screen gh-bg-canvas-default flex items-center justify-center px-4">
			<div className="text-center space-y-6 max-w-md">
				<p className="text-8xl font-bold gh-text-accent">404</p>
				<h1 className="text-2xl font-semibold gh-text">Page not found</h1>
				<p className="gh-text-muted">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
				<Link
					href="/"
					className="inline-flex items-center gap-2 px-4 py-2 text-sm border gh-border rounded-lg gh-text hover:gh-bg-canvas-subtle transition-colors"
				>
					← Back to home
				</Link>
			</div>
		</main>
	);
}
