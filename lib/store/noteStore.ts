import { create } from "zustand";
import { NoteTag } from "@/types/note";

interface DraftState {
  draft: {
    title: string;
    content: string;
    tag: NoteTag;
  };
  setDraft: (draft: Partial<DraftState["draft"]>) => void;
  clearDraft: () => void;
}

export const useDraftStore = create<DraftState>((set) => ({
  draft: {
    title: "",
    content: "",
    tag: "Work",
  },
  setDraft: (draft) =>
    set((state) => ({
      draft: { ...state.draft, ...draft },
    })),
  clearDraft: () => 
    set({
      draft: { title: "", content: "", tag: "Work" },
    }),
}));
