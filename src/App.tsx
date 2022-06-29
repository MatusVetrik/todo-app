import {Grid} from "@mui/material";
import {useEffect} from "react";
import {TodoListForm} from "./components/forms/TodoListForm";
import TodosList from "./components/todos/TodosList";
import {getData, postData} from "./server";
import {useAppDispatch, useAppSelector} from "./redux/hooks";

function App() {
  const todos = useAppSelector((state) => state.todosListReducer.todosList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getData(dispatch);
  }, []);

  return (
    <div className="App">
      <TodosList />
    </div>
  );
}

export default App;
