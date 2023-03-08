import { computed } from 'vue';
import { useStore } from 'vuex';

import { StateInterface } from '@/store';
import { CategoryTask } from '@/models/task';

const useTodos = () => {
  const store = useStore<StateInterface>();

  const getTasksTodoByCategory = (category: CategoryTask) => {
    if (category === CategoryTask.Todo) {
      return computed(() => store.state.tasks.tasksTodo);
    }

    if (category === CategoryTask.InProgress) {
      return computed(() => store.state.tasks.tasksInProgress);
    }

    if (category === CategoryTask.Done) {
      return computed(() => store.state.tasks.tasksDone);
    }
  };

  return {
    getTasksTodoByCategory,
  };
};

export default useTodos;
