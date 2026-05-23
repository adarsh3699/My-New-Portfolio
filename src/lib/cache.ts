// Simple in-memory + sessionStorage cache for client-side API responses

interface CacheItem<T> {
	data: T;
	timestamp: number;
	ttl: number;
}

const memory = new Map<string, CacheItem<unknown>>();

function isValid(item: CacheItem<unknown>): boolean {
	return Date.now() - item.timestamp < item.ttl;
}

export const cache = {
	/** Read from memory only (sync, safe to call during render) */
	getSync<T>(key: string): T | null {
		const item = memory.get(key);
		return item && isValid(item) ? (item.data as T) : null;
	},

	/** Read from memory then sessionStorage */
	get<T>(key: string): T | null {
		const mem = cache.getSync<T>(key);
		if (mem) return mem;

		try {
			const raw = sessionStorage.getItem(key);
			if (!raw) return null;
			const item: CacheItem<T> = JSON.parse(raw);
			if (isValid(item)) {
				memory.set(key, item);
				return item.data;
			}
			sessionStorage.removeItem(key);
		} catch {
			// Storage unavailable (SSR, private mode, quota exceeded)
		}
		return null;
	},

	/** Write to memory and sessionStorage */
	set<T>(key: string, data: T, ttlMs: number): void {
		const item: CacheItem<T> = { data, timestamp: Date.now(), ttl: ttlMs };
		memory.set(key, item);
		try {
			sessionStorage.setItem(key, JSON.stringify(item));
		} catch {
			// Silently ignore storage errors
		}
	},
};

export const CACHE_TTL = {
	MEDIUM: 15 * 60 * 1000, // 15 minutes
	LONG: 60 * 60 * 1000,   // 1 hour
} as const;

export async function withCache<T>(key: string, fetcher: () => Promise<T>, ttl: number): Promise<T> {
	const cached = cache.get<T>(key);
	if (cached) return cached;
	const data = await fetcher();
	cache.set(key, data, ttl);
	return data;
}
