import { create } from "zustand";

type Props = {
  alertDialog: boolean;
  toggleDialog: () => void;
};

const useAlertDialog = create<Props>((set) => ({
  alertDialog: false,
  toggleDialog: () => set((state) => ({ alertDialog: !state.alertDialog })),
}));

export default useAlertDialog;
