import {Todos, TodosList} from "../types";

export const getUniqueData = (data: Todos[]) =>
  data.filter(
    (todos: Todos, index: number) =>
      data.findIndex((todo: Todos) => todo.id === todos.id) === index
  );

export const findIndexOfList = (listId: number, state: TodosList) =>
  state.todosList.findIndex((list) => list.id === listId);

export const findIndexOfItem = (
  listIndex: number,
  state: TodosList,
  itemId: number
) => state.todosList[listIndex]?.todos?.findIndex((todo) => todo.id === itemId);
