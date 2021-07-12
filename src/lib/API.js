import { useState } from "react";
import axios from "axios";

const API = {
  useFetchNewArticles
}

function useFetchNewArticles() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const requestData = async (query) => {
    setLoading(true);
    let res = null;

    try {
      const config = {
        method: "get",
        url: process.env.REACT_APP_API_URL,
        params: {
          q: query
        },
        headers: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
      res = await axios.request(config);
      setData(res.data);
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.response?.data?.message);
      setLoading(false);
      setError(true);
    }
  }


  return {data, requestData, loading, error, errorMessage};
}

export default API;