import {useCallback, useEffect, useState} from 'react';

export default function useAsync(
  callback: any,
  dependencies = [],
  options: {onSuccess?: any; onError?: any} = {},
) {
  const {onSuccess, onError} = options;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);
    setValue(undefined);
    try {
      const result = await callback();
      setValue(result);
      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(result);
      }
    } catch (err: any) {
      setError(err);
      if (onError && typeof onError === 'function') {
        onError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }, [...dependencies, callback, onSuccess, onError]);

  const query = useCallback(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return {query, isLoading, error, value};
}
