import { create } from "zustand";

type Props = {
  gameState: boolean;
  toggleGameState: () => void;
};

const useGameStateStore = create<Props>((set) => ({
  gameState: false,
  toggleGameState: () => set((state) => ({ gameState: !state.gameState })),
}));

export default useGameStateStore;
