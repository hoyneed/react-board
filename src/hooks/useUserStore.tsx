import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = { id: string; email: string };
type Action = {
    updateId: (email: State["id"]) => void;
    updateEmail: (email: State["email"]) => void;
};
const useUserStore = create<State & Action>()(
    persist(
        (set) => ({
            id: "",
            email: "",
            updateId: (id) => set({ id: id }),
            updateEmail: (email) => set({ email: email }),
        }),
        { name: "user-email" }
    )
);

export default useUserStore;
