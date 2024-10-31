import "./App.css";
import { useState, useEffect } from "react";
import Logo from "./ui/Logo";
import Divider from "./ui/Divider";
import DisplayWordToGuess from "./components/DisplayWordToGuess";
import UserGuess from "./components/UserGuess";

interface FallingLetters {
  position: number;
  letter: string;
}

function App() {
  // Display for word to guess & guessedWord

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [selectedText, setSelectedText] = useState(
  //   Array(arrayWord.length).fill(null)
  // );

  // // Falling Letters Functionality
  // const [fallingLetters, setFallingLetters] = useState<FallingLetters[]>([]);
  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const arrayLetters = letters.split("");
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

  // const handleTextFall = () => {
  //   const position = Math.floor(Math.random() * window.innerWidth);
  //   const randomLetter = Math.floor(Math.random() * arrayLetters.length);
  //   const getLetter = arrayLetters[randomLetter];

  //   setFallingLetters((prevCount) => [
  //     ...prevCount,
  //     { position: position, letter: getLetter },
  //   ]);
  // };

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
          {/* {arrayWord.every(
            (element, index) => element === selectedText[index]
          ) && <div>androx</div>} */}
        </nav>
        {/* {fallingLetters.map((cot, index) => (
          <button
            style={{
              left: cot.position,
              animation: "fall 5s linear forwards",
            }}
            className="absolute h-10 w-10 bg-[#303030] text-white rounded-lg hover:bg-red-700"
            onClick={(e) => {
              e.stopPropagation();
              getPerText(cot.letter, index);
            }}
          >
            {cot.letter}
          </button>
        ))} */}
        {/* <div className="flex justify-center items-center h-full w-full bg-[#5a6b64]">
          <button
            className={`${
              !gameStart ? "block" : "hidden"
            } bg-black/10 p-4 text-white rounded-lg hover:border-2 border-white`}
            onClick={(e) => {
              handleGame();
              e.stopPropagation();
              console.log(gameStart);
            }}
          >
            START GAME
          </button>
        </div> */}
        <div className="w-full h-28 bg-[#5a6b64]/80"></div>
      </div>
    </>
  );
}

export default App;
