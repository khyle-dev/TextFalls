import "./App.css";
import Logo from "./ui/Logo";
import Divider from "./ui/Divider";
import DisplayWordToGuess from "./components/DisplayWordToGuess";
import UserGuess from "./components/UserGuess";
import FallingLetters from "./components/FallingLetters";
import StartButton from "./components/StartButton";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <nav className="flex w-full h-36 bg-[#303030] p-6 space-x-14 items-center text-white shadow-black shadow-sm z-0">
          <Logo />
          <Divider />
          <div className="flex flex-col space-y-2">
            <DisplayWordToGuess />
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <UserGuess />
              </div>
            </div>
          </div>
          <StartButton />
        </nav>
        <div className="relative justify-center items-center w-full h-screen overflow-hidden bg-[#5A6B64]">
          <FallingLetters />
        </div>
      </div>
    </>
  );
}

export default App;
