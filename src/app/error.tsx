"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="min-h-screen gh-bg-canvas-default flex items-center justify-center px-4">
			<div className="text-center space-y-6 max-w-md">
				<p className="text-8xl">⚠️</p>
				<h1 className="text-2xl font-semibold gh-text">Something went wrong</h1>
				<p className="gh-text-muted text-sm font-mono bg-gray-100 dark:bg-gray-800 rounded px-3 py-2">
					{error.message || "An unexpected error occurred"}
				</p>
				<div className="flex gap-3 justify-center">
					<button
						onClick={reset}
						className="px-4 py-2 text-sm border gh-border rounded-lg gh-text hover:gh-bg-canvas-subtle transition-colors"
					>
						Try again
					</button>
					<Link
						href="/"
						className="px-4 py-2 text-sm border gh-border rounded-lg gh-text hover:gh-bg-canvas-subtle transition-colors"
					>
						Back to home
					</Link>
				</div>
			</div>
		</main>
	);
}
