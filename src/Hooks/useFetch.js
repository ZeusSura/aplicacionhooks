import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const callAPI = async () => {
      let respuesta = await fetch(url);
      let dataResponse = await respuesta.json();

      setstate({
        loading: false,
        data: dataResponse,
        error: null,
      });
    };
    callAPI();
  }, [url]);

  return state;
}
