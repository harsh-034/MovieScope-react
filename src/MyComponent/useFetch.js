
import React, { useState, useEffect } from "react";
import {API_URL} from "./Context"

// setting the api link
// const API_KEY = process.env.REACT_APP_API_KEY;  //thish are api hide becouse secorety is very importent //its use .env file of root 
// export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */

const useFetch = (apiParams) => {
  const [isLoding, setIsLoding] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoding(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      if (data.Response === "True") {
        setIsLoding(false);
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // debouncing in react js
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${apiParams}`);
    }, 500);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isLoding, isError, movie };
};

export default useFetch;