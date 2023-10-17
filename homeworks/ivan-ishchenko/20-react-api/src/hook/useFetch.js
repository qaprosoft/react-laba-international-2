import {useState, useEffect} from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {data, loading, error};
}

export default useFetch;
