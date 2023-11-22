import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
        const resp = await fetch(url); //En la const resp se guarda toda la respuesta del fetch en formato JSON
        const data = await resp.json(); //En la const data se recoge la info de "resp" pero parseandolo de manera que devuelve un objeto JavaScript 

      if (resp.ok) {
        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      } else {
        throw new Error(data.error || "Character not found");
      }
    } catch (error) {
        
        setState({
            data: null,
            isLoading: true,
            hasError: error.message,
          });

    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
