import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type State = { category: string };
type Action = {
    updateLabel: (category: string) => void;
};
const useCategory = create<State & Action>()(
    subscribeWithSelector((set) => ({
        category: "",
        updateLabel: (newCate) => set({ category: newCate }),
    }))
);

export default useCategory;
