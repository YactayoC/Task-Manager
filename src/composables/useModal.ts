import { CategoryTask } from '@/models/task';
import { ref } from 'vue';

const isOpenModal = ref(false);
const categoryInModal = ref<CategoryTask>(CategoryTask.Todo);

const useModal = () => {
  const setOpenModal = (category: CategoryTask) => {
    isOpenModal.value = true;
    categoryInModal.value = category;
  };

  const setCloseModal = () => {
    isOpenModal.value = false;
    categoryInModal.value = CategoryTask.Todo;
  };

  return {
    isOpenModal,
    categoryInModal,
    setOpenModal,
    setCloseModal,
  };
};

export default useModal;
