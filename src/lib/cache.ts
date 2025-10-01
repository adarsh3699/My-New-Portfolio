/**
 * Session-based cache utility for API responses
 */

interface CacheItem<T> {
	data: T;
	timestamp: number;
	ttl: number;
}

class SessionCache {
	private memory = new Map<string, CacheItem<unknown>>();
	private readonly prefix = "cache_";

	getSync<T>(key: string): T | null {
		const item = this.memory.get(key);
		return item && this.isValid(item) ? (item.data as T) : null;
	}

	get<T>(key: string): T | null {
		// Try memory first
		const cached = this.getSync<T>(key);
		if (cached) return cached;

		// Try sessionStorage
		try {
			const stored = sessionStorage.getItem(this.prefix + key);
			if (!stored) return null;

			const item: CacheItem<T> = JSON.parse(stored);
			if (this.isValid(item)) {
				this.memory.set(key, item);
				return item.data;
			}

			// Clean up expired item
			sessionStorage.removeItem(this.prefix + key);
		} catch {
			// Silently handle storage errors
		}

		return null;
	}

	set<T>(key: string, data: T, ttlMs: number): void {
		const item: CacheItem<T> = {
			data,
			timestamp: Date.now(),
			ttl: ttlMs,
		};

		this.memory.set(key, item);

		try {
			sessionStorage.setItem(this.prefix + key, JSON.stringify(item));
		} catch {
			// Silently handle storage errors
		}
	}

	private isValid(item: CacheItem<unknown>): boolean {
		return Date.now() - item.timestamp < item.ttl;
	}

	// Additional utility methods
	delete(key: string): void {
		this.memory.delete(key);
		try {
			sessionStorage.removeItem(this.prefix + key);
		} catch {
			// Silently handle storage errors
		}
	}

	clear(): void {
		this.memory.clear();
		try {
			// Clear all cache items from sessionStorage
			const keys = Object.keys(sessionStorage);
			keys.forEach((key) => {
				if (key.startsWith(this.prefix)) {
					sessionStorage.removeItem(key);
				}
			});
		} catch {
			// Silently handle storage errors
		}
	}

	has(key: string): boolean {
		return this.get(key) !== null;
	}

	// Get cache info for debugging
	getInfo(key: string): { exists: boolean; age?: number; ttl?: number; expired?: boolean } {
		const item = this.memory.get(key);
		if (!item) {
			return { exists: false };
		}

		const age = Date.now() - item.timestamp;
		const expired = age >= item.ttl;

		return {
			exists: true,
			age,
			ttl: item.ttl,
			expired,
		};
	}
}

export const cache = new SessionCache();

// Common TTL constants for convenience (optional to use)
export const CACHE_TTL = {
	SHORT: 5 * 60 * 1000, // 5 minutes
	MEDIUM: 15 * 60 * 1000, // 15 minutes
	LONG: 60 * 60 * 1000, // 1 hour
	VERY_LONG: 2 * 60 * 60 * 1000, // 2 hours
} as const;

// Helper function to create dynamic cache keys
export const createCacheKey = (prefix: string, ...parts: (string | number)[]): string => {
	return [prefix, ...parts].join("_");
};

// Helper function for common caching pattern
export const withCache = async <T>(
	key: string,
	fetcher: () => Promise<T>,
	ttl: number = CACHE_TTL.MEDIUM
): Promise<T> => {
	const cached = cache.get<T>(key);
	if (cached) return cached;

	const data = await fetcher();
	cache.set(key, data, ttl);
	return data;
};
