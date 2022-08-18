/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';

export function useFetchGet(
  args,
  fetchingFunction,
  options = {},
) {
  args = Array.isArray(args) ? args : [args];
  options = {
    onMount: true,
    enabled: true,
    ...options,
  };

  const [response, setResponse] = useState({ data: options.default });
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(false);

  const getData = async (callback = undefined) => {
    if (!options.enabled) return;

    setIsLoading(true);
    
    let result = {};

    try {
      const { data, status } =  await (callback ? callback[0](...callback[1]) : fetchingFunction(...args));

      result = { data, status, error: 'Something went wrong!' }
    } catch (e) {
      result = { data: options.default, status: 400, error: 'Something went wrong, try again or check your connection' }
    }

    setIsLoading(false);
    setResponse(result);

    return result;
  }

  useEffect(() => {
    if (!isMounted.current) return;
    
    getData();
  }, [options.enabled, ...args]);

  useEffect(() => {
    if (options.onMount && !isMounted.current) {
      getData();
    }

    isMounted.current = true;
  }, []);

  return {
    getData,
    response,
    isError: response.status > 299,
    isLoading,
    setIsLoading,
    setResponse,
  };
}