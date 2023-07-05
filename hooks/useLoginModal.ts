import { create } from 'zustand'

interface LoginModalStore {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
