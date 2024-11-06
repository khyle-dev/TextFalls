import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [word, setWord] = useState([]);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await axios.get(
          "https://random-word-api.herokuapp.com/word"
        );
        setWord(response.data);
      } catch {
        console.log("error");
      }
    };
    fetchWord();
  }, []);

  return { word };
};

export default useFetchData;
