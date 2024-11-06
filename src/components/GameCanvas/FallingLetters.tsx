import { useState, useEffect } from "react";
import useGetTextStore from "../../stores/useGetTextStore";
import useGameStateStore from "../../stores/useGameStateStore";
import { LETTERS, FALL_SPEED, FALL_INTERVAL } from "../../utils/constants";

interface FallingLetters {
  position: number;
  letter: string;
}

const FallingLetters = () => {
  const gameState = useGameStateStore((state) => state.gameState);
  const getText = useGetTextStore((state) => state.getText);
  const [fallingLetters, setFallingLetters] = useState<FallingLetters[]>([]);

  const displayTextFall = () => {
    const getPosition = Math.floor(Math.random() * window.innerWidth);
    const randomLetter = Math.floor(Math.random() * LETTERS.length);
    const getLetter = LETTERS[randomLetter];

    setFallingLetters((prevCount) => [
      ...prevCount,
      { position: getPosition, letter: getLetter },
    ]);
  };

  useEffect(() => {
    if (gameState) {
      const intervalId = setInterval(displayTextFall, FALL_INTERVAL);

      return () => clearInterval(intervalId);
    }
  }, [gameState]);

  return (
    <>
      {fallingLetters.map((fall, index) => (
        <button
          key={index}
          onClick={() => {
            fallingLetters.splice(index, 1, { position: 0, letter: "" });
            getText(fall.letter, index);
          }}
          style={{
            left: fall.position,
            animation: `fall linear forwards ${FALL_SPEED}`,
          }}
          className={`${
            fall.position === 0 ? "hidden" : "block"
          } absolute h-10 w-10 bg-[#303030] text-white rounded-lg hover:bg-red-700`}
        >
          {fall.letter}
        </button>
      ))}
    </>
  );
};

export default FallingLetters;
