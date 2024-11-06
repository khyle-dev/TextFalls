import "./App.css";
import GameCanvas from "./components/GameCanvas/GameCanvas";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <NavBar />
        <GameCanvas />
      </div>
    </>
  );
}

export default App;
