import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchAxios = ({ url = null, options = {} } = {} ) => {

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const fetchData = async ({ url, options = {} }) => {
    try {

      const resp = await axios({ url, ...options });
      const data = resp.data;
      setData(data);
      setErrors(null);
      return data;

    } catch (error) {
      const serverMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          error.response?.data || 
                          error.message;
    
      setErrors(serverMessage);
      setData(null);
      throw new Error(serverMessage);
    }
  }

  useEffect( () => {
    if (url) {
      fetchData({ url, options });
    }
  }, []);
  
  return { data, errors, fetchData }
  
}

export default useFetchAxios;
