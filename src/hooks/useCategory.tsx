import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type State = { label: string };
type Action = {
    updateLabel: (email: string) => void;
};
const useCategory = create<State & Action>()(
    subscribeWithSelector((set) => ({
        label: "전체",
        updateLabel: (newLabel) => set({ label: newLabel }),
    }))
);

export default useCategory;
