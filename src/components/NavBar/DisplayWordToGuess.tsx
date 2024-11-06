import useGetTextStore from "../../stores/useGetTextStore";

const DisplayWordToGuess = () => {
  const wordToGuess = useGetTextStore((state) => state.wordToGuess);

  return (
    <div className="flex space-x-2">
      {wordToGuess.map((letter, index) => (
        <span
          key={index}
          className="flex w-10 h-10 bg-[#4CCD99] rounded-lg justify-center items-center font-bold"
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default DisplayWordToGuess;
