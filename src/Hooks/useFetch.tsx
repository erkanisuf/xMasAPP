import React from "react";

// Hook to fetch data
export const useFetch = (url: string, options?: object) => {
  const [response, setResponse] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
        setIsLoading(false);
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
        }
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
};
