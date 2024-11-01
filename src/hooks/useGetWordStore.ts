import { create } from "zustand";
import { wordsToGuess } from "../utils/wordsToGuess";

type Props = {
  wordToGuess: string[];
};

const useGetWordStore = create<Props>(() => {
  const random = Math.floor(Math.random() * wordsToGuess.length);
  const selectedWord = wordsToGuess[random].split("");

  return {
    wordToGuess: selectedWord,
  };
});

export default useGetWordStore;
