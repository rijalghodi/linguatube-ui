import { create } from "zustand";

type OpenaiApiKeyState = {
  openaiApiKey: string;
  setOpenaiApiKey: (input: string) => void;
};

export const useOpenaiApiKey = create<OpenaiApiKeyState>()((set) => ({
  openaiApiKey: "",
  setOpenaiApiKey: (input) => set({ openaiApiKey: input }),
}));
