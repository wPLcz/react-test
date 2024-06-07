import { useCallback, useEffect, useRef, useState } from "react";

type AsyncFunction = (...args: any[]) => Promise<any>;

interface FetchState<Data> {
  isLoading: boolean;
  isError: boolean;
  data: Data | undefined;
  retry: () => void;
}

export function useFetch<TData = any>(
  asyncFunction: AsyncFunction
): FetchState<TData> {
  const asyncFunctionRef = useRef(asyncFunction);
  asyncFunctionRef.current = asyncFunction;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<TData | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setData(undefined);
    try {
      const result = await asyncFunctionRef.current();
      setData(result);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    isError,
    data,
    retry: fetchData,
  };
}
