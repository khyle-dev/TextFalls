import useGetTextStore from "../../stores/useGetTextStore";
import Winner from "../../ui/Winner";

const UserGuess = () => {
  const selectedText = useGetTextStore((state) => state.selectedText);
  const wordToGuess = useGetTextStore((state) => state.wordToGuess);
  const reset = useGetTextStore((state) => state.reset);
  const joinSelectedText = selectedText.join("");
  const joinWordToGuess = wordToGuess.join("");

  if (!selectedText.includes(null)) {
    if (joinSelectedText === joinWordToGuess) {
      return <Winner />;
    } else {
      return <Winner />;
    }
  }

  return (
    <>
      {selectedText.map((text, index) => (
        <div
          key={index}
          className="flex w-10 h-10 border-2 text-white border-[#4CCD99] rounded-lg justify-center items-center font-bold"
        >
          {text}
        </div>
      ))}
    </>
  );
};

export default UserGuess;
