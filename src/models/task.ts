export interface Task {
  id: string;
  title: string;
  description?: string;
  relevance: RelevanceTask;
  category: CategoryTask;
}

export interface AddTask {
  title: string;
  description?: string;
  relevance: RelevanceTask;
  category: CategoryTask;
}

export type RelevanceTask = '' | 'low' | 'medium' | 'high';
export enum CategoryTask {
  Todo = 'Todo',
  InProgress = 'In Progress',
  Done = 'Done',
}
