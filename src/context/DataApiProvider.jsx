import { useEffect, useState } from "react";
import useFetchAxios from "../hooks/useFetchAxios";
import { DataApiContext } from "./DataApiContext";


export const DataApiProvider = ({ children }) => {

  const { data, errors } = useFetchAxios('http://localhost:5000/api/pizzas');
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
