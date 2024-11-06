import useGameStartStop from "../utils/useGameStartStop";

const CloseButton = () => {
  const { gameStartStop } = useGameStartStop();

  return (
    <button onClick={gameStartStop} className="ml-auto pr-4">
      ❌
    </button>
  );
};

export default CloseButton;
