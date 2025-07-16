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
  private readonly prefix = 'cache_';

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
}

export const cache = new SessionCache();

export const CACHE_TTL = {
  PROFILE: 10 * 60 * 1000,      // 10 minutes
  CONTRIBUTIONS: 15 * 60 * 1000, // 15 minutes
} as const;
