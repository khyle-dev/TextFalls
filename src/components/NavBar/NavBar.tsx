import Logo from "../../ui/Logo";
import Divider from "../../ui/Divider";
import DisplayWordToGuess from "./DisplayWordToGuess";
import UserGuess from "./UserGuess";
import useGameStateStore from "../../stores/useGameStateStore";
import CloseButton from "../../ui/CloseButton";
import useGetTextStore from "../../stores/useGetTextStore";

const NavBar = () => {
  const gameState = useGameStateStore((state) => state.gameState);
  const wordToGuessArray = useGetTextStore((state) => state.wordToGuess);
  const selectedTextArray = useGetTextStore((state) => state.selectedText);
  const wordToGuess = wordToGuessArray.join("");
  const selectedText = selectedTextArray.join("");

  return (
    <>
      <nav className="flex w-full h-40 bg-[#303030] p-6 space-x-14 items-center text-white shadow-black shadow-sm">
        <Logo />
        <Divider />
        {gameState && (
          <>
            <div className="flex flex-col space-y-2">
              <DisplayWordToGuess />
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  <UserGuess />
                </div>
              </div>
            </div>
            <CloseButton />
            {selectedText === wordToGuess ? <div>HELLO</div> : <div>sup</div>}
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
