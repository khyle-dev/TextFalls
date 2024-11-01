import React from "react";
import useGameStateStore from "../hooks/useGameStateStore";

const StartButton = () => {
  const toggleGameState = useGameStateStore((state) => state.toggleGameState);
  return (
    <button
      className=" bg-black/10 hover:bg-white/10 px-10 py-6 text-white rounded-lg"
      onClick={toggleGameState}
    >
      Start
    </button>
  );
};

export default StartButton;
