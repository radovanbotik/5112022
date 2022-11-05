import { useState, useEffect } from "react";

export const useFetch = URL => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      console.log(URL);
      try {
        const resp = await fetch(URL);
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        const data = await resp.json();
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Couldnt fetch data");
        console.log(err.message);
      }
    };
    fetchData();
  }, [URL]);
  return { data: data, isPending: isPending, error: error };
};
