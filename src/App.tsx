import "./App.css";
import GameCanvas from "./components/GameCanvas/GameCanvas";
import NavBar from "./components/NavBar/NavBar";
import useAlertDialog from "./stores/useAlertDialog";
import Winner from "./ui/Winner";

function App() {
  const alertDialog = useAlertDialog((state) => state.alertDialog);
  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        {alertDialog && <Winner />}
        <NavBar />
        <GameCanvas />
      </div>
    </>
  );
}

export default App;
