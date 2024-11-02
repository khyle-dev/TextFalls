import React, { useState } from "react";
import useGetTextStore from "../stores/useGetTextStore";

const useCheckAnswer = () => {
  const wordToGuess = useGetTextStore((state) => {
    state.wordToGuess;
  });
  const selectedText = useGetTextStore((state) => {
    state.selectedText;
  });
  const [checkAnswer, setCheckAnswer] = useState(false);

  if (wordToGuess === selectedText) {
    setCheckAnswer(!true);
    console.log("true");
  } else {
    console.log("not same");
  }

  return { checkAnswer };
};

export default useCheckAnswer;
