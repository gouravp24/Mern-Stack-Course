import axios from 'axios';
import { useState, useEffect } from 'react';    

function useFetchData(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const getApiData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response) {
          setData(response);
        }
      } catch (error) {
        setError(error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
     
  useEffect(() => {
    getApiData();
  }, []);

  return { data, loading, error };
}
    export default useFetchData;