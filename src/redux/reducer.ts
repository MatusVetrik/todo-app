import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {findIndexOfItem, findIndexOfList, getUniqueData} from "../helper";
import {postData, updateData} from "../server";
import {Todo, Todos, TodosList} from "../types";

const initialState: TodosList = {
  todosList: [
    // {
    //   id: 1,
    //   name: "Todo list 1",
    //   todos: [
    //     {
    //       id: 2,
    //       title: "Title",
    //       text: "text",
    //       deadline: "2010-04-02T14:12:07",
    //       completed: true,
    //     },
    //     {
    //       id: 3,
    //       title: "Title",
    //       text: "text",
    //       deadline: "2010-04-02T14:12:07",
    //       completed: true,
    //     },
    //   ],
    // },
  ],
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
  setItemCompleted,
} = todosListReducer.actions;

export default todosListReducer.reducer;
