import { CategoryTask, Task } from '@/models/task';
import { getDataFromLocalStorage } from '@/utils';

export interface TasksState {
  tasksTodo: Task[];
  tasksInProgress: Task[];
  tasksDone: Task[];
}

function state(): TasksState {
  return {
    tasksTodo: getDataFromLocalStorage(CategoryTask.Todo),
    tasksInProgress: getDataFromLocalStorage(CategoryTask.InProgress),
    tasksDone: getDataFromLocalStorage(CategoryTask.Done),
  };
}

export default state;
