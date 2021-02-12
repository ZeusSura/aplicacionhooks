import React, { useState, useEffect, useRef } from "react";

export default function useFetch(url) {
  const isMounted = useRef(true);
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const callAPI = async () => {
      let respuesta = await fetch(url);
      let dataResponse = await respuesta.json();

      if (isMounted.current) {
        setstate({
          loading: false,
          data: dataResponse,
          error: null,
        });
      }
    };
    callAPI();
  }, [url]);

  return state;
}
