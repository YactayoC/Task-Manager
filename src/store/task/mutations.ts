import { MutationTree } from 'vuex';

import { CategoryTask, Task } from '@/models/task';
import { TasksState } from './state';

const mutations: MutationTree<TasksState> = {
  addTaskByCategory(state: TasksState, task: Task) {
    const { category } = task;

    if (category === CategoryTask.Todo) {
      state.tasksTodo.push(task);
    }

    if (category === CategoryTask.InProgress) {
      state.tasksInProgress.push(task);
    }

    if (category === CategoryTask.Done) {
      state.tasksDone.push(task);
    }
  },

  removeTaskByCategory(state: TasksState, task: Task) {
    const { category } = task;

    if (category === CategoryTask.Todo) {
      state.tasksTodo = state.tasksTodo.filter((item) => item.id !== task.id);
    }

    if (category === CategoryTask.InProgress) {
      state.tasksInProgress = state.tasksInProgress.filter((item) => item.id !== task.id);
    }

    if (category === CategoryTask.Done) {
      state.tasksDone = state.tasksDone.filter((item) => item.id !== task.id);
    }
  },
};

export default mutations;
