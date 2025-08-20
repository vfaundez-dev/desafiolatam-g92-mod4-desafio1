import { useEffect, useState } from "react";
import useFetchAxios from "../hooks/useFetchAxios";
import { DataApiContext } from "./DataApiContext";


export const DataApiProvider = ({ children }) => {

  const url = 'http://localhost:5000/api/pizzas';
  const { data, errors } = useFetchAxios({ url });
  const [pizzas, setPizzas] = useState([]);
  
  useEffect(() => {
    if (errors) {
      setPizzas([]);
    } else if (data) {
      setPizzas(data);
    }
  }, [data, errors]);


  return (
    <DataApiContext.Provider
      value={{
        pizzas,
        errors
      }}
    >
      { children }
    </DataApiContext.Provider>
  )
}
