import { create } from 'zustand'

interface RegisterModalStore {
  isOpen: boolean
  handleOpen: () => void
  handleClose: () => void
};

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: true,
  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}))

export default useRegisterModal;
