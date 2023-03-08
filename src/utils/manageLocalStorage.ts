import { CategoryTask } from '@/models/task';

export const getDataFromLocalStorage = (category: CategoryTask) => {
  if (category === CategoryTask.Todo) {
    return localStorage.getItem(CategoryTask.Todo) ? JSON.parse(localStorage.getItem(CategoryTask.Todo) || '') : [];
  }

  if (category === CategoryTask.InProgress) {
    return localStorage.getItem(CategoryTask.InProgress)
      ? JSON.parse(localStorage.getItem(CategoryTask.InProgress) || '')
      : [];
  }

  if (category === CategoryTask.Done) {
    return localStorage.getItem(CategoryTask.Done) ? JSON.parse(localStorage.getItem(CategoryTask.Done) || '') : [];
  }
};
