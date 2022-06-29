import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {findIndexOfItem, findIndexOfList, getUniqueData} from "./helper";
import {updateData} from "../server";
import {Todo, Todos, TodosList} from "../types";

const initialState: TodosList = {
  todosList: [],
};

export const todosListReducer = createSlice({
  name: "todosList",
  initialState,
  reducers: {
    addTodoList: (state: TodosList, action: PayloadAction<Todos>) => {
      state.todosList.push({
        ...action.payload,
      });
      state.todosList = getUniqueData(state.todosList);
      updateData(state);
    },

    addItemToTodoList: (
      state: TodosList,
      action: PayloadAction<{id: number; todo: Todo}>
    ) => {
      state.todosList
        .find((list) => list.id == action.payload.id)
        ?.todos?.push(action.payload.todo);
      updateData(state);
    },

    deleteItemFromTodoList: (
      state: TodosList,
      action: PayloadAction<{listId: number; todoId: number}>
    ) => {
      const foundListIndex = findIndexOfList(action.payload.listId, state);
      const updatedListOfTodos = state.todosList[foundListIndex]?.todos?.filter(
        (todo) => todo.id !== action.payload.todoId
      );

      state.todosList[foundListIndex].todos = updatedListOfTodos;
      updateData(state);
    },

    deleteTodoList: (
      state: TodosList,
      action: PayloadAction<{listId: number}>
    ) => {
      const updatedListOfTodos = state.todosList.filter(
        (list) => list.id !== action.payload.listId
      );

      state.todosList = updatedListOfTodos;
      updateData(state);
    },

    setItemCompleted: (
      state: TodosList,
      action: PayloadAction<{listId: number; todoId: number; status: boolean}>
    ) => {
      const foundListIndex = findIndexOfList(action.payload.listId, state);

      const foundItemIndex = findIndexOfItem(
        foundListIndex,
        state,
        action.payload.todoId
      );

      state.todosList[foundListIndex].todos[foundItemIndex].completed =
        action.payload.status;
      updateData(state);
    },
  },
});

export const {
  addTodoList,
  addItemToTodoList,
  deleteItemFromTodoList,
  deleteTodoList,
  setItemCompleted,
} = todosListReducer.actions;

export default todosListReducer.reducer;
