import { ref } from 'vue';

const useModal = () => {
  const isOpenModal = ref(false);

  const setOpenModal = () => {
    isOpenModal.value = !isOpenModal.value;
  };

  return {
    isOpenModal,
    setOpenModal,
  };
};

export default useModal;
