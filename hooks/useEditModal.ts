import { create } from 'zustand'

interface EditModalStore {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const useEditModal = create<EditModalStore>((set) => ({
  isOpen: false,
  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}));

export default useEditModal;
