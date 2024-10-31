import { useState, useEffect } from "react";
import { wordsToGuess } from "../wordsToGuess";

const useGetWordToGuess = () => {
  const random = Math.floor(Math.random() * wordsToGuess.length);
  const wordToGuess = wordsToGuess[random].split("");

  return { wordToGuess };
};

export default useGetWordToGuess;
