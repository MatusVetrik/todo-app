import {AnyAction, Dispatch, ThunkDispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {addTodoList} from "./redux/reducer";
import {Todos, TodosList} from "./types";

export const postData = () => {
  axios
    .post("https://62b5c53ada3017eabb223233.mockapi.io/api/todos", {
      todosList: [],
    })
    .then()
    .catch(function (error) {
      console.log(error);
    });
};

export const updateData = (data: TodosList) => {
  axios
    .put(`https://62b5c53ada3017eabb223233.mockapi.io/api/todos/1`, {
      ...data,
    })
    .then()
    .catch(function (error) {
      console.log(error);
    });
};

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
    .get("https://62b5c53ada3017eabb223233.mockapi.io/api/todos")
    .then(function (response) {
      response.data[0].todosList.forEach((todos: Todos) => {
        dispatch(addTodoList(todos));
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
