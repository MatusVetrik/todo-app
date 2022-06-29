import {AnyAction, Dispatch, ThunkDispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {addTodoList} from "./redux/reducer";
import {Todos, TodosList} from "./types";

export const updateData = (data: TodosList) =>
  axios
    .put(`${import.meta.env.VITE_MOCKAPI_ENDPOINT}/1`, {
      ...data,
    })
    .catch(function (error) {
      console.log(error);
    });

export const getData = (
  dispatch: ThunkDispatch<
    {
      todosListReducer: Todos[];
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>
) => {
  axios
    .get(`${import.meta.env.VITE_MOCKAPI_ENDPOINT}`)
    .then(function (response) {
      response.data[0].todosList.forEach((todos: Todos) => {
        dispatch(addTodoList(todos));
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
