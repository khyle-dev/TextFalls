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
    <button onClick={handleClose} className="ml-auto pr-4">
      ❌
    </button>
  );
};

export default CloseButton;
