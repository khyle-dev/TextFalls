import React, { useEffect, useState } from "react";
import useGetWordToGuess from "../hooks/useGetWordToGuess";

const UserGuess = () => {
  const { wordToGuess } = useGetWordToGuess();
  const holdWordToGuess = wordToGuess;

  return (
    <>
      {holdWordToGuess.map((word, index) => (
        <div
          key={index}
          className="flex w-10 h-10 border-2 border-[#4CCD99] rounded-lg justify-center items-center font-bold"
        >
          {word}
        </div>
      ))}
    </>
  );
};

export default UserGuess;
