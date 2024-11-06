import { create } from "zustand";
import { wordsToGuess } from "../utils/wordsToGuess";
import axios from "axios";

type Props = {
  wordToGuess: string[];
  selectedText: (string | null)[];
  currentIndex: number;
  getText: (value: string, index: number) => void;
  reset: () => void;
  fetchWord: () => void;
};

const useGetTextStore = create<Props>((set) => ({
  // Initial word setup
  wordToGuess:
    wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)].split(""),
  selectedText: Array(wordsToGuess[0].length).fill(null), // Set to match the initial word length
  currentIndex: 0,
  word: "",

  getText: (value, index) =>
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

  reset: () =>
    set(() => {
      const newWord =
        wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)].split("");
      return {
        wordToGuess: newWord, // Set a new random word
        selectedText: Array(newWord.length).fill(null), // Reset selectedText to match the new word length
        currentIndex: 0, // Reset index
      };
    }),

  fetchWord: async () => {
    const response = await axios.get(
      "https://random-word-api.herokuapp.com/word"
    );
  },
}));

export default useGetTextStore;
