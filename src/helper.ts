import {Todos, TodosList} from "./types";

export const findIndexOfList = (listId: number, state: TodosList) =>
  state.todosList.findIndex((list) => list.id === listId);

export const findIndexOfItem = (
  listIndex: number,
  state: TodosList,
  itemId: number
) => state.todosList[listIndex]?.todos?.findIndex((todo) => todo.id === itemId);

export const getUniqueData = (data: Todos[]) =>
  data.filter(
    (todos: Todos, i: number) =>
      data.findIndex((obj: Todos) => obj.id === todos.id) === i
  );
