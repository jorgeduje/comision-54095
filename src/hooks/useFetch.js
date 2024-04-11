import { useEffect, useState } from "react";

export const useFetch = (initial, endpoint) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const getData = fetch(endpoint);
    getData
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) =>setError(error))
      .finally( ()=> setLoading(false))

  }, []);

  return [data, loading, error]

};

// useFetch([], "dasdasd")
// useFetch({}, "dasdasd")
// useFetch(null, "dasdasd")

// x[0] = [ {} {} {}]
// x[1] = 20