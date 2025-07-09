import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchAxios = (url) => {

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect( () => {
    getFetchData();
  }, [url]);
  
  const getFetchData = async () => {
    try {

      const resp = await axios.get(url);
      setData(resp.data);
      setErrors(null);

    } catch (error) {
      console.log('Error cargando datos: ' + error.message);
      setErrors(error);
      setData(null);
    }
  }
  
  return { data, errors, getFetchData }
}

export default useFetchAxios;