import "./App.css";
import { useState, useEffect } from "react";
import Logo from "./ui/Logo";
import Divider from "./ui/Divider";
import DisplayWordToGuess from "./components/DisplayWordToGuess";
import UserGuess from "./components/UserGuess";
import FallingLetters from "./components/FallingLetters";
import StartButton from "./components/StartButton";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [selectedText, setSelectedText] = useState(
  //   Array(arrayWord.length).fill(null)
  // );

  // const [gameStart, setGameStart] = useState(false);

  // const getPerText = (value: string, index: number) => {
  //   if (currentIndex < selectedText.length) {
  //     setSelectedText((prevArray) => {
  //       const newArray = [...prevArray];
  //       newArray[currentIndex] = value;
  //       return newArray;
  //     });
  //     setCurrentIndex(currentIndex + 1);
  //   }
  //   fallingLetters.splice(index, 1);
  // };

  // const handleGame = () => {
  //   setGameStart(!gameStart);
  //   setFallingLetters([]);
  // };

  // useEffect(() => {
  //   if (gameStart) {
  //     const intervalId = setInterval(handleTextFall, 400);

  //     return () => clearInterval(intervalId);
  //   }
  // }, [gameStart]);

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

                {/* {selectedText.map((word, index) => (
                  <div
                    key={index}
                    className="flex w-10 h-10 border-2 border-[#4CCD99] rounded-lg justify-center items-center font-bold"
                  >
                    {word}
                  </div>
                ))} */}
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
