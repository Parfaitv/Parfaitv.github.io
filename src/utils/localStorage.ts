import { Task } from '../types/task';

const TASKS_KEY = 'todo-tasks';

export const getTasks = (): Task[] => {
  const tasks = localStorage.getItem(TASKS_KEY);
  if (tasks) {
    try {
      return JSON.parse(tasks);
    } catch (error) {
      console.error('Failed to parse tasks from localStorage:', error);
      return [];
    }
  }
  return [];
};

export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
