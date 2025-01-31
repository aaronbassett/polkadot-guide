import { create } from "zustand";

interface Count {
  count: number;
  inc: () => void;
}

const useCount = create<Count>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export default useCount;
