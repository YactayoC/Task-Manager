import { CategoryTask, RelevanceTask } from '@/models/task';

export function evaluateCategoryTask(category: CategoryTask) {
  switch (category) {
    case CategoryTask.Todo:
      return 'header-todo';
    case CategoryTask.InProgress:
      return 'header-inprogress';
    case CategoryTask.Done:
      return 'header-done';
    default:
      return '';
  }
}

export function evaluateRelevanceTask(relevance: RelevanceTask) {
  switch (relevance) {
    case 'high':
      return 'text-high';
    case 'medium':
      return 'text-medium';
    case 'low':
      return 'text-low';
    default:
      return '';
  }
}
