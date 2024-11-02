import { create } from "zustand";
import { wordsToGuess } from "../utils/wordsToGuess";

type Props = {
  wordToGuess: string[];
  selectedText: (string | null)[];
  currentIndex: number;
  getText: (value: string) => void;
};

const useGetTextStore = create<Props>((set) => {
  const initialWord =
    wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)].split("");

  return {
    wordToGuess: initialWord,
    selectedText: Array(initialWord.length).fill(null),
    currentIndex: 0,

    getText: (value: string) =>
      set((state) => {
        if (state.currentIndex < state.wordToGuess.length) {
          const newSelectedText = [...state.selectedText];
          newSelectedText[state.currentIndex] = value;
          return {
            selectedText: newSelectedText,
            currentIndex: state.currentIndex + 1,
          };
        }
        return {};
      }),
  };
});

export default useGetTextStore;
