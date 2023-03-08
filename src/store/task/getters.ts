import { GetterTree } from 'vuex';

import { TasksState } from './state';
import { StateInterface } from '../index';
import { CategoryTask } from '@/models/task';

const getters: GetterTree<TasksState, StateInterface> = {
  getTasksByCategory: (state) => (category: CategoryTask) => {
    if (category === CategoryTask.Todo) {
      return state.tasksTodo;
    }

    if (category === CategoryTask.InProgress) {
      return state.tasksInProgress;
    }

    if (category === CategoryTask.Done) {
      return state.tasksDone;
    }
  },

  getTask: (state) => {
    return state.taskSelected;
  },
};

export default getters;
