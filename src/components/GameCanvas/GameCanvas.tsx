import FallingLetters from "./FallingLetters";
import StartButton from "../../ui/StartButton";
import useGameStateStore from "../../stores/useGameStateStore";

const GameCanvas = () => {
  const gameState = useGameStateStore((state) => state.gameState);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#5A6B64]">
      {gameState ? <FallingLetters /> : <StartView />}
    </div>
  );
};

const StartView = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full overflow-hidden bg-[#5A6B64]">
        <StartButton />
      </div>
    </>
  );
};

export default GameCanvas;
