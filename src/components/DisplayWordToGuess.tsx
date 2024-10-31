import { useState } from "react";
import useGetWordToGuess from "../hooks/useGetWordToGuess";

const DisplayWordToGuess = () => {
  const { wordToGuess } = useGetWordToGuess();
  const holdWordToGuess = wordToGuess;

  return (
    <div className="flex space-x-2">
      {holdWordToGuess.map((letter, index) => (
        <span
          key={index}
          className="flex w-10 h-10 bg-[#4CCD99] rounded-lg justify-center items-center font-bold"
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default DisplayWordToGuess;