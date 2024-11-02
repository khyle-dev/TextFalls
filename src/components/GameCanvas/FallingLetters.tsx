import { useState, useEffect } from "react";
import useGetTextStore from "../../stores/useGetTextStore";
import useGameStateStore from "../../stores/useGameStateStore";

interface FallingLetters {
  position: number;
  letter: string;
}

const FallingLetters = () => {
  const gameState = useGameStateStore((state) => state.gameState);
  const getText = useGetTextStore((state) => state.getText);

  const [fallingLetters, setFallingLetters] = useState<FallingLetters[]>([]);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arrayLetters = letters.split("");

  const displayTextFall = () => {
    const position = Math.floor(Math.random() * window.innerWidth);
    const randomLetter = Math.floor(Math.random() * arrayLetters.length);
    const getLetter = arrayLetters[randomLetter];

    setFallingLetters((prevCount) => [
      ...prevCount,
      { position: position, letter: getLetter },
    ]);
  };

  useEffect(() => {
    if (gameState) {
      const intervalId = setInterval(displayTextFall, 500);

      return () => clearInterval(intervalId);
    }
  }, [gameState]);

  return (
    <>
      {fallingLetters.map((fall, index) => (
        <button
          key={index}
          onClick={() => getText(fall.letter)}
          style={{
            left: fall.position,
            animation: "fall 10s linear forwards",
          }}
          className="absolute h-10 w-10 bg-[#303030] text-white rounded-lg hover:bg-red-700"
        >
          {fall.letter}
        </button>
      ))}
    </>
  );
};

export default FallingLetters;
