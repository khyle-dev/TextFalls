import { useState } from "react";
import useGetWordStore from "./useGetWordStore";

const useGetText = () => {
  const wordToGuess = useGetWordStore((state) => state.wordToGuess);
  const [selectedText, setSelectedText] = useState<string[]>(
    Array(wordToGuess.length).fill(null)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const getText = (value: string) => {
    if (currentIndex < wordToGuess.length) {
      setSelectedText((prevArray) => {
        const newArray = [...prevArray];
        newArray[currentIndex] = value;
        return newArray;
      });
      setCurrentIndex(currentIndex + 1);
      console.log(selectedText);
    }
    // fallingLetters.splice(index, 1);
  };

  return { getText, selectedText };
};

export default useGetText;
