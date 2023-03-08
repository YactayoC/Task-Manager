import { MutationTree } from 'vuex';

import { CategoryTask, Task } from '@/models/task';
import { TasksState } from './state';

const mutations: MutationTree<TasksState> = {
  addTaskByCategory(state: TasksState, task: Task) {
    const { category } = task;

    if (category === CategoryTask.Todo) {
      state.tasksTodo.push(task);
      localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
    }

    if (category === CategoryTask.InProgress) {
      state.tasksInProgress.push(task);
      localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
    }

    if (category === CategoryTask.Done) {
      state.tasksDone.push(task);
      localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
    }
  },

  updateCategoryTask(state: TasksState, dataTask: { task: Task; newCategory: CategoryTask }) {
    const { task, newCategory } = dataTask;

    if (task.category === CategoryTask.Todo) {
      state.tasksTodo = state.tasksTodo.filter((item) => item.id !== task.id);
      localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
    }

    if (task.category === CategoryTask.InProgress) {
      state.tasksInProgress = state.tasksInProgress.filter((item) => item.id !== task.id);
      localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
    }

    if (task.category === CategoryTask.Done) {
      state.tasksDone = state.tasksDone.filter((item) => item.id !== task.id);
      localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
    }

    task.category = newCategory;

    if (newCategory === CategoryTask.Todo) {
      state.tasksTodo.push(task);
      localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
    }

    if (newCategory === CategoryTask.InProgress) {
      state.tasksInProgress.push(task);
      localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
    }

    if (newCategory === CategoryTask.Done) {
      state.tasksDone.push(task);
      localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
    }
  },

  updateMovedTask(state: TasksState, dataTask: { moved: any; newCategory: CategoryTask }) {
    const { moved, newCategory } = dataTask;

    if (newCategory === CategoryTask.Todo) {
      state.tasksTodo[moved.oldIndex] = state.tasksTodo[moved.newIndex];
      state.tasksTodo[moved.newIndex] = moved.element;
      localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
    }

    if (newCategory === CategoryTask.InProgress) {
      state.tasksInProgress[moved.oldIndex] = state.tasksInProgress[moved.newIndex];
      state.tasksInProgress[moved.newIndex] = moved.element;
      localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
    }

    if (newCategory === CategoryTask.Done) {
      state.tasksDone[moved.oldIndex] = state.tasksDone[moved.newIndex];
      state.tasksDone[moved.newIndex] = moved.element;
      localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
    }
  },

  removeTaskByCategory(state: TasksState, task: Task) {
    const { category } = task;

    if (category === CategoryTask.Todo) {
      state.tasksTodo = state.tasksTodo.filter((item) => item.id !== task.id);
      localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
    }

    if (category === CategoryTask.InProgress) {
      state.tasksInProgress = state.tasksInProgress.filter((item) => item.id !== task.id);
      localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
    }

    if (category === CategoryTask.Done) {
      state.tasksDone = state.tasksDone.filter((item) => item.id !== task.id);
      localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
    }
  },
};

export default mutations;
