import { useState, useEffect, useCallback } from 'react';

interface UseApiOptions<T> {
  getCachedData?: () => T | null;
}

export function useApi<T>(
  fetchFn: () => Promise<T>,
  options: UseApiOptions<T> = {}
) {
  const cachedData = options.getCachedData?.() || null;
  
  const [data, setData] = useState<T | null>(cachedData);
  const [loading, setLoading] = useState(!cachedData);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setError(null);
      const result = await fetchFn();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    if (!cachedData) loadData();
  }, [cachedData, loadData]);

  return { data, loading, error, refetch: loadData };
}
