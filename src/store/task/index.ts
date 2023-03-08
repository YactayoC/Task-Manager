import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { TasksState } from './state';
import getters from './getters';
import mutations from './mutations';

const tasksModule: Module<TasksState, StateInterface> = {
  namespaced: true,

  getters,
  mutations,
  state,
};

export default tasksModule;
