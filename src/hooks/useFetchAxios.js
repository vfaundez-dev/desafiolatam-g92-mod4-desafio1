import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchAxios = (url) => {

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

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

  useEffect( () => {
    getFetchData();
  }, [url]);
  
  return { data, errors, getFetchData }
  
}

export default useFetchAxios;
