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
  checkAnswer: () => void;
  isCorrect: boolean | null;
};

const useGetTextStore = create<Props>((set) => ({
  // Initial word setup
  wordToGuess:
    wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)].split(""),
  selectedText: Array(wordsToGuess[0].length).fill(null), // Set to match the initial word length
  currentIndex: 0,
  word: "",
  isCorrect: null,

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
        isCorrect: null,
      };
    }),

  fetchWord: async () => {
    const response = await axios.get(
      "https://random-word-api.herokuapp.com/word"
    );
  },

  checkAnswer: () =>
    set((state) => {
      const guess = state.wordToGuess.toString();
      const selected = state.selectedText.toString();

      if (!state.selectedText.includes(null)) {
        if (guess === selected) {
          console.log("CORRECT");
          return {
            isCorrect: true,
          };
        } else {
          const timeout = setTimeout(state.reset, 1000);

          () => clearTimeout(timeout);
          console.log("WRONG");
          return { isCorrect: false };
        }
      }

      return {};
    }),
}));

export default useGetTextStore;
