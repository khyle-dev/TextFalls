import useGameStartStop from "../utils/useGameStartStop";

const StartButton = () => {
  const { gameStartStop } = useGameStartStop();

  return (
    <>
      <button
        className=" bg-black/10 hover:bg-white/10 px-10 py-6 text-white rounded-lg"
        onClick={gameStartStop}
      >
        New Game
      </button>
    </>
  );
};

export default StartButton;
