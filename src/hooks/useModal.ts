import { modalAtomFamily } from '@/store/modalState';
import { useRecoilState } from 'recoil';

const useModal = (modalId) => {
  const [modal, setModal] = useRecoilState(modalAtomFamily(modalId));

  const openModal = () => {
    setModal((modal) => ({ ...modal, isOpen: true }));
  };

  const closeModal = () => {
    setModal((modal) => ({ ...modal, isOpen: false }));
  };

  const toggleModal = () => {
    setModal((modal) => ({ ...modal, isOpen: !modal.isOpen }));
  };

  return { openModal, closeModal, toggleModal };
};

export default useModal;
