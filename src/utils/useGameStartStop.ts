import useGameStateStore from "../stores/useGameStateStore";
import useGetTextStore from "../stores/useGetTextStore";

const useGameStartStop = () => {
  const toggleGameState = useGameStateStore((state) => state.toggleGameState);
  const reset = useGetTextStore((state) => state.reset);

  const gameStartStop = () => {
    toggleGameState();
    reset();
  };
  return { gameStartStop };
};

export default useGameStartStop;
