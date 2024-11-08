import React from "react";
import useGameStartStop from "../utils/useGameStartStop";

const Popup = () => {
  const { gameStartStop } = useGameStartStop();
  return (
    <div className="fixed gap-10 flex flex-col justify-center items-center inset-0 z-50 h-screen w-full bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="text-3xl">NICELY DONE!</div>
      <button
        onClick={gameStartStop}
        className="w-40 h-16 bg-black/50 hover:bg-white/10"
      >
        RESET
      </button>
    </div>
  );
};

export default Popup;
