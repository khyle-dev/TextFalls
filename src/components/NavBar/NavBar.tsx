import Logo from "../../ui/Logo";
import Divider from "../../ui/Divider";
import DisplayWordToGuess from "./DisplayWordToGuess";
import UserGuess from "./UserGuess";
import useGameStateStore from "../../stores/useGameStateStore";
import CloseButton from "../../ui/CloseButton";

const NavBar = () => {
  const gameState = useGameStateStore((state) => state.gameState);

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
            <div className="flex w-full">
              <CloseButton />
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
