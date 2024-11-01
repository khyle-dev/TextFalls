import useGetWordStore from "../hooks/useGetWordStore";

const DisplayWordToGuess = () => {
  const wordToGuess = useGetWordStore((state) => state.wordToGuess);

  return (
    <div className="flex space-x-2">
      {wordToGuess.map((letter, index) => (
        <span
          key={index}
          className="flex w-10 h-10 bg-[#4CCD99] rounded-lg justify-center items-center font-bold"
        >
          {letter || "_"}
        </span>
      ))}
    </div>
  );
};

export default DisplayWordToGuess;
