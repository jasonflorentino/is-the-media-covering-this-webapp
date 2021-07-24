import { useState } from "react";
import axios from "axios";

const API = {
  useFetchNewArticles
}

/**
 * @name useFetchNewArticles
 * @description Provides a function for fetching news article data from the API
 * and variables to store the data, read loading and error states, and read
 * an error message.
 * @returns {object {data: {}, requestData: function, loading: bool, error: bool: errorMessage: string}
 */
function useFetchNewArticles() {
  // React state variables
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  /**
   * @name requestData
   * @description Handles API request using the provided string
   * as well as sets loading and error states when necessary.
   * @param {string} query String representing the search query
   * @returns Promise
   */
  const requestData = async (query, page) => {
    setLoading(true);
    setError(false);
    let res = null;

    try {
      const config = {
        method: "get",
        url: process.env.REACT_APP_API_URL,
        params: {
          q: query,
          p: page || 1
        },
        headers: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
      res = await axios.request(config);
      setData(res?.data);
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.response?.data?.message);
      setData({ total_articles: 0 });
      setLoading(false);
      setError(true);
    }
  }

  return { data, requestData, loading, error, errorMessage };
}

export default API;