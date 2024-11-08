import useGetTextStore from "../../stores/useGetTextStore";
import Popup from "../../ui/Popup";

const UserGuess = () => {
  const selectedText = useGetTextStore((state) => state.selectedText);
  const isCorrect = useGetTextStore((state) => state.isCorrect);

  return (
    <>
      {isCorrect && isCorrect != null && <Popup />}
      {selectedText.map((text, index) => (
        <div
          key={index}
          className={`${
            !isCorrect &&
            isCorrect != null &&
            "border-2 border-red-700 animate-jump animate-ease-linear"
          } flex w-10 h-10 border-2 border-[#4CCD99] text-white rounded-lg justify-center items-center font-bold`}
        >
          {text}
        </div>
      ))}
    </>
  );
};

export default UserGuess;
