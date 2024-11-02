import useGameStateStore from "../stores/useGameStateStore";
import useGetTextStore from "../stores/useGetTextStore";

const CloseButton = () => {
  const toggleGameState = useGameStateStore((state) => state.toggleGameState);
  const reset = useGetTextStore((state) => state.reset);

  const handleClose = () => {
    toggleGameState();
    reset();
  };

  return (
    <button
      onClick={handleClose}
      className="py-2 px-2 rounded-lg bg-red-700 ml-auto"
    >
      Exit Game
    </button>
  );
};

export default CloseButton;
