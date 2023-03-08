import { CategoryTask } from '@/models/task';
import { ref } from 'vue';
import { useStore } from 'vuex';

interface TextsModal {
  title: 'New task' | 'Edit task';
  textButton: 'Add Task' | 'Update Task';
}

const isOpenModal = ref(false);
const categoryInModal = ref<CategoryTask>(CategoryTask.Todo);
const textsModal = ref<TextsModal>({
  title: 'New task',
  textButton: 'Add Task',
});

const useModal = () => {
  const store = useStore();

  const setOpenModal = (category: CategoryTask, hasData?: boolean) => {
    if (!hasData) {
      textsModal.value.title = 'New task';
      textsModal.value.textButton = 'Add Task';

      isOpenModal.value = true;
      categoryInModal.value = category;
      return;
    }

    isOpenModal.value = true;
    textsModal.value.title = 'Edit task';
    textsModal.value.textButton = 'Update Task';
  };

  const setCloseModal = () => {
    isOpenModal.value = false;
    categoryInModal.value = CategoryTask.Todo;
    store.commit('tasks/clearTaskActive');
  };

  return {
    isOpenModal,
    categoryInModal,
    textsModal,
    setOpenModal,
    setCloseModal,
  };
};

export default useModal;
