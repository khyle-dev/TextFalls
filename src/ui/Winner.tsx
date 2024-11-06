import React from "react";
import useGameStateStore from "../stores/useGameStateStore";
import useAlertDialog from "../stores/useAlertDialog";

const Winner = () => {
  const gameState = useGameStateStore((state) => state.toggleGameState);
  const toggleDialog = useAlertDialog((state) => state.toggleDialog);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div
          className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold mb-4">Dialog Title</h2>
          <p className="mb-4">This is a simple dialog box.</p>
          <button
            onClick={() => {
              gameState();
              toggleDialog();
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Winner;
