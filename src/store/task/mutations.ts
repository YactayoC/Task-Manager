import { MutationTree } from 'vuex';

import { CategoryTask, Task } from '@/models/task';
import { TasksState } from './state';

const mutations: MutationTree<TasksState> = {
  addTaskByCategory(state: TasksState, task: Task) {
    const { category } = task;

    switch (category) {
      case CategoryTask.Todo:
        state.tasksTodo.push(task);
        localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
        break;
      case CategoryTask.InProgress:
        state.tasksInProgress.push(task);
        localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
        break;
      case CategoryTask.Done:
        state.tasksDone.push(task);
        localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
        break;
    }
  },

  updateCategoryTask(state: TasksState, dataTask: { task: Task; newCategory: CategoryTask }) {
    const { task, newCategory } = dataTask;

    switch (task.category) {
      case CategoryTask.Todo:
        state.tasksTodo = state.tasksTodo.filter((item) => item.id !== task.id);
        localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
        break;
      case CategoryTask.InProgress:
        state.tasksInProgress = state.tasksInProgress.filter((item) => item.id !== task.id);
        localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
        break;
      case CategoryTask.Done:
        state.tasksDone = state.tasksDone.filter((item) => item.id !== task.id);
        localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
        break;
    }

    task.category = newCategory;

    switch (newCategory) {
      case CategoryTask.Todo:
        state.tasksTodo.push(task);
        localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
        break;
      case CategoryTask.InProgress:
        state.tasksInProgress.push(task);
        localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
        break;
      case CategoryTask.Done:
        state.tasksDone.push(task);
        localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
        break;
    }
  },

  updateMovedTask(state: TasksState, dataTask: { moved: any; newCategory: CategoryTask }) {
    const { moved, newCategory } = dataTask;

    switch (newCategory) {
      case CategoryTask.Todo:
        state.tasksTodo[moved.oldIndex] = state.tasksTodo[moved.newIndex];
        state.tasksTodo[moved.newIndex] = moved.element;
        localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
        break;
      case CategoryTask.InProgress:
        state.tasksInProgress[moved.oldIndex] = state.tasksInProgress[moved.newIndex];
        state.tasksInProgress[moved.newIndex] = moved.element;
        localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
        break;
      case CategoryTask.Done:
        state.tasksDone[moved.oldIndex] = state.tasksDone[moved.newIndex];
        state.tasksDone[moved.newIndex] = moved.element;
        localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
        break;
      default:
        break;
    }
  },

  removeTaskByCategory(state: TasksState, task: Task) {
    const { category } = task;

    switch (category) {
      case CategoryTask.Todo:
        state.tasksTodo = state.tasksTodo.filter((item) => item.id !== task.id);
        localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
        break;
      case CategoryTask.InProgress:
        state.tasksInProgress = state.tasksInProgress.filter((item) => item.id !== task.id);
        localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
        break;
      case CategoryTask.Done:
        state.tasksDone = state.tasksDone.filter((item) => item.id !== task.id);
        localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
        break;
      default:
        break;
    }
  },

  clearAllTasksByCategory(state: TasksState, category: CategoryTask) {
    switch (category) {
      case CategoryTask.Todo:
        state.tasksTodo = [];
        localStorage.setItem(CategoryTask.Todo, JSON.stringify(state.tasksTodo));
        break;
      case CategoryTask.InProgress:
        state.tasksInProgress = [];
        localStorage.setItem(CategoryTask.InProgress, JSON.stringify(state.tasksInProgress));
        break;
      case CategoryTask.Done:
        state.tasksDone = [];
        localStorage.setItem(CategoryTask.Done, JSON.stringify(state.tasksDone));
        break;
      default:
        break;
    }
  },
};

export default mutations;
