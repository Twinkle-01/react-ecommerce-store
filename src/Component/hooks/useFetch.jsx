import { useEffect, useState } from "react";

const UseFetch = (URL) => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setloading(true);
    setError(null);
    const res = fetch(URL)
      .then((res) => {
        if (!res.ok) {
         throw (new Error("Failed to fetch"))
        }
        return res.json();
      })
      .then((data) => {
        setloading(false);
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
        setloading(false);
      });
  }, [URL]);

  return {
    loading,
    error,
    data,
  };
};

export default UseFetch;
