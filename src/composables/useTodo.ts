import { computed } from 'vue';
import { useStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

import { StateInterface } from '@/store';
import { AddTask, CategoryTask, Task } from '@/models/task';

const useTodos = () => {
  const store = useStore<StateInterface>();

  const setTaskActive = (task: Task) => {
    store.commit('tasks/getTaskActive', task);
  };

  const getTaskActive = () => {
    return computed<Task>(() => store.getters['tasks/getTask']);
  };

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

  const addTask = (task: AddTask) => {
    const newTask: Task = { ...task, id: uuidv4() };
    store.commit('tasks/addTaskByCategory', newTask);
  };

  const updateDataTask = (task: Task, newData: AddTask) => {
    const dataTask = {
      task: task,
      newData: newData,
    };

    store.commit('tasks/updateDataTask', dataTask);
  };

  const updateMovedTask = (moved: any, newCategory: CategoryTask) => {
    const dataTaskMoved = {
      moved: moved,
      newCategory: newCategory,
    };

    store.commit('tasks/updateMovedTask', dataTaskMoved);
  };

  const updateCategoryTask = (task: Task, newCategory: CategoryTask) => {
    const dataTask = {
      task: task,
      newCategory: newCategory,
    };

    store.commit('tasks/updateCategoryTask', dataTask);
  };

  const removeTask = (task: Task) => {
    store.commit('tasks/removeTaskByCategory', task);
  };

  const clearAllTasksByCategory = (category: CategoryTask) => {
    store.commit('tasks/clearAllTasksByCategory', category);
  };

  return {
    setTaskActive,
    getTaskActive,
    getTasksTodoByCategory,
    addTask,
    updateDataTask,
    updateMovedTask,
    updateCategoryTask,
    removeTask,
    clearAllTasksByCategory,
  };
};

export default useTodos;
