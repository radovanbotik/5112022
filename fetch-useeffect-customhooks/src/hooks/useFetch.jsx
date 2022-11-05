import { useState, useEffect } from "react";

export const useFetch = URL => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      console.log(URL);
      try {
        const resp = await fetch(URL, { signal: controller.signal });
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        const data = await resp.json();
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Couldnt fetch data");
          console.log(err.message);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [URL]);
  return { data: data, isPending: isPending, error: error };
};
