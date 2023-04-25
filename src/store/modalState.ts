import { atomFamily } from 'recoil';

export const modalAtomFamily = atomFamily({
  key: 'modalAtomFamily',
  default: (id) => ({
    id,
    isOpen: false,
    title: '',
  }),
});
