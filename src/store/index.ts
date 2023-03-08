import { createStore } from 'vuex';

import { TasksState } from './task/state';
import tasksModule from './task';

export interface StateInterface {
  tasks: TasksState;
}

export default createStore<StateInterface>({
  modules: {
    tasks: tasksModule,
  },
});
