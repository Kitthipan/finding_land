import { create } from "zustand";

type MessageInfo = "info" | "success" | "error" | "warning";

type dataInfo = {
  title: string;
  description: string;
  isShow: boolean;
  callback?: () => void;
};

type UpdateConfirmModal = {
  title: string;
  description: string;
  isShow: boolean;
  callback?: () => void;
  setInfo: (value: dataInfo) => void;
  onClose: () => void;
};

export const useUpdateConfirmModal = create<UpdateConfirmModal>()((set) => ({
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
