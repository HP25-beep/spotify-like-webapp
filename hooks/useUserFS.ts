import { create } from "zustand";

interface UserFSStore {
  hasChange: boolean;
  onChange: () => void;
  offChange: () => void;
};

const useUserFS = create<UserFSStore>((set) => ({
  hasChange: false,
  onChange: () => set({ hasChange: true }),
  offChange: () => set({ hasChange: false })
}));

export default useUserFS;
