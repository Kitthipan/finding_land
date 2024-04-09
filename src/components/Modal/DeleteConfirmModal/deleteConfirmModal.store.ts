import { create } from "zustand";

type MessageInfo = "info" | "success" | "error" | "warning";

type dataInfo = {
  title: string;
  description: string;
  isShow: boolean;
  callback?: () => void;
};

type DeleteConfirmModal = {
  title: string;
  description: string;
  isShow: boolean;
  callback?: () => void;
  setInfo: (value: dataInfo) => void;
  onClose: () => void;
};

export const useDeleteConfirmModal = create<DeleteConfirmModal>()((set) => ({
  title: "",
  description: "",
  isShow: false,
  setInfo: (value) => {
    set({ ...value });
  },
  onClose: () => {
    set({ isShow: false });
  },
}));
