import useGameStateStore from "../stores/useGameStateStore";
import useGetTextStore from "../stores/useGetTextStore";

const StartButton = () => {
  const toggleGameState = useGameStateStore((state) => state.toggleGameState);
  const reset = useGetTextStore((state) => state.reset);

  const handleStart = () => {
    toggleGameState();
    reset();
  };

  return (
    <>
      <button
        className=" bg-black/10 hover:bg-white/10 px-10 py-6 text-white rounded-lg"
        onClick={handleStart}
      >
        New Game
      </button>
    </>
  );
};

export default StartButton;
