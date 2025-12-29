import type { Todo } from "../types/todo";

const STORAGE_KEY = "todos";

export const loadTodos = (): Todo[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  return JSON.parse(data) as Todo[];
};

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};
